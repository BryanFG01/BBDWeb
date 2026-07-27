import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import { introContent } from "@/domain/intro/introContent";
import { usePrefersReducedMotion } from "@/application/hooks/usePrefersReducedMotion";

interface IntroSplashProps {
  onDismiss: () => void;
}

export function IntroSplash({ onDismiss }: IntroSplashProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);
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

    if (glowRef.current) {
      animate(glowRef.current, {
        opacity: [0.35, 0.7],
        scale: [0.9, 1.15],
        duration: 1400,
        delay: 900,
        loop: true,
        alternate: true,
        ease: "inOutSine",
      });
    }
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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 overflow-hidden bg-gloss-white px-6 text-center"
    >
      <div className="pointer-events-none absolute h-[26rem] w-[26rem] rounded-full bg-solar-yellow/15 blur-3xl" />

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
        <h1 className="font-classic text-[32px] leading-[1.1] font-normal tracking-[-0.03em] text-gloss-black sm:text-[40px]">
          {introContent.heading}
        </h1>
        <p className="mt-2 font-grotesk text-[16px] text-gloss-black/70">{introContent.subheading}</p>
      </div>

      <button
        type="button"
        onClick={handleGo}
        autoFocus
        className="intro-button opacity-100 motion-safe:opacity-0 relative mt-4 inline-flex h-14 items-center justify-center rounded-full bg-solar-yellow px-10 font-grotesk text-[18px] font-medium text-gloss-black outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-gloss-black/40 focus-visible:ring-offset-2"
      >
        <span
          ref={glowRef}
          className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-solar-yellow opacity-40 blur-lg motion-reduce:hidden"
          aria-hidden="true"
        />
        {introContent.buttonLabel}
      </button>
    </div>
  );
}
