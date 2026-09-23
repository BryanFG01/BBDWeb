import { capabilities, projectsContent } from "@/domain/projects/projectsContent";
import { GhostBadge } from "@/presentation/components/shared/GhostBadge";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="bg-obsidian py-16 lg:py-20">
      <div data-reveal-group className="mx-auto max-w-[1200px] px-6">
        <GhostBadge>{projectsContent.eyebrow}</GhostBadge>
        <h2 className="font-savee mt-5 max-w-xl text-[30px] leading-[1.13] font-medium tracking-[-0.02em] text-paper sm:text-[36px]">
          {projectsContent.heading}
        </h2>
        <p className="mt-4 max-w-xl font-savee text-[16px] leading-[1.5] font-normal text-pearl">
          {projectsContent.description}
        </p>

        <div data-reveal-group className="mt-8 flex flex-wrap gap-3">
          {capabilities.map((capability) => (
            <span
              key={capability}
              className="rounded-full bg-charcoal px-4 py-2 font-savee text-[14px] font-medium text-paper"
            >
              {capability}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
