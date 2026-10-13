import { contactEmail } from "../portfolio-data";

export function ContactSection() {
  return (
    <section id="contacto" aria-labelledby="contact-title" className="scroll-mt-10 px-[5vw] pt-20 pb-28 text-center md:px-[2.5vw] md:pt-32 md:pb-44">
      <p className="text-[10px] tracking-wider text-(--ink)/45">UNA IDEA, UN EQUIPO, UN NUEVO RETO.</p>
      <a href={contactEmail} className="group mt-20 inline-flex max-w-full flex-col items-center gap-9 md:mt-28">
        <h2 id="contact-title" className="font-[family-name:var(--font-aspekta)] text-[clamp(42px,9vw,144px)] leading-none font-medium tracking-[-0.065em]">HAGÁMOSLO REAL.</h2>
        <span className="flex size-14 items-center justify-center rounded-full bg-[#ff4b2b] text-2xl transition-transform motion-safe:group-hover:rotate-45" aria-hidden="true">↗</span>
        <span className="text-xs text-(--ink)/50 group-hover:text-(--ink)">darlhybarreto@gmail.com</span>
      </a>
    </section>
  );
}
