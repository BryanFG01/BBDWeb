import { useEffect, useState, type ReactNode } from "react";
import { X } from "lucide-react";
import { usePrefersReducedMotion } from "@/application/hooks/usePrefersReducedMotion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  labelledBy: string;
  children: ReactNode;
}

const TRANSITION_MS = 200;

export function Modal({ isOpen, onClose, labelledBy, children }: ModalProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isMounted, setIsMounted] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      const frame = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    setIsVisible(false);
    if (prefersReducedMotion) {
      setIsMounted(false);
      return;
    }
    const timeout = setTimeout(() => setIsMounted(false), TRANSITION_MS);
    return () => clearTimeout(timeout);
  }, [isOpen, prefersReducedMotion]);

  useEffect(() => {
    if (!isMounted) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isMounted, onClose]);

  if (!isMounted) return null;

  return (
    <div role="dialog" aria-modal="true" aria-labelledby={labelledBy} className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10">
      <button
        type="button"
        aria-label="Cerrar"
        onClick={onClose}
        className={`absolute inset-0 bg-obsidian/80 backdrop-blur-sm transition-opacity duration-200 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto overscroll-contain scroll-smooth rounded-xl bg-charcoal p-6 transition-all duration-200 ease-out sm:p-8 ${
          isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-[0.98] opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-pearl/30 text-pearl transition-colors hover:text-paper"
        >
          <X className="h-4 w-4" />
        </button>

        {children}
      </div>
    </div>
  );
}
