"use client";

import { useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";

function subscribe(callback: () => void) {
  window.addEventListener("portfolio-preferences", callback);
  return () => window.removeEventListener("portfolio-preferences", callback);
}

function savePreference(key: "theme" | "motion", value: string) {
  document.documentElement.dataset[key] = value;
  try { localStorage.setItem(`portfolio-${key}`, value); } catch {}
  window.dispatchEvent(new Event("portfolio-preferences"));
}

export function useMotionPreference() {
  const paused = useSyncExternalStore(subscribe,
    () => document.documentElement.dataset.motion === "paused", () => false);
  const reduced = useReducedMotion();
  return { enabled: !paused && !reduced, paused, reduced };
}

export function Preferences() {
  const light = useSyncExternalStore(subscribe,
    () => document.documentElement.dataset.theme === "light", () => false);
  const { paused, reduced } = useMotionPreference();
  const themeLabel = `Cambiar a modo ${light ? "oscuro" : "claro"}`;
  const motionLabel = reduced ? "Movimiento reducido por el sistema" : `${paused ? "Activar" : "Pausar"} animaciones`;
  const buttonClass = "flex size-9 cursor-pointer items-center justify-center rounded-full border border-current/25 transition-colors hover:bg-current/10 disabled:cursor-default disabled:opacity-40";

  return (
    <div className="flex items-center gap-2">
      <button type="button" onClick={() => savePreference("theme", light ? "dark" : "light")}
        aria-label={themeLabel} title={themeLabel} className={buttonClass}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4" aria-hidden="true">
          {light ? <path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z" /> : <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>}
        </svg>
      </button>
      <button type="button" onClick={() => savePreference("motion", paused ? "running" : "paused")}
        disabled={!!reduced} aria-label={motionLabel} title={motionLabel} aria-pressed={paused || !!reduced} className={buttonClass}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4" aria-hidden="true">
          {paused || reduced ? <path d="m9 5 10 7-10 7Z" /> : <path d="M8 5v14M16 5v14" />}
        </svg>
      </button>
    </div>
  );
}
