import { SectionLabel } from "./section-label";

const experience = [
  {
    company: "DEV PERU E.I.R.L.", role: "Analista de Software", date: "NOV 2024 — MAR 2025",
    details: "Diagnóstico y resolución de más de 50 bugs críticos y no críticos. Integración de APIs REST y GraphQL con servicios de pago y logística, reduciendo los tiempos de sincronización en un 40%.",
  },
  {
    company: "ABDAK S.A.C.", role: "Full Stack Developer", date: "ENE 2024 — NOV 2024",
    details: "Arquitectura frontend con Next.js y SSR. Creación de un sistema de diseño de más de 15 componentes reutilizables con Tailwind CSS, acelerando el desarrollo en un 30%.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experiencia" aria-labelledby="experience-title" className="scroll-mt-16 px-[5vw] py-24 md:px-[2.5vw] md:py-40">
      <div className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
        <div className="flex justify-center"><SectionLabel number="04">Experiencia</SectionLabel></div>
        <h2 id="experience-title" className="mt-8 font-[family-name:var(--font-aspekta)] text-[clamp(32px,4vw,64px)] leading-[1.05] font-medium tracking-[-0.045em] uppercase">
          Una visión de <em className="font-[family-name:var(--font-inter)] font-normal text-(--ink)/55 lowercase">conjunto.</em><br />Impacto en cada entrega.
        </h2>
      </div>
      {experience.map((job, index) => (
        <details key={job.company} className="group border-b border-(--ink)/15 first:border-t">
          <summary className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-4 py-7 marker:content-none focus-visible:outline-2 focus-visible:outline-(--accent) [&::-webkit-details-marker]:hidden">
            <span className="font-[family-name:var(--font-aspekta)] text-2xl tracking-tight md:text-4xl">{job.company}</span>
            <span className="flex items-center gap-6 text-[10px] text-(--ink)/50">{job.date}<span className="text-xl text-(--ink) group-open:rotate-45" aria-hidden="true">+</span></span>
          </summary>
          <div className="grid gap-5 pb-8 md:grid-cols-[1fr_1fr]">
            <p className="text-xs text-(--accent)">0{index + 1} / {job.role}</p>
            <p className="max-w-xl text-sm leading-relaxed text-(--ink)/60">{job.details}</p>
          </div>
        </details>
      ))}
      <div className="flex flex-wrap justify-between gap-3 border-b border-(--ink)/15 py-7 text-xs text-(--ink)/50">
        <span>FORMACIÓN COMPLEMENTARIA / FREECODECAMP</span><span>DESARROLLO WEB · 2020 — 2021</span>
      </div>
    </section>
  );
}
