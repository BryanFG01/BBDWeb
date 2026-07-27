import { animate, createScope, stagger } from "animejs";
import type { HeroAnimationPort } from "@/application/ports/HeroAnimationPort";

/**
 * All anime.js specifics live here — the presentation layer only renders the
 * `.hero-word` / `.hero-fade-up` hooks this adapter reads.
 */
export function createAnimejsHeroAnimationAdapter(): HeroAnimationPort {
  return {
    mount(root: HTMLElement) {
      const scope = createScope({ root }).add(() => {
        animate(".hero-word", {
          opacity: [0, 1],
          translateY: [24, 0],
          duration: 700,
          delay: stagger(70, { start: 200 }),
          ease: "outQuad",
        });

        animate(".hero-fade-up", {
          opacity: [0, 1],
          translateY: [16, 0],
          duration: 700,
          delay: stagger(120, { start: 500 }),
          ease: "outQuad",
        });
      });

      return () => scope.revert();
    },
  };
}
