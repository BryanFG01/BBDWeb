import { useState } from "react";
import { methodologyContent } from "@/domain/methodology/methodologyContent";
import { GhostBadge } from "@/presentation/components/shared/GhostBadge";
import { MethodologyModal } from "./MethodologyModal";

export function MethodologySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="metodologia" className="bg-obsidian py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <GhostBadge>{methodologyContent.eyebrow}</GhostBadge>
        <h2 className="font-savee mt-5 max-w-xl text-[30px] leading-[1.13] font-medium tracking-[-0.02em] text-paper sm:text-[36px]">
          {methodologyContent.heading}
        </h2>
        <p className="mt-4 max-w-xl font-savee text-[16px] leading-[1.5] font-normal text-pearl">
          {methodologyContent.description}
        </p>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-electric-indigo px-7 font-savee text-[16px] font-medium text-paper transition-opacity hover:opacity-90"
        >
          {methodologyContent.ctaLabel}
        </button>
      </div>

      <MethodologyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
