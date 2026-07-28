import { useRef } from "react";
import { heroContent } from "@/domain/hero/heroContent";
import { useHeroAnimations } from "@/application/hooks/useHeroAnimations";
import { usePrefersReducedMotion } from "@/application/hooks/usePrefersReducedMotion";

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useHeroAnimations(rootRef, prefersReducedMotion);

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-obsidian pt-32 pb-16 lg:pb-20">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-electric-indigo/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <span className="hero-fade-up opacity-100 motion-safe:opacity-0 inline-flex w-fit items-center rounded-full border border-pearl/30 px-3 py-1.5 font-savee text-[13px] font-normal text-pearl">
          {heroContent.eyebrow}
        </span>

        <h1 className="font-savee mx-auto mt-6 max-w-2xl text-[44px] leading-[0.96] font-medium tracking-[-0.02em] text-paper sm:text-[64px] lg:text-[80px] lg:tracking-[-0.04em]">
          {heroContent.headline.split(" ").map((word, index) => (
            <span
              key={`${word}-${index}`}
              className="hero-word opacity-100 motion-safe:opacity-0 mr-[0.25em] inline-block last:mr-0"
            >
              {word}
            </span>
          ))}
        </h1>

        <p className="hero-fade-up opacity-100 motion-safe:opacity-0 mx-auto mt-6 max-w-xl font-savee text-[16px] leading-[1.5] font-normal text-pearl sm:text-[18px]">
          {heroContent.subheadline}
        </p>

        <div className="hero-fade-up opacity-100 motion-safe:opacity-0 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {heroContent.ctas.map((cta) => (
            <a
              key={cta.href}
              href={cta.href}
              className={
                cta.variant === "yellow"
                  ? "inline-flex h-12 items-center justify-center rounded-full bg-electric-indigo px-6 font-savee text-[16px] font-medium text-paper transition-opacity hover:opacity-90"
                  : "inline-flex h-12 items-center justify-center rounded-full border border-paper px-6 font-savee text-[16px] font-medium text-paper transition-colors hover:bg-paper/10"
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
