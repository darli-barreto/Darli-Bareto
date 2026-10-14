"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { CircleIcon } from "./circle-icon";
import { NavigationMenu } from "./navigation-menu";
import { contactEmail } from "./portfolio-data";
import { Preferences } from "./preferences";

export function SiteNavigation() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  function openMenu() {
    dialog.current?.showModal();
    setMenuOpen(true);
  }

  function closeMenu() {
    dialog.current?.close();
    setMenuOpen(false);
  }

  return (
    <>
      <header className="flex items-center justify-between font-[family-name:var(--font-aspekta)] text-[11px] font-semibold md:text-sm">
        <Link
          href="/#inicio"
          aria-label="Darli Barreto, inicio"
          className="inline-flex items-center gap-[7px] tracking-[-0.4px] hover:text-(--accent)"
        >
          <span className="text-[22px] font-medium md:text-[25px]" aria-hidden="true">✳</span>
          DARLI BARRETO
          <sup className="-ml-1.5 self-start pt-[9px] text-[8px]">™</sup>
        </Link>
        <nav aria-label="Navegación principal" className="flex items-center gap-3 md:gap-8">
          <Preferences />
          <a className="hidden items-center gap-[9px] hover:text-(--accent) md:flex" href={contactEmail}>
            <CircleIcon>+</CircleIcon> HABLEMOS
          </a>
          <button
            type="button"
            onClick={openMenu}
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            aria-controls="menu"
            className="cursor-pointer py-2.5 hover:text-(--accent)"
          >
            <span className="mr-[7px] text-[13px] text-(--ink)/65" aria-hidden="true">☰</span>
            MENÚ
          </button>
        </nav>
      </header>
      <NavigationMenu dialogRef={dialog} onClose={closeMenu} onDialogClose={() => setMenuOpen(false)} />
    </>
  );
}
