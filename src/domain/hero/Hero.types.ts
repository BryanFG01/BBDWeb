export type HeroCtaVariant = "yellow" | "ghost";

export interface HeroCta {
  label: string;
  href: string;
  variant: HeroCtaVariant;
}

export type HeroFloatingCardKind = "invoice" | "erp" | "web" | "automation" | "code" | "support";

export interface HeroFloatingCardPlacement {
  /** Center of the card, as a percentage of the hero width. */
  x: number;
  /** Center of the card, as a percentage of the hero height. */
  y: number;
  /** translateZ in px — negative pushes the card further back. */
  depth: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  /** Card width in px on desktop; mobile scales it down. */
  width: number;
}

export interface HeroFloatingCard {
  kind: HeroFloatingCardKind;
  label: string;
  placement: HeroFloatingCardPlacement;
  glow: "accent" | "neutral";
  hideOnMobile?: boolean;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctas: HeroCta[];
}
