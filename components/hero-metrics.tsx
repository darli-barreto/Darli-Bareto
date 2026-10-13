import { CircleIcon } from "./circle-icon";
import { careerMetrics } from "./portfolio-data";

export function HeroMetrics() {
  return (
    <footer className="mt-auto flex flex-wrap items-center justify-between gap-x-2.5 gap-y-6 font-[family-name:var(--font-aspekta)] text-[10px] font-semibold md:gap-6 md:text-[11px] min-[1101px]:flex-nowrap min-[1101px]:text-xs">
      <p className="flex items-center gap-1 md:gap-[7px]">
        <span className="tracking-[1px] whitespace-nowrap text-[#ffb636]" aria-hidden="true">
          ✳ ✳ ✳ ✳ ✳
        </span>
        <span>
          &gt;90 <span className="hidden text-(--ink)/70 md:inline">[ LIGHTHOUSE ]</span>
        </span>
      </p>
      <ul
        aria-label="Logros profesionales"
        className="order-3 flex w-full justify-between gap-4 border-t border-(--ink)/20 pt-[19px] md:justify-center md:gap-[30px] md:border-0 md:pt-0 min-[1101px]:order-0 min-[1101px]:w-auto"
      >
        {careerMetrics.map(({ value, label }) => (
          <li key={label} className="text-lg whitespace-nowrap md:text-[11px] min-[1101px]:text-xs">
            {value}{" "}
            <span className="mt-[5px] block text-[7px] text-(--ink)/70 min-[375px]:text-[8px] md:m-0 md:inline md:text-[11px] min-[1101px]:text-xs">
              [ {label} ]
            </span>
          </li>
        ))}
      </ul>
      <a className="flex items-center gap-[9px] whitespace-nowrap hover:text-(--accent)" href="#proyectos">
        <CircleIcon>↓</CircleIcon> EXPLORAR TRABAJO
      </a>
    </footer>
  );
}
