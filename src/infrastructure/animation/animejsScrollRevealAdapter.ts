import { animate, stagger } from "animejs";
import type { ScrollRevealPort } from "@/application/ports/ScrollRevealPort";

/**
 * Reveals elements as they scroll into view. The presentation layer only marks
 * the hooks this adapter reads:
 * - `data-reveal` → the element itself fades up.
 * - `data-reveal-group` → each direct child fades up, staggered. A child that is
 *   itself a group is not animated as a whole; its own children are.
 *
 * Elements start hidden via CSS (index.css) until `data-revealed` is set.
 */
const TARGETS = "[data-reveal], [data-reveal-group] > :not([data-reveal-group])";

export function createAnimejsScrollRevealAdapter(): ScrollRevealPort {
  return {
    mount(root: HTMLElement) {
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((entry) => entry.isIntersecting).map((entry) => entry.target as HTMLElement);
          if (visible.length === 0) return;

          for (const el of visible) {
            observer.unobserve(el);
            el.setAttribute("data-revealed", "");
          }

          animate(visible, {
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 900,
            delay: stagger(110),
            ease: "outCubic",
            // Drop the inline styles so hover utilities (e.g. hover:opacity-90) keep working.
            onComplete: () => {
              for (const el of visible) {
                el.style.removeProperty("opacity");
                el.style.removeProperty("transform");
              }
            },
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
      );

      root.querySelectorAll<HTMLElement>(TARGETS).forEach((el) => {
        if (!el.hasAttribute("data-revealed")) observer.observe(el);
      });

      return () => observer.disconnect();
    },
  };
}
