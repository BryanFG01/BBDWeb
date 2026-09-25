// Post-build step: renders the React app to static HTML with react-dom/server
// and injects it into dist/index.html. This gives crawlers (and social-link
// previews) real text content immediately, instead of the empty
// `<div id="root"></div>` shell that `vite build` produces on its own.
//
// No headless browser is involved, so it works on any build host (Vercel
// included). Animations only run in effects, so the output has no inline
// `opacity: 0` styles frozen mid-animation.
//
// Real visitors still get the interactive React app — main.tsx re-renders
// into #root on load, so this only changes what the *first* HTML response
// contains, not the runtime behavior.
//
// If rendering fails, the build fails loudly: shipping an empty page to
// crawlers silently is worse than a failed deploy.
import { readFile, writeFile, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distIndexPath = path.join(root, "dist/index.html");
const ssrOutDir = path.join(root, "dist-ssr");

await build({
  root,
  logLevel: "warn",
  build: { ssr: "src/entry-server.tsx", outDir: ssrOutDir, emptyOutDir: true },
});

const { render } = await import(pathToFileURL(path.join(ssrOutDir, "entry-server.js")).href);
const appHtml = render();

const template = await readFile(distIndexPath, "utf-8");
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) {
  throw new Error(`[prerender] No se encontró ${placeholder} en dist/index.html`);
}

await writeFile(distIndexPath, template.replace(placeholder, `<div id="root">${appHtml}</div>`), "utf-8");
await rm(ssrOutDir, { recursive: true, force: true });

console.log("[prerender] dist/index.html actualizado con el contenido renderizado.");
