import { SectionLabel } from "./section-label";

const results = [
  ["50+", "BUGS RESUELTOS", "Debugging sistemático y análisis de logs en desarrollo y producción."],
  ["40%", "MENOS TIEMPO DE SINCRONIZACIÓN", "Integración de servicios externos, APIs y pasarelas de pago en DEV PERU."],
  ["30%", "MÁS VELOCIDAD DE DESARROLLO", "Un sistema de diseño con más de 15 componentes reutilizables en ABDAK."],
];

export function ImpactSection() {
  return (
    <section aria-labelledby="impact-title" className="overflow-hidden px-[5vw] py-20 md:px-[2.5vw] md:py-32">
      <SectionLabel number="05">Resultados de mi trabajo</SectionLabel>
      <div className="relative mx-auto my-12 flex aspect-square w-full max-w-[650px] items-center justify-center">
        <div aria-hidden="true" className="absolute inset-0 rounded-full border border-(--ink)/10" />
        <div aria-hidden="true" className="absolute inset-[14%] rounded-full border border-(--ink)/10" />
        <span aria-hidden="true" className="absolute top-[14%] left-[13%] flex size-11 items-center justify-center rounded-full bg-[#6c45ff] text-sm">↗</span>
        <span aria-hidden="true" className="absolute top-[28%] right-[2%] flex size-10 items-center justify-center rounded-full bg-[#ff4b2b] text-sm">✳</span>
        <span aria-hidden="true" className="absolute bottom-[15%] left-[19%] size-3 rounded-full bg-[#00a896]" />
        <h2 id="impact-title" className="relative max-w-[85%] text-center font-[family-name:var(--font-aspekta)] text-[clamp(28px,4vw,58px)] leading-[1.05] font-medium tracking-[-0.045em] uppercase">
          El código importa.<br />Lo que <em className="font-[family-name:var(--font-inter)] font-normal text-(--ink)/55 lowercase">hace posible,</em><br />todavía más.
        </h2>
      </div>
      <div className="grid gap-10 md:grid-cols-3 md:gap-16">
        {results.map(([value, label, description]) => (
          <div key={label} className="border-t border-(--ink)/20 pt-7">
            <p className="font-[family-name:var(--font-aspekta)] text-6xl tracking-[-0.06em]">{value}<span className="ml-3 text-xl text-(--accent)" aria-hidden="true">↗</span></p>
            <h3 className="mt-5 text-[10px] tracking-wide">{label}</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-(--ink)/50">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
