import { aboutContent } from "@/domain/about/aboutContent";
import { GhostBadge } from "@/presentation/components/shared/GhostBadge";

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-obsidian py-16 lg:py-20">
      <div data-reveal-group className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <GhostBadge>{aboutContent.eyebrow}</GhostBadge>
          <h2 className="font-savee mt-5 text-[30px] leading-[1.13] font-medium tracking-[-0.02em] text-paper sm:text-[36px]">
            {aboutContent.heading}
          </h2>
        </div>

        <div data-reveal-group className="flex flex-col gap-5 lg:pt-2">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph} className="font-savee text-[16px] leading-[1.5] font-normal text-pearl">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
