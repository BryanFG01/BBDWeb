import type { MotionPreferencePort } from "@/application/ports/MotionPreferencePort";

const QUERY = "(prefers-reduced-motion: reduce)";

export const matchMediaMotionAdapter: MotionPreferencePort = {
  prefersReducedMotion() {
    if (typeof window === "undefined") return false;
    return window.matchMedia(QUERY).matches;
  },

  subscribe(onChange) {
    if (typeof window === "undefined") return () => {};

    const mediaQuery = window.matchMedia(QUERY);
    const handleChange = (event: MediaQueryListEvent) => onChange(event.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  },
};
