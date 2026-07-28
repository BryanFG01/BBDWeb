import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import { introContent } from "@/domain/intro/introContent";
import { usePrefersReducedMotion } from "@/application/hooks/usePrefersReducedMotion";

interface IntroSplashProps {
  onDismiss: () => void;
}

export function IntroSplash({ onDismiss }: IntroSplashProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    animate(".intro-video", {
      opacity: [0, 1],
      scale: [0.9, 1],
      duration: 700,
      delay: 120,
      ease: "outQuad",
    });
    animate(".intro-copy", {
      opacity: [0, 1],
      translateY: [16, 0],
      duration: 600,
      delay: 500,
      ease: "outQuad",
    });
    animate(".intro-button", {
      opacity: [0, 1],
      translateY: [16, 0],
      duration: 600,
      delay: 750,
      ease: "outBack",
    });
  }, [prefersReducedMotion]);

  async function handleGo() {
    if (isExiting) return;
    setIsExiting(true);

    if (prefersReducedMotion || !containerRef.current) {
      onDismiss();
      return;
    }

    await animate(containerRef.current, { opacity: [1, 0], duration: 450, ease: "inQuad" }).then();
    onDismiss();
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 overflow-hidden bg-obsidian px-6 text-center"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-indigo/20 blur-3xl" />

      <video
        className="intro-video pointer-events-none relative h-64 w-64 object-contain opacity-100 motion-safe:opacity-0 sm:h-80 sm:w-80"
        style={{ pointerEvents: "none" }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
      >
        <source src={introContent.videoSrc} type="video/webm" />
      </video>

      <div className="intro-copy opacity-100 motion-safe:opacity-0 relative">
        <h1 className="font-savee text-[30px] leading-[1.13] font-medium tracking-[-0.02em] text-paper sm:text-[36px]">
          {introContent.heading}
        </h1>
        <p className="mt-2 font-savee text-[16px] font-normal text-pearl">{introContent.subheading}</p>
      </div>

      <button
        type="button"
        onClick={handleGo}
        autoFocus
        className="intro-button opacity-100 motion-safe:opacity-0 relative mt-4 inline-flex h-14 items-center justify-center rounded-full bg-electric-indigo px-10 font-savee text-[16px] font-medium text-paper outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-paper/40 focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
      >
        {introContent.buttonLabel}
      </button>
    </div>
  );
}
