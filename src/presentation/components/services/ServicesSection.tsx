import { servicesContent } from "@/domain/services/servicesContent";
import { GhostBadge } from "@/presentation/components/shared/GhostBadge";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-pure-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <GhostBadge>{servicesContent.eyebrow}</GhostBadge>
        <h2 className="font-classic mt-5 max-w-xl text-[32px] leading-[1.1] font-normal tracking-[-0.03em] text-gloss-black lg:text-[40px]">
          {servicesContent.heading}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {servicesContent.items.map((item) => (
            <ServiceCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
