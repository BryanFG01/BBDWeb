import { contactContent } from "@/domain/contact/contactContent";
import { GhostBadge } from "@/presentation/components/shared/GhostBadge";

export function ContactSection() {
  return (
    <section id="contacto" className="bg-gloss-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <div className="mx-auto flex w-fit">
          <GhostBadge>{contactContent.eyebrow}</GhostBadge>
        </div>

        <h2 className="font-classic mx-auto mt-5 max-w-2xl text-[32px] leading-[1.1] font-normal tracking-[-0.03em] text-gloss-black lg:text-[40px]">
          {contactContent.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-md font-grotesk text-[16px] leading-[1.5] text-gloss-black/70">
          {contactContent.description}
        </p>

        <a
          href={`mailto:${contactContent.email}`}
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-gloss-black px-7 font-grotesk text-[16px] font-medium text-gloss-white transition-opacity hover:opacity-90"
        >
          {contactContent.ctaLabel}
        </a>
      </div>
    </section>
  );
}
