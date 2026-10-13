import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { SiteNavigation } from "../site-navigation";
import { SiteFooter } from "../site-footer";
import { ContactSection } from "../sections/contact-section";
import { SectionLabel } from "../sections/section-label";
import { ProjectGallery } from "./project-gallery";
import { ProjectAppLink } from "./project-app-link";
import { Reveal } from "../reveal";

export function ProjectDetail({ project, next }: { project: Project; next: Project }) {
  return (
    <main className="bg-(--canvas)">
      <div className="px-[5vw] pt-6 md:px-[2.5vw] md:pt-[30px]"><SiteNavigation /></div>
      <header className="px-[5vw] pt-20 pb-12 md:px-[2.5vw] md:pt-28 md:pb-20">
        <Link href="/#proyectos" className="text-[10px] tracking-wide text-(--ink)/50 hover:text-(--ink)">← TODOS LOS PROYECTOS</Link>
        <div className="mt-14 flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="mb-5 text-[10px] tracking-wide text-(--accent)">{project.category}</p>
            <h1 className="font-[family-name:var(--font-aspekta)] text-[clamp(48px,10vw,160px)] leading-none font-medium tracking-[-0.06em]">{project.title}</h1>
          </div>
          <p className="max-w-sm text-lg leading-relaxed text-(--ink)/55">{project.summary}</p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
          <p className="text-[10px] tracking-wide text-(--ink)/40">{project.period}</p>
          <ProjectAppLink url={project.appUrl} title={project.title} prominent />
        </div>
      </header>
      <div className="relative mx-[5vw] aspect-[16/10] overflow-hidden bg-(--surface) md:mx-[2.5vw]">
        <Image src={project.cover.src} alt={project.cover.alt} fill sizes="100vw" preload className="object-contain p-4 md:p-10" />
      </div>
      <section aria-labelledby="project-story" className="grid gap-10 px-[5vw] py-20 md:grid-cols-[1fr_2fr] md:px-[2.5vw] md:py-32">
        <SectionLabel number="01">El proyecto</SectionLabel>
        <div className="max-w-3xl">
          <h2 id="project-story" className="font-[family-name:var(--font-aspekta)] text-4xl tracking-tight md:text-6xl">DEL RETO A LA <em className="font-[family-name:var(--font-inter)] font-normal text-(--ink)/55 lowercase">solución.</em></h2>
          <div className="mt-10 grid gap-9 md:grid-cols-2">
            <div><h3 className="mb-4 text-xs text-(--accent)">EL RETO</h3><p className="text-sm leading-relaxed text-(--ink)/60">{project.challenge}</p></div>
            <div><h3 className="mb-4 text-xs text-(--accent)">MI APORTE</h3><p className="text-sm leading-relaxed text-(--ink)/60">{project.approach}</p></div>
          </div>
          <ul className="mt-12 border-t border-(--ink)/15">
            {project.contributions.map((item, index) => <li key={item} className="flex gap-6 border-b border-(--ink)/15 py-5 text-sm text-(--ink)/65"><span className="text-(--ink)/30">0{index + 1}</span>{item}</li>)}
          </ul>
        </div>
      </section>
      <Reveal><ProjectGallery images={project.gallery} title={project.title} /></Reveal>
      <nav aria-label="Siguiente proyecto" className="px-[5vw] py-20 md:px-[2.5vw]">
        <Link href={`/proyectos/${next.slug}`} className="group flex items-center justify-between gap-5 border-y border-(--ink)/20 py-12">
          <div><p className="mb-5 text-[10px] text-(--ink)/45">SIGUIENTE PROYECTO</p><p className="font-[family-name:var(--font-aspekta)] text-[clamp(32px,6vw,88px)] tracking-tight group-hover:text-(--accent)">{next.title}</p></div>
          <span className="text-4xl group-hover:text-(--accent)" aria-hidden="true">↗</span>
        </Link>
      </nav>
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
