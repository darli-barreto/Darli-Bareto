"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { ProjectImage } from "@/lib/projects";

export function ProjectGallery({ images, title }: { images: ProjectImage[]; title: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const imageArea = useRef<HTMLDivElement>(null);
  const current = images[active];

  function showImage(index: number) {
    setActive(index);
    setZoomed(false);
    dialog.current?.showModal();
  }

  function navigate(direction: number) {
    setActive((index) => (index + direction + images.length) % images.length);
    imageArea.current?.scrollTo(0, 0);
  }

  if (!current) return null;

  return (
    <section aria-labelledby="gallery-title" className="px-[5vw] py-16 md:px-[2.5vw] md:py-28">
      <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
        <h2 id="gallery-title" className="font-[family-name:var(--font-aspekta)] text-3xl tracking-tight">UNA MIRADA MÁS CERCA.</h2>
        <span className="text-[10px] text-(--ink)/45">GALERÍA / {images.length} IMÁGENES</span>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {images.map((image, index) => (
          <figure key={`${image.src}-${index}`} className={index === 0 ? "md:col-span-2" : ""}>
            <button
              type="button" onClick={() => showImage(index)}
              aria-label={`Ampliar imagen ${index + 1} de ${title}`}
              className={`group relative block w-full cursor-zoom-in overflow-hidden bg-(--surface) ${index === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}`}
            >
              <Image src={image.src} alt={image.alt} fill sizes={index === 0 ? "100vw" : "(max-width: 767px) 100vw, 50vw"} className="bg-[#ececea] object-contain p-3 transition-transform duration-500 motion-safe:group-hover:scale-[1.03]" />
              <span className="absolute right-5 bottom-5 flex size-10 items-center justify-center rounded-full bg-white text-xl text-black" aria-hidden="true">+</span>
            </button>
            <figcaption className="mt-3 text-[10px] text-(--ink)/50">{image.caption}</figcaption>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialog} aria-label={`Galería de ${title}`}
        onClick={(event) => { if (event.target === dialog.current) dialog.current?.close(); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") { event.preventDefault(); navigate(1); }
          if (event.key === "ArrowLeft") { event.preventDefault(); navigate(-1); }
        }}
        className="fixed inset-0 m-auto max-h-[95svh] w-[min(1200px,95vw)] max-w-none border border-(--ink)/20 bg-(--canvas) p-4 text-(--ink) backdrop:bg-black/90 md:p-6"
      >
        <div className="flex items-center justify-between gap-4 pb-4 text-xs">
          <p aria-live="polite">{title} / {active + 1} DE {images.length}</p>
          <button type="button" onClick={() => dialog.current?.close()} className="cursor-pointer p-2 hover:text-(--accent)" aria-label="Cerrar galería">CERRAR ×</button>
        </div>
        <button type="button" aria-pressed={zoomed} onClick={() => setZoomed(!zoomed)} className="mb-3 cursor-pointer text-xs text-(--ink)/65 hover:text-(--ink)">
          {zoomed ? "↙ Ajustar imagen" : "↗ Ampliar para leer"}
        </button>
        <div ref={imageArea} className="relative h-[60svh] overflow-auto bg-[#ececea] overscroll-contain">
          {zoomed ? (
            <Image src={current.src} alt={current.alt} width={current.width} height={current.height} sizes="(max-width: 767px) 1100px, 95vw" className="h-auto w-full min-w-[1100px] max-w-none" />
          ) : (
            <Image src={current.src} alt={current.alt} fill sizes="95vw" className="object-contain" />
          )}
        </div>
        <div className="mt-4 flex items-center justify-between gap-4">
          <button type="button" aria-label="Imagen anterior" onClick={() => navigate(-1)} className="size-11 shrink-0 cursor-pointer border border-(--ink)/30 hover:bg-(--ink)/10">←</button>
          <p className="text-center text-[10px] text-(--ink)/55">{current.caption}</p>
          <button type="button" aria-label="Imagen siguiente" onClick={() => navigate(1)} className="size-11 shrink-0 cursor-pointer border border-(--ink)/30 hover:bg-(--ink)/10">→</button>
        </div>
      </dialog>
    </section>
  );
}
