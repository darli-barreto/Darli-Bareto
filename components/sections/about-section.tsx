import { cvPath } from "../portfolio-data";
import { SectionLabel } from "./section-label";

export function AboutSection() {
  return (
    <section id="perfil" aria-labelledby="about-title" className="scroll-mt-16 px-[5vw] py-24 md:px-[2.5vw] md:py-44">
      <div className="max-w-2xl md:ml-auto md:w-[43%]">
        <SectionLabel number="02">Detrás del código</SectionLabel>
        <h2 id="about-title" className="mt-8 font-[family-name:var(--font-aspekta)] text-[clamp(36px,4.6vw,76px)] leading-[1.02] font-medium tracking-[-0.05em] uppercase">
          Pensar en el sistema.<br />Cuidar cada <em className="font-[family-name:var(--font-inter)] font-normal text-(--ink)/55 lowercase">detalle.</em>
        </h2>
        <p className="mt-7 max-w-md text-sm leading-relaxed text-(--ink)/60 md:ml-auto">
          Soy Darli Barreto, Analista de Software y Full Stack Developer en Trujillo, Perú.
          Mi trabajo conecta arquitectura, interfaces y lógica de negocio para construir aplicaciones web escalables.
        </p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-(--ink)/60 md:ml-auto">
          Trabajo con React, Next.js, TypeScript y Python. Me interesan los productos útiles,
          las experiencias 3D y el código que sigue siendo claro cuando el proyecto crece.
        </p>
        <a href={cvPath} download className="mt-8 inline-flex items-center gap-10 border-b border-(--ink)/30 pb-3 text-xs hover:text-(--accent)">CONOCE MI TRAYECTORIA <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
