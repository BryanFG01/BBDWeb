import { useRef } from "react";
import { heroContent } from "@/domain/hero/heroContent";
import { useHeroAnimations } from "@/application/hooks/useHeroAnimations";
import { usePrefersReducedMotion } from "@/application/hooks/usePrefersReducedMotion";
import { useInViewport } from "@/application/hooks/useInViewport";
import { useVideoAutoplay } from "@/application/hooks/useVideoAutoplay";

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref: viewportRef, isInView } = useInViewport<HTMLElement>(0.15);
  const prefersReducedMotion = usePrefersReducedMotion();

  useHeroAnimations(rootRef, prefersReducedMotion);
  useVideoAutoplay(videoRef, isInView, prefersReducedMotion);

  return (
    <section
      ref={(node) => {
        rootRef.current = node;
        viewportRef.current = node;
      }}
      className="relative flex min-h-screen flex-col overflow-hidden bg-gloss-black"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={heroContent.videoSrc} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(23,21,14,0.55) 0%, rgba(23,21,14,0.2) 35%, rgba(23,21,14,0.8) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-end px-6 pb-20 pt-32">
        <span className="hero-fade-up opacity-100 motion-safe:opacity-0 inline-flex w-fit items-center rounded-lg border-[1.5px] border-pure-white/70 px-3 py-1.5 font-grotesk text-[14px] font-medium text-pure-white">
          {heroContent.eyebrow}
        </span>

        <h1 className="font-classic mt-6 max-w-3xl text-[40px] leading-[0.95] font-normal tracking-[-0.03em] text-pure-white sm:text-[56px] lg:text-[72px]">
          {heroContent.headline.split(" ").map((word, index) => (
            <span
              key={`${word}-${index}`}
              className="hero-word opacity-100 motion-safe:opacity-0 mr-[0.25em] inline-block last:mr-0"
            >
              {word}
            </span>
          ))}
        </h1>

        <p className="hero-fade-up opacity-100 motion-safe:opacity-0 mt-6 max-w-xl font-grotesk text-[16px] leading-[1.5] text-pure-white/80">
          {heroContent.subheadline}
        </p>

        <div className="hero-fade-up opacity-100 motion-safe:opacity-0 mt-10 flex flex-col gap-3 sm:flex-row">
          {heroContent.ctas.map((cta) => (
            <a
              key={cta.href}
              href={cta.href}
              className={
                cta.variant === "yellow"
                  ? "inline-flex h-12 items-center justify-center rounded-full bg-solar-yellow px-6 font-grotesk text-[16px] font-medium text-gloss-black transition-opacity hover:opacity-90"
                  : "inline-flex h-12 items-center justify-center rounded-full border-[1.5px] border-pure-white px-6 font-grotesk text-[16px] font-medium text-pure-white transition-colors hover:bg-pure-white/10"
              }
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
