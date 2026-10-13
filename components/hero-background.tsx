"use client";

import { useEffect, useRef } from "react";
import { startHeroWave } from "@/lib/hero-wave";
import { useMotionPreference } from "./preferences";

export function HeroBackground() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const { enabled } = useMotionPreference();
  useEffect(() => {
    if (enabled && canvas.current) return startHeroWave(canvas.current);
  }, [enabled]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#090a0f] bg-[url('/hero-bg.webp')] bg-cover bg-center">
      <canvas ref={canvas} className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-1000 data-[ready=true]:opacity-100 motion-reduce:transition-none" />
      <div className="absolute inset-0 bg-[#f3f0e8] opacity-0 transition-opacity duration-500 in-data-[theme=light]:opacity-80 motion-reduce:transition-none" />
    </div>
  );
}
