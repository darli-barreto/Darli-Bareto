import { HeroIntro } from "./hero-intro";
import { HeroMetrics } from "./hero-metrics";
import { SiteNavigation } from "./site-navigation";
import { HeroBackground } from "./hero-background";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh flex-col px-[22px] pt-5 pb-[25px] md:px-[2.5vw] md:pt-[30px] md:pb-8"
    >
      <HeroBackground />
      <a
        href="#hero-title"
        className="absolute top-2.5 left-2.5 z-10 -translate-y-[180%] bg-(--canvas) p-2.5 focus:translate-y-0"
      >
        Saltar al contenido
      </a>
      <SiteNavigation />
      <div className="flex flex-1 items-center py-24 md:py-20">
        <HeroIntro />
      </div>
      <HeroMetrics />
    </section>
  );
}
