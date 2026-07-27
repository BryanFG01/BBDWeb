import { useEffect, type RefObject } from "react";

export function useVideoAutoplay(
  videoRef: RefObject<HTMLVideoElement | null>,
  isInView: boolean,
  prefersReducedMotion: boolean,
) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    if (isInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [videoRef, isInView, prefersReducedMotion]);
}
