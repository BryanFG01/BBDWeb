import type { CSSProperties } from "react";
import { heroFloatingCards } from "@/domain/hero/heroCards";
import type { HeroFloatingCard, HeroFloatingCardKind } from "@/domain/hero/Hero.types";

/**
 * Decorative 3D layer behind the hero headline. The static tilt of each card lives
 * in its wrapper's inline transform; the adapter animates `.hero-card` (entrance + float)
 * and `.hero-cards-stage` (pointer parallax), so the two never fight over `transform`.
 */
export function HeroFloatingCards() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 [perspective:1400px]">
      <div className="hero-cards-stage absolute inset-0 transform-3d">
        {heroFloatingCards.map((card) => (
          <FloatingCard key={card.kind} card={card} />
        ))}
      </div>
    </div>
  );
}

function FloatingCard({ card }: { card: HeroFloatingCard }) {
  const { x, y, depth, rotateX, rotateY, rotateZ, width } = card.placement;
  const style: CSSProperties = {
    left: `${x}%`,
    top: `${y}%`,
    width,
    transform: `translate(-50%, -50%) scale(var(--card-scale)) translateZ(${depth}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
    // Cards further back read dimmer, which sells the depth without a blur filter.
    opacity: depth < -150 ? 0.55 : depth < 0 ? 0.8 : 1,
  };

  const edge =
    card.glow === "accent"
      ? "border-electric-indigo/60 shadow-[0_0_32px_-6px_rgb(45_163_137/0.55)]"
      : "border-paper/15 shadow-[0_0_28px_-10px_rgb(253_253_253/0.25)]";

  return (
    <div
      className={`absolute transform-3d [--card-scale:0.55] sm:[--card-scale:0.75] lg:[--card-scale:1] ${card.hideOnMobile ? "hidden md:block" : ""}`}
      style={style}
    >
      <div
        className={`hero-card opacity-100 motion-safe:opacity-0 relative overflow-hidden rounded-xl border bg-charcoal/70 p-3.5 backdrop-blur-md ${edge}`}
      >
        {/* Specular highlight along the top edge, like the glass in the reference. */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/40 to-transparent" />
        <p className="mb-2.5 font-savee text-[11px] tracking-[0.015em] text-ash">{card.label}</p>
        <CardBody kind={card.kind} />
      </div>
    </div>
  );
}

function CardBody({ kind }: { kind: HeroFloatingCardKind }) {
  switch (kind) {
    case "invoice":
      return (
        <div className="space-y-2 font-savee">
          <div className="flex items-center justify-between text-[10px] text-stone">
            <span>FE-00421</span>
            <span className="rounded-full bg-electric-indigo/15 px-2 py-0.5 text-electric-indigo">Validada</span>
          </div>
          {[70, 52, 60].map((w) => (
            <div key={w} className="flex items-center justify-between gap-3">
              <div className="h-1.5 rounded-full bg-paper/15" style={{ width: `${w}%` }} />
              <div className="h-1.5 w-8 rounded-full bg-paper/25" />
            </div>
          ))}
          <div className="flex items-end justify-between border-t border-slate pt-2">
            <span className="text-[10px] text-stone">Total</span>
            <span className="text-[15px] font-medium text-paper">$ 1.284.000</span>
          </div>
        </div>
      );
    case "erp":
      return (
        <div className="font-savee">
          <div className="flex h-16 items-end gap-1.5">
            {[40, 65, 50, 85, 60, 95, 72].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-sm ${i === 5 ? "bg-electric-indigo" : "bg-paper/20"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-stone">
            <span>Stock</span>
            <span className="text-electric-indigo">+18%</span>
          </div>
        </div>
      );
    case "web":
      return (
        <div>
          <div className="mb-2 flex gap-1">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-paper/25" />
            ))}
          </div>
          <div className="space-y-1.5 rounded-md bg-obsidian/60 p-2.5">
            <div className="h-2 w-3/4 rounded-full bg-paper/40" />
            <div className="h-1.5 w-1/2 rounded-full bg-paper/15" />
            <div className="mt-2 h-3 w-14 rounded-full bg-electric-indigo/80" />
          </div>
        </div>
      );
    case "automation":
      return (
        <div className="flex items-center justify-between font-savee text-[10px] text-pearl">
          {["Pedido", "Factura", "Email"].map((step, i) => (
            <div key={step} className="flex items-center">
              {i > 0 && <span className="mx-1.5 h-px w-4 bg-electric-indigo/70" />}
              <span className="rounded-full border border-paper/20 px-2 py-1">{step}</span>
            </div>
          ))}
        </div>
      );
    case "code":
      return (
        <pre className="font-mono text-[10px] leading-[1.6] text-ash">
          <span className="text-electric-indigo">const</span> venta = <span className="text-paper">await</span>
          {"\n"}  erp.<span className="text-paper">facturar</span>(pedido);
          {"\n"}
          <span className="text-stone">// ✓ enviado al cliente</span>
        </pre>
      );
    case "support":
      return (
        <div className="font-savee">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-electric-indigo shadow-[0_0_8px_rgb(45_163_137)]" />
            <span className="text-[13px] font-medium text-paper">99.9% uptime</span>
          </div>
          <p className="mt-1.5 text-[10px] text-stone">Monitoreo 24/7</p>
        </div>
      );
  }
}
