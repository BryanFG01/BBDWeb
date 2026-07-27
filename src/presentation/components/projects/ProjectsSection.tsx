import { featuredProject, projectsContent } from "@/domain/projects/projectsContent";
import { GhostBadge } from "@/presentation/components/shared/GhostBadge";
import { FeaturedProjectCard } from "./FeaturedProjectCard";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="bg-gloss-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <GhostBadge>{projectsContent.eyebrow}</GhostBadge>
        <h2 className="font-classic mt-5 max-w-xl text-[32px] leading-[1.1] font-normal tracking-[-0.03em] text-gloss-black lg:text-[40px]">
          {projectsContent.heading}
        </h2>

        <div className="mt-12">
          <FeaturedProjectCard
            title={featuredProject.title}
            description={featuredProject.description}
            tags={featuredProject.tags}
          />
        </div>
      </div>
    </section>
  );
}
