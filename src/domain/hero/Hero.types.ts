export type HeroCtaVariant = "yellow" | "ghost";

export interface HeroCta {
  label: string;
  href: string;
  variant: HeroCtaVariant;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctas: HeroCta[];
  videoSrc: string;
}
