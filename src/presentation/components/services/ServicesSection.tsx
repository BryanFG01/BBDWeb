import { servicesContent } from "@/domain/services/servicesContent";
import { GhostBadge } from "@/presentation/components/shared/GhostBadge";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-obsidian py-16 lg:py-20">
      <div data-reveal-group className="mx-auto max-w-[1200px] px-6">
        <GhostBadge>{servicesContent.eyebrow}</GhostBadge>
        <h2 className="font-savee mt-5 max-w-xl text-[30px] leading-[1.13] font-medium tracking-[-0.02em] text-paper sm:text-[36px]">
          {servicesContent.heading}
        </h2>

        <div data-reveal-group className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {servicesContent.items.map((item) => (
            <ServiceCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
