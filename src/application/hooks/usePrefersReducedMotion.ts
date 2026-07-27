import { useEffect, useState } from "react";
import type { MotionPreferencePort } from "@/application/ports/MotionPreferencePort";
import { matchMediaMotionAdapter } from "@/infrastructure/browser/matchMediaMotionAdapter";

export function usePrefersReducedMotion(motionPort: MotionPreferencePort = matchMediaMotionAdapter) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => motionPort.prefersReducedMotion());

  useEffect(() => motionPort.subscribe(setPrefersReducedMotion), [motionPort]);

  return prefersReducedMotion;
}
