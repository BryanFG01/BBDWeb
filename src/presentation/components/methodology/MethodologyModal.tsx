import { methodologyContent } from "@/domain/methodology/methodologyContent";
import { GhostBadge } from "@/presentation/components/shared/GhostBadge";
import { Modal } from "@/presentation/components/shared/Modal";

interface MethodologyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MethodologyModal({ isOpen, onClose }: MethodologyModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      labelledBy="metodologia-modal-title"
      header={<GhostBadge>{methodologyContent.modal.subtitle}</GhostBadge>}
    >
      <h3
        id="metodologia-modal-title"
        className="font-savee text-[24px] leading-[1.29] font-medium text-paper sm:text-[28px]"
      >
        {methodologyContent.modal.title}
      </h3>
      <p className="mt-3 max-w-xl font-savee text-[16px] leading-[1.5] font-normal text-pearl">
        {methodologyContent.modal.intro}
      </p>

      <ol className="mt-8 flex flex-col gap-4">
        {methodologyContent.phases.map((phase) => (
          <li
            key={phase.number}
            className="flex gap-4 rounded-xl border border-paper/5 bg-paper/[0.03] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.25)] sm:p-6"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-electric-indigo/15 font-savee text-[14px] font-medium text-electric-indigo">
              {phase.number}
            </span>
            <div className="min-w-0">
              <p className="font-savee text-[18px] leading-[1.38] font-medium text-paper">{phase.title}</p>
              <ul className="mt-3 flex flex-col gap-2">
                {phase.items.map((item) => (
                  <li key={item} className="flex gap-2.5 font-savee text-[14px] leading-[1.5] font-normal text-pearl">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-electric-indigo/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 border-t border-slate pt-6">
        <p className="font-savee text-[13px] font-normal tracking-[0.015em] text-stone">Esquema de pagos</p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          {methodologyContent.payment.map((step) => (
            <div
              key={step.milestone}
              className="flex-1 rounded-xl border border-paper/5 bg-paper/[0.03] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="font-savee text-[16px] font-medium text-paper">{step.milestone}</p>
                <span className="rounded-full bg-electric-indigo/15 px-3 py-1 font-savee text-[13px] font-medium text-electric-indigo">
                  {step.percentage}
                </span>
              </div>
              <p className="mt-2 font-savee text-[14px] leading-[1.5] font-normal text-pearl">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
