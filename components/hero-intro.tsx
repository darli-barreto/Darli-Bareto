"use client";

import { motion } from "framer-motion";
import { useMotionPreference } from "./preferences";

export function HeroIntro() {
  const { enabled } = useMotionPreference();
  const reducedMotion = !enabled;
  const reveal = (delay: number) => ({
    initial: { y: reducedMotion ? 0 : "110%" },
    animate: { y: 0 },
    transition: {
      duration: reducedMotion ? 0 : 1.1,
      delay: reducedMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <div className="relative w-full md:pb-8">
      <h1
        id="hero-title"
        tabIndex={-1}
        className="font-[family-name:var(--font-aspekta)] text-[clamp(36px,10.7vw,82px)] leading-[1.08] font-semibold tracking-[-0.055em] md:text-[clamp(64px,8.05vw,180px)] md:leading-[1.17]"
      >
        <span className="block overflow-hidden pb-[0.06em]">
          <motion.span className="block" {...reveal(0.12)}>
            SOFTWARE{" "}
            <em className="mb-[22px] ml-[11%] block font-[family-name:var(--font-inter)] text-[1.23em] font-normal tracking-[-0.065em] text-(--ink)/65 md:m-0 md:inline md:text-[1em]">
              architect
            </em>
          </motion.span>
        </span>
        <span className="mt-1.5 block overflow-hidden pb-[0.06em] text-right text-[0.75em] whitespace-nowrap md:mt-2.5 md:text-[0.93em]">
          <motion.span className="block" {...reveal(0.27)}>
            FULL-STACK DEV
          </motion.span>
        </span>
      </h1>
      <p className="mt-7 ml-[12%] w-[85%] max-w-[410px] text-sm leading-[1.65] tracking-[-0.035em] text-(--ink)/90 md:absolute md:top-[62%] md:left-[4%] md:m-0 md:w-[29%] md:text-[16px] md:leading-[1.6] min-[1101px]:top-[61%] min-[1101px]:left-[8.7%] min-[1101px]:w-[27%] min-[1101px]:text-[clamp(13px,1vw,18px)]">
        Soy Darli, Analista de Software y Full Stack Developer. Especializado en
        React, Next.js y Python. Construyo experiencias SaaS, interfaces 3D y
        aplicaciones que combinan diseño y rendimiento.
      </p>
    </div>
  );
}
