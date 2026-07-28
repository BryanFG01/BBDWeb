import { contactContent } from "@/domain/contact/contactContent";
import { GhostBadge } from "@/presentation/components/shared/GhostBadge";

export function ContactSection() {
  return (
    <section id="contacto" className="bg-obsidian py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <div className="mx-auto flex w-fit">
          <GhostBadge>{contactContent.eyebrow}</GhostBadge>
        </div>

        <h2 className="font-savee mx-auto mt-5 max-w-2xl text-[30px] leading-[1.13] font-medium tracking-[-0.02em] text-paper sm:text-[36px]">
          {contactContent.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-md font-savee text-[16px] leading-[1.5] font-normal text-pearl">
          {contactContent.description}
        </p>

        <a
          href={`mailto:${contactContent.email}`}
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-electric-indigo px-7 font-savee text-[16px] font-medium text-paper transition-opacity hover:opacity-90"
        >
          {contactContent.ctaLabel}
        </a>
      </div>
    </section>
  );
}
