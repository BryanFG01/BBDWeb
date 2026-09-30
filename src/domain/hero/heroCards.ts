import type { HeroFloatingCard } from "./Hero.types";

/**
 * Glimpses of what BBDWeb builds, floating in 3D behind the hero headline.
 * Positions are percentages of the hero; depth is translateZ in px (negative = further away).
 */
export const heroFloatingCards: HeroFloatingCard[] = [
  {
    kind: "invoice",
    label: "Factura electrónica",
    placement: { x: 11, y: 30, depth: 40, rotateX: 12, rotateY: 28, rotateZ: -8, width: 210 },
    glow: "accent",
  },
  {
    kind: "code",
    label: "api/ventas.ts",
    placement: { x: 16, y: 80, depth: -120, rotateX: -18, rotateY: 22, rotateZ: 6, width: 220 },
    glow: "neutral",
    hideOnMobile: true,
  },
  {
    kind: "erp",
    label: "Inventario",
    placement: { x: 89, y: 26, depth: 20, rotateX: 14, rotateY: -30, rotateZ: 9, width: 200 },
    glow: "neutral",
  },
  {
    kind: "automation",
    label: "Automatización",
    placement: { x: 85, y: 80, depth: -60, rotateX: -16, rotateY: -24, rotateZ: -7, width: 220 },
    glow: "accent",
    hideOnMobile: true,
  },
  {
    kind: "web",
    label: "tunegocio.com",
    placement: { x: 25, y: 17, depth: -260, rotateX: 28, rotateY: 14, rotateZ: -14, width: 190 },
    glow: "neutral",
    hideOnMobile: true,
  },
  {
    kind: "support",
    label: "Soporte",
    placement: { x: 73, y: 97, depth: -220, rotateX: -30, rotateY: -10, rotateZ: 12, width: 180 },
    glow: "accent",
    hideOnMobile: true,
  },
];
