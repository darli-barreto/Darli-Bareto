import { projects } from "@/lib/projects";
import { ProjectCard } from "../projects/project-card";
import { SectionLabel } from "./section-label";

export function SelectedWork() {
  return (
    <section id="proyectos" aria-labelledby="work-title" className="scroll-mt-10 px-[5vw] pt-24 pb-16 md:px-[2.5vw] md:pt-40 md:pb-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5 md:mb-12">
        <SectionLabel number="01">Una selección de mi trabajo</SectionLabel>
        <h2 id="work-title" className="font-[family-name:var(--font-aspekta)] text-3xl font-medium tracking-tight md:text-5xl">IDEAS HECHAS <em className="font-[family-name:var(--font-inter)] font-normal text-(--ink)/55">software.</em></h2>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 md:gap-y-12 xl:grid-cols-6">
        {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
      </div>
    </section>
  );
}
