import type { ReactNode } from "react";

export function CircleIcon({ children }: { children: ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex size-[15px] shrink-0 items-center justify-center rounded-full border border-(--ink)/45 font-[family-name:var(--font-inter)] text-xs font-normal"
    >
      {children}
    </span>
  );
}
