import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ProjectAppLink } from "./project-app-link";
import { Reveal } from "../reveal";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const placement = index < 2 ? "xl:col-span-3" : "xl:col-span-2";
  const sizes = index < 2
    ? "(max-width: 767px) 90vw, 47vw"
    : "(max-width: 767px) 90vw, (min-width: 1280px) 31vw, 47vw";

  return (
    <Reveal className={`min-w-0 ${placement} ${index === 4 ? "md:col-span-2 xl:col-span-2" : ""}`} delay={(index % 2) * 0.08}>
    <article>
      <Link href={`/proyectos/${project.slug}`} className="group block" aria-label={`Ver proyecto ${project.title}`}>
        <div className="relative aspect-video overflow-hidden bg-(--surface)">
          <Image
            src={project.cover.src} alt={project.cover.alt} fill
            sizes={index === 4 ? "(max-width: 767px) 90vw, (min-width: 1280px) 31vw, 95vw" : sizes}
            className="object-contain transition-transform duration-700 motion-safe:group-hover:scale-[1.02]"
          />
        </div>
        <div className="flex items-center justify-between gap-4 border-b border-(--ink)/15 py-4">
          <div className="min-w-0">
            <h3 className="font-[family-name:var(--font-aspekta)] text-lg font-medium tracking-tight uppercase md:text-xl">{project.title}</h3>
            <p className="mt-1 text-[9px] tracking-wide text-(--ink)/50">{project.category}</p>
          </div>
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-(--ink)/25 text-lg transition-colors group-hover:border-[#ff6548] group-hover:bg-[#ff6548] group-hover:text-black group-focus-visible:bg-[#ff6548] group-focus-visible:text-black" aria-hidden="true">↗</span>
        </div>
      </Link>
      <div className="flex items-center justify-between pt-2">
        <Link href={`/proyectos/${project.slug}`} className="py-2 text-[10px] text-(--ink)/60 transition-colors hover:text-(--accent)">VER DETALLES</Link>
        <ProjectAppLink url={project.appUrl} title={project.title} />
      </div>
    </article>
    </Reveal>
  );
}
