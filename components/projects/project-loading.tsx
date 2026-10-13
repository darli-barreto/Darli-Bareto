import Link from "next/link";

export function ProjectLoading() {
  return (
    <main className="min-h-svh bg-(--canvas) px-[5vw] py-12 md:px-[2.5vw]" aria-busy="true" aria-label="Cargando proyecto">
      <Link href="/#proyectos" className="text-xs text-(--ink)/60">← TODOS LOS PROYECTOS</Link>
      <div className="mt-24 space-y-8 motion-safe:animate-pulse" aria-hidden="true">
        <div className="h-4 w-44 bg-(--ink)/10" />
        <div className="h-20 w-2/3 bg-(--ink)/10" />
        <div className="aspect-video w-full bg-(--ink)/5" />
      </div>
      <p role="status" className="mt-6 text-xs text-(--ink)/50">Cargando proyecto…</p>
    </main>
  );
}
