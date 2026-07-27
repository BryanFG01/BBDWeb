import type { ReactNode } from "react";

export function GhostBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center rounded-lg border-[1.5px] border-gloss-black px-3 py-1.5 font-grotesk text-[14px] font-medium tracking-[0.063em] text-gloss-black uppercase">
      {children}
    </span>
  );
}
