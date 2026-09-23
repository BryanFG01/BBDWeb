import { navLinks } from "@/domain/nav/navContent";
import { contactContent } from "@/domain/contact/contactContent";

export function Footer() {
  return (
    <footer className="border-t border-slate bg-obsidian py-20">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-2.5">
          <img src="/images/Nuevo-Logo.jpg" alt="BBD web" className="h-9 w-auto object-contain" />
          <span className="font-savee text-[16px] font-medium tracking-tight text-paper">BBD web</span>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-savee text-[16px] font-normal text-pearl transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${contactContent.email}`}
          className="font-savee text-[16px] font-normal text-paper transition-colors hover:text-pearl"
        >
          {contactContent.email}
        </a>
      </div>

      <p className="mt-12 text-center font-savee text-[13px] text-stone">
        © 2026 BBD web. Todos los derechos reservados.
      </p>
    </footer>
  );
}
