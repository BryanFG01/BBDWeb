import type { ReactNode } from "react";
import { X } from "lucide-react";
import { useBodyScrollLock } from "@/application/hooks/useBodyScrollLock";
import { useEscapeKey } from "@/application/hooks/useEscapeKey";
import { useMountTransition } from "@/application/hooks/useMountTransition";
import { usePrefersReducedMotion } from "@/application/hooks/usePrefersReducedMotion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  labelledBy: string;
  header?: ReactNode;
  children: ReactNode;
}

const TRANSITION_MS = 200;

export function Modal({ isOpen, onClose, labelledBy, header, children }: ModalProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { isMounted, isVisible } = useMountTransition(isOpen, TRANSITION_MS, prefersReducedMotion);

  useEscapeKey(onClose, isMounted);
  useBodyScrollLock(isMounted);

  if (!isMounted) return null;

  return (
    <div role="dialog" aria-modal="true" aria-labelledby={labelledBy} className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        aria-label="Cerrar"
        onClick={onClose}
        className={`absolute inset-0 bg-obsidian/80 backdrop-blur-sm transition-opacity duration-200 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`relative z-10 flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-charcoal shadow-[0_24px_60px_rgba(0,0,0,0.55)] transition-all duration-200 ease-out ${
          isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-[0.98] opacity-0"
        }`}
        style={{ maxHeight: "85vh" }}
      >
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-paper/10 bg-charcoal/90 px-5 py-4 backdrop-blur-md sm:px-8">
          <div className="min-w-0">{header}</div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-pearl/30 text-pearl transition-colors hover:border-pearl/60 hover:text-paper"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="modal-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-6 sm:px-8 sm:py-8">
          {children}
        </div>
      </div>
    </div>
  );
}
