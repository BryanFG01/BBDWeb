import logoIcon from "@/assets/logo-icon.png";
import { navLinks } from "@/domain/nav/navContent";
import { contactContent } from "@/domain/contact/contactContent";

export function Footer() {
  return (
    <footer className="bg-gloss-black py-16">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-2.5">
          <img src={logoIcon} alt="BBD web" className="h-9 w-9 object-contain" />
          <span className="font-grotesk text-[16px] font-medium tracking-tight text-pure-white">BBD web</span>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-grotesk text-[16px] font-medium text-gloss-white/70 transition-colors hover:text-pure-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${contactContent.email}`}
          className="font-grotesk text-[16px] font-medium text-pure-white transition-colors hover:text-gloss-white/70"
        >
          {contactContent.email}
        </a>
      </div>

      <p className="mt-12 text-center font-grotesk text-[14px] text-mid-grey">
        © 2026 BBD web. Todos los derechos reservados.
      </p>
    </footer>
  );
}
