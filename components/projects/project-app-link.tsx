export function ProjectAppLink({ url, title, prominent = false }: { url: string; title: string; prominent?: boolean }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${title} (nueva pestaña)`}
      className={prominent
        ? "inline-flex items-center gap-8 rounded-full bg-[#ff6548] px-6 py-4 text-xs font-medium text-black transition-colors hover:bg-[#ff947b]"
        : "inline-flex items-center gap-2 py-2 text-[10px] font-medium text-(--ink)/75 transition-colors hover:text-(--accent)"}>
      ABRIR APP <span aria-hidden="true">↗</span>
    </a>
  );
}
