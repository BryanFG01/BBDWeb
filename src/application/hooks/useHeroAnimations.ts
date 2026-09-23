import { useEffect, type RefObject } from "react";
import type { HeroAnimationPort } from "@/application/ports/HeroAnimationPort";
import { createAnimejsHeroAnimationAdapter } from "@/infrastructure/animation/animejsHeroAnimationAdapter";

const defaultAnimationPort = createAnimejsHeroAnimationAdapter();

export function useHeroAnimations(
  rootRef: RefObject<HTMLElement | null>,
  prefersReducedMotion: boolean,
  enabled: boolean,
  animationPort: HeroAnimationPort = defaultAnimationPort,
) {
  useEffect(() => {
    if (prefersReducedMotion || !enabled) return;
    const root = rootRef.current;
    if (!root) return;

    return animationPort.mount(root);
  }, [rootRef, prefersReducedMotion, enabled, animationPort]);
}
