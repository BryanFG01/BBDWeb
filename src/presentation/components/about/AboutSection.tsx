import { aboutContent } from "@/domain/about/aboutContent";
import { GhostBadge } from "@/presentation/components/shared/GhostBadge";

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-pure-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <GhostBadge>{aboutContent.eyebrow}</GhostBadge>
          <h2 className="font-classic mt-5 text-[32px] leading-[1.1] font-normal tracking-[-0.03em] text-gloss-black lg:text-[40px]">
            {aboutContent.heading}
          </h2>
        </div>

        <div className="flex flex-col gap-5 lg:pt-2">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph} className="font-grotesk text-[16px] leading-[1.5] text-gloss-black/70">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
