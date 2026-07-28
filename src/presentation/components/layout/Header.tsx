import logoIcon from "@/assets/logo-icon.png";
import { navLinks } from "@/domain/nav/navContent";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 pt-6">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5">
          <img src={logoIcon} alt="BBD web" className="h-9 w-9 object-contain" />
          <span className="font-savee text-[16px] font-medium tracking-tight text-paper">BBD web</span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-2 py-1 font-savee text-[14px] font-normal text-pearl transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="inline-flex items-center justify-center rounded-full border border-paper px-5 py-2.5 font-savee text-[14px] font-medium text-paper transition-colors hover:bg-paper/10"
        >
          Contáctanos
        </a>
      </div>
    </header>
  );
}
