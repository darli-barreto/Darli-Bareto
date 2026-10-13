import { contactEmail } from "../portfolio-data";
import { SectionLabel } from "./section-label";

const questions = [
  ["¿En qué tipo de proyectos trabajas?", "Aplicaciones web, productos SaaS, plataformas de contenido e interfaces interactivas. Mi experiencia abarca tanto el frontend como el backend y las integraciones."],
  ["¿Cuál es tu stack principal?", "React, Next.js y TypeScript para el frontend; Python y FastAPI para el backend. También trabajo con Tailwind CSS, APIs REST y GraphQL."],
  ["¿Qué puedes aportar a un equipo?", "Arquitectura basada en componentes, sistemas de diseño, debugging y optimización. Busco soluciones que faciliten tanto el uso del producto como su mantenimiento."],
  ["¿Dónde puedo ver más sobre tu experiencia?", "Puedes descargar mi CV desde el menú o consultar mi perfil de LinkedIn. En esta página encontrarás una selección de proyectos y aportes profesionales."],
  ["¿Cómo puedo explorar un proyecto?", "Haz clic en su imagen para abrir la ficha. Allí encontrarás el contexto, mis aportes y una galería de imágenes que puedes ampliar y recorrer con las flechas."],
  ["¿Cómo podemos conversar sobre una oportunidad?", "Escríbeme a darlhybarreto@gmail.com con una breve descripción del equipo, la oportunidad o el proyecto que tienes en mente."],
];

export function FaqSection() {
  return (
    <section aria-labelledby="faq-title" className="px-[5vw] py-28 md:px-[2.5vw] md:py-44">
      <div className="flex justify-center"><SectionLabel number="06">Antes de conversar</SectionLabel></div>
      <h2 id="faq-title" className="mt-7 mb-14 text-center font-[family-name:var(--font-aspekta)] text-4xl font-medium tracking-[-0.05em] md:text-6xl">¿PREGUNTAS? RESPUESTAS.</h2>
      <div className="grid gap-x-12 md:grid-cols-2">
        {questions.map(([question, answer]) => (
          <details key={question} className="group border-b border-(--ink)/15">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-xs uppercase marker:content-none focus-visible:outline-2 focus-visible:outline-(--accent) [&::-webkit-details-marker]:hidden">
              {question}<span className="text-xl text-(--ink)/50 group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="max-w-lg pb-7 text-sm leading-relaxed text-(--ink)/55">{answer}</p>
          </details>
        ))}
      </div>
      <p className="mt-12 text-center text-xs text-(--ink)/40">¿Algo más en mente? <a href={contactEmail} className="text-(--ink) underline underline-offset-4 hover:text-(--accent)">Conversemos.</a></p>
    </section>
  );
}
