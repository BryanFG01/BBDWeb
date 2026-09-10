import { useEffect, useState } from "react";

/**
 * Keeps a conditionally-rendered element mounted for `transitionDurationMs`
 * after `isOpen` turns false, so its exit CSS transition can play instead of
 * the element being removed mid-animation. `isVisible` toggles a frame after
 * mount so entrance transitions (opacity/transform) have a "from" state to
 * animate away from.
 */
export function useMountTransition(isOpen: boolean, transitionDurationMs: number, skipTransition: boolean) {
  const [isMounted, setIsMounted] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      const frame = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    setIsVisible(false);
    if (skipTransition) {
      setIsMounted(false);
      return;
    }
    const timeout = setTimeout(() => setIsMounted(false), transitionDurationMs);
    return () => clearTimeout(timeout);
  }, [isOpen, transitionDurationMs, skipTransition]);

  return { isMounted, isVisible };
}
