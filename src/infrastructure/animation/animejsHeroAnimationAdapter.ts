import {
  animate,
  createAnimatable,
  createScope,
  stagger,
  utils,
  type AnimatableObject,
  type JSAnimation,
} from "animejs";
import type { HeroAnimationPort } from "@/application/ports/HeroAnimationPort";

/**
 * All anime.js specifics live here — the presentation layer only renders the
 * `.hero-word` / `.hero-fade-up` / `.hero-card` / `.hero-cards-stage` hooks this adapter reads.
 */
export function createAnimejsHeroAnimationAdapter(): HeroAnimationPort {
  return {
    mount(root: HTMLElement) {
      let headline: JSAnimation | undefined;
      let fadeUp: JSAnimation | undefined;
      let cardsIn: JSAnimation | undefined;
      let stage: AnimatableObject | undefined;

      const scope = createScope({ root }).add(() => {
        // Floating cards rise out of the depth behind the headline...
        cardsIn = animate(".hero-card", {
          opacity: [0, 1],
          scale: [0.6, 1],
          duration: 1600,
          delay: stagger(140, { start: 200, from: "random" }),
          ease: "outExpo",
          autoplay: false,
        });

        // ...then drift on their own out-of-sync loop so the layer never looks mechanical.
        root.querySelectorAll<HTMLElement>(".hero-card").forEach((card) => {
          const drift = utils.random(10, 22);
          animate(card, {
            translateY: [-drift, drift],
            rotate: [utils.random(-2, 0, 1), utils.random(0, 2, 1)],
            duration: utils.random(4500, 7500),
            delay: utils.random(0, 1500),
            loop: true,
            alternate: true,
            ease: "inOutSine",
          });
        });

        // The whole card stage tilts toward the pointer, giving the 3D parallax.
        if (window.matchMedia("(pointer: fine)").matches) {
          stage = createAnimatable(".hero-cards-stage", {
            rotateX: 1200,
            rotateY: 1200,
            ease: "outQuad",
          });
        }

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
          cardsIn?.play();
          observer.observe(root);
        });
      });

      const onPointerMove = (event: PointerEvent) => {
        const bounds = root.getBoundingClientRect();
        const nx = (event.clientX - bounds.left) / bounds.width - 0.5;
        const ny = (event.clientY - bounds.top) / bounds.height - 0.5;
        stage?.rotateY(nx * 14);
        stage?.rotateX(-ny * 10);
      };
      const onPointerLeave = () => {
        stage?.rotateY(0);
        stage?.rotateX(0);
      };
      root.addEventListener("pointermove", onPointerMove);
      root.addEventListener("pointerleave", onPointerLeave);

      return () => {
        cancelled = true;
        root.removeEventListener("pointermove", onPointerMove);
        root.removeEventListener("pointerleave", onPointerLeave);
        stage?.revert();
        observer.disconnect();
        scope.revert();
      };
    },
  };
}
