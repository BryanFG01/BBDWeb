import type { ReactNode } from "react";

export function GhostBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center rounded-full border border-pearl/30 px-3 py-1.5 font-savee text-[13px] font-normal tracking-[0.015em] text-pearl">
      {children}
    </span>
  );
}
