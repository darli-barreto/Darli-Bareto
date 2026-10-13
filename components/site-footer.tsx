import Link from "next/link";
import { contactEmail, cvPath } from "./portfolio-data";

export function SiteFooter() {
  return (
    <footer className="flex flex-col items-center justify-between gap-7 px-[5vw] py-8 text-[9px] tracking-wide text-(--ink)/50 md:flex-row md:px-[2.5vw]">
      <nav aria-label="Redes y currículum" className="flex gap-6">
        <a href="https://github.com/darli-barreto" target="_blank" rel="noopener noreferrer" className="hover:text-(--ink)">GITHUB ↗</a>
        <a href="https://www.linkedin.com/in/darli-barreto" target="_blank" rel="noopener noreferrer" className="hover:text-(--ink)">LINKEDIN ↗</a>
        <a href={cvPath} download className="hover:text-(--ink)">CV ↓</a>
      </nav>
      <p>DARLI BARRETO · DISEÑADO CON INTENCIÓN</p>
      <div className="flex gap-6"><a href={contactEmail} className="hover:text-(--ink)">CONTACTO</a><Link href="/#inicio" className="hover:text-(--ink)">VOLVER ARRIBA ↑</Link></div>
    </footer>
  );
}
