"use client";

import type { RefObject } from "react";
import Link from "next/link";
import { navigationLinks } from "./portfolio-data";

type NavigationMenuProps = {
  dialogRef: RefObject<HTMLDialogElement | null>;
  onClose: () => void;
  onDialogClose: () => void;
};

export function NavigationMenu({ dialogRef, onClose, onDialogClose }: NavigationMenuProps) {
  return (
    <dialog
      ref={dialogRef}
      id="menu"
      aria-labelledby="menu-title"
      onClose={onDialogClose}
      onClick={(event) => { if (event.target === dialogRef.current) onClose(); }}
      className="fixed inset-0 m-auto max-h-[calc(100svh-32px)] w-[min(650px,calc(100%-32px))] border border-(--ink)/20 bg-(--surface) p-0 text-(--ink) backdrop:bg-black/65 backdrop:backdrop-blur-md"
    >
      <div className="p-[22px] md:p-[30px]">
        <div className="flex items-center justify-between gap-5 text-[11px]">
          <span id="menu-title">DARLI BARRETO / EXPLORAR</span>
          <button type="button" onClick={onClose} aria-label="Cerrar menú" className="cursor-pointer py-2.5 hover:text-(--accent)">
            CERRAR ×
          </button>
        </div>
        <nav aria-label="Enlaces del portfolio" className="my-9 grid">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              download={link.download || undefined}
              onClick={onClose}
              className="flex items-center justify-between border-b border-(--ink)/15 py-3 font-[family-name:var(--font-aspekta)] text-[clamp(28px,5vw,48px)] font-medium tracking-[-0.04em] hover:text-(--accent)"
            >
              {link.label}<span className="text-lg text-(--accent)">{link.symbol}</span>
            </Link>
          ))}
        </nav>
        <p className="flex flex-col justify-between gap-2.5 text-[10px] text-(--ink)/65 md:flex-row md:gap-6">
          TRUJILLO, PERÚ <span>DISEÑO CON INTENCIÓN. CÓDIGO CON PROPÓSITO.</span>
        </p>
      </div>
    </dialog>
  );
}
