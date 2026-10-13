import type { ReactNode } from "react";

export function SectionLabel({ children, number }: { children: ReactNode; number: string }) {
  return (
    <p className="flex items-center gap-5 text-[10px] font-medium tracking-wide uppercase text-(--ink)/70">
      {children}<span className="text-(--ink)/35">[ {number} ]</span>
    </p>
  );
}
