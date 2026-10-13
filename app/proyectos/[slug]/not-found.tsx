import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-7 bg-(--canvas) px-6 text-center">
      <p className="text-xs text-(--accent)">404 / PROYECTO NO ENCONTRADO</p>
      <h1 className="font-[family-name:var(--font-aspekta)] text-5xl tracking-tight">Volvamos al trabajo.</h1>
      <Link href="/#proyectos" className="border-b border-(--ink)/40 py-3 text-sm">Explorar los proyectos ↗</Link>
    </main>
  );
}
