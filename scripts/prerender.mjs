// Post-build step: renders the built SPA in a headless browser and writes the
// fully-rendered HTML back into dist/index.html. This gives crawlers (and
// social-link previews) real text content immediately, instead of the empty
// `<div id="root"></div>` shell that `vite build` produces on its own.
//
// Real visitors still get the interactive React app — main.tsx re-renders
// into #root on load, so this only changes what the *first* HTML response
// contains, not the runtime behavior.
//
// Failures here must never fail the whole build: if the browser can't launch
// or anything goes wrong, we log a warning and leave dist/index.html as-is.
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { preview } from "vite";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distIndexPath = path.resolve(__dirname, "../dist/index.html");

async function prerender() {
  const server = await preview({ preview: { port: 4173, strictPort: false } });
  const url = server.resolvedUrls?.local?.[0] ?? `http://localhost:${server.config.preview.port}/`;

  const browser = await chromium.launch();
  try {
    // Reduced motion skips the scroll-reveal/hero animations, so the snapshot
    // doesn't capture elements frozen mid-animation with inline `opacity: 0`
    // (which would leave the crawler-facing text hidden).
    const page = await browser.newPage({ reducedMotion: "reduce" });
    await page.goto(url, { waitUntil: "networkidle" });

    // The intro splash is a fixed overlay — <LandingPage> underneath always
    // renders regardless of its state, so the real content is already in the
    // DOM here. No need to interact with the page before capturing it.
    await page
      .locator("#servicios")
      .waitFor({ state: "attached", timeout: 5000 })
      .catch(() => {});
    await page.waitForTimeout(300);

    const html = await page.content();
    await writeFile(distIndexPath, html, "utf-8");
    console.log("[prerender] dist/index.html actualizado con el contenido renderizado.");
  } finally {
    await browser.close();
    await new Promise((resolve) => server.httpServer.close(resolve));
  }
}

prerender()
  .then(() => process.exit(0))
  .catch((error) => {
    console.warn("[prerender] Se omitió el prerenderizado (no bloquea el build):", error.message);
    process.exit(0);
  });
