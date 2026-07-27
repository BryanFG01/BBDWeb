import { capabilities, projectsContent } from "@/domain/projects/projectsContent";
import { GhostBadge } from "@/presentation/components/shared/GhostBadge";
import { ProjectsMascot } from "./ProjectsMascot";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="relative overflow-hidden bg-gloss-white py-20 lg:py-28">
      <ProjectsMascot />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <GhostBadge>{projectsContent.eyebrow}</GhostBadge>
        <h2 className="font-classic mt-5 max-w-xl text-[32px] leading-[1.1] font-normal tracking-[-0.03em] text-gloss-black lg:text-[40px]">
          {projectsContent.heading}
        </h2>
        <p className="mt-4 max-w-xl font-grotesk text-[16px] leading-[1.5] text-gloss-black/70">
          {projectsContent.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {capabilities.map((capability) => (
            <span
              key={capability}
              className="rounded-lg bg-pure-white px-4 py-2 font-grotesk text-[16px] font-medium text-gloss-black"
            >
              {capability}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
