import { useEffect, type RefObject } from "react";
import type { ScrollRevealPort } from "@/application/ports/ScrollRevealPort";
import { createAnimejsScrollRevealAdapter } from "@/infrastructure/animation/animejsScrollRevealAdapter";

const defaultRevealPort = createAnimejsScrollRevealAdapter();

export function useScrollReveal(
  rootRef: RefObject<HTMLElement | null>,
  prefersReducedMotion: boolean,
  revealPort: ScrollRevealPort = defaultRevealPort,
) {
  useEffect(() => {
    if (prefersReducedMotion) return;
    const root = rootRef.current;
    if (!root) return;

    return revealPort.mount(root);
  }, [rootRef, prefersReducedMotion, revealPort]);
}
