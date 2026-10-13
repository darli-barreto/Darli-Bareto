import Image from "next/image";
import { projectImages } from "@/lib/project-images";
import { SectionLabel } from "./section-label";

const capabilities = [
  ["FRONTEND & EXPERIENCIA", "React · Next.js · TypeScript"],
  ["BACKEND & INTEGRACIONES", "Python · FastAPI · REST · GraphQL"],
  ["ARQUITECTURA", "SSR · SOLID · Clean Code"],
  ["SISTEMAS DE DISEÑO", "Tailwind CSS · Componentes reutilizables"],
  ["RENDIMIENTO", "Optimización · Debugging · Refactorización"],
  ["EXPERIENCIAS INTERACTIVAS", "Interfaces 3D · Aplicaciones SaaS"],
];

export function CapabilitiesSection() {
  return (
    <section aria-labelledby="capabilities-title" className="px-[5vw] py-20 md:px-[2.5vw] md:py-32">
      <div className="mb-14 grid gap-8 md:grid-cols-[1fr_3fr]">
        <SectionLabel number="03">Lo que hago</SectionLabel>
        <h2 id="capabilities-title" className="max-w-5xl font-[family-name:var(--font-aspekta)] text-[clamp(32px,4vw,64px)] leading-[1.05] font-medium tracking-[-0.045em] uppercase">
          De la primera <em className="font-[family-name:var(--font-inter)] font-normal text-(--ink)/55 lowercase">idea</em><br />a una experiencia completa.
        </h2>
      </div>
      <div className="grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
        <ul>
          {capabilities.map(([title, detail], index) => (
            <li key={title} className="border-b border-(--ink)/15 py-5">
              <div className="flex justify-between gap-4 text-xs"><span>{title}</span><span className="text-(--ink)/40">[ 0{index + 1} ]</span></div>
              <p className="mt-2 text-xs text-(--ink)/45">{detail}</p>
            </li>
          ))}
        </ul>
        <div className="relative aspect-[4/3] overflow-hidden bg-(--surface)">
          <Image src={projectImages.armStructural[0].src} alt={projectImages.armStructural[0].alt} fill sizes="(max-width: 767px) 100vw, 55vw" className="object-contain p-4" />
        </div>
      </div>
    </section>
  );
}
