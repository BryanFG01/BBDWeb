import { animate, createScope, stagger, type JSAnimation } from "animejs";
import type { HeroAnimationPort } from "@/application/ports/HeroAnimationPort";

/**
 * All anime.js specifics live here — the presentation layer only renders the
 * `.hero-word` / `.hero-fade-up` hooks this adapter reads.
 */
export function createAnimejsHeroAnimationAdapter(): HeroAnimationPort {
  return {
    mount(root: HTMLElement) {
      let headline: JSAnimation | undefined;
      let fadeUp: JSAnimation | undefined;

      const scope = createScope({ root }).add(() => {
        // Words emerge from the background: small, blurred and faded → full size and sharp.
        headline = animate(".hero-word", {
          opacity: [0, 1],
          scale: [0.2, 1],
          filter: ["blur(20px)", "blur(0px)"],
          duration: 1800,
          delay: stagger(120, { start: 300 }),
          ease: "outCubic",
          autoplay: false,
        });

        fadeUp = animate(".hero-fade-up", {
          opacity: [0, 1],
          translateY: [16, 0],
          duration: 700,
          delay: stagger(120, { start: 900 }),
          ease: "outQuad",
          autoplay: false,
        });
      });

      // Replay the headline every time the hero scrolls back into view.
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) headline?.restart();
        },
        { threshold: 0.4 },
      );

      // Hold the first play until the page and its fonts are ready and painted,
      // otherwise the animation runs while the page is still loading and goes unseen.
      let cancelled = false;
      const pageLoaded = new Promise<void>((resolve) => {
        if (document.readyState === "complete") resolve();
        else window.addEventListener("load", () => resolve(), { once: true });
      });
      Promise.all([pageLoaded, document.fonts.ready]).then(() => {
        requestAnimationFrame(() => {
          if (cancelled) return;
          fadeUp?.play();
          observer.observe(root);
        });
      });

      return () => {
        cancelled = true;
        observer.disconnect();
        scope.revert();
      };
    },
  };
}
