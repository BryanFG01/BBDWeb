import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { usePrefersReducedMotion } from "@/application/hooks/usePrefersReducedMotion";

interface AmbientGlowProps {
  className?: string;
}

/**
 * A soft blurred glow that drifts slowly like a flashlight — centering is done
 * via margin (not transform) so anime.js can own translateX/Y/scale freely
 * without fighting a Tailwind transform utility on the same element.
 */
export function AmbientGlow({ className = "" }: AmbientGlowProps) {
  const glowRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !glowRef.current) return;

    const animation = animate(glowRef.current, {
      translateX: [-70, 70],
      translateY: [-50, 60],
      scale: [0.9, 1.2],
      duration: 9000,
      loop: true,
      alternate: true,
      ease: "inOutSine",
    });

    return () => {
      animation.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full bg-electric-indigo/20 blur-3xl ${className}`}
    />
  );
}
