import logoIcon from "@/assets/logo-icon.png";
import { navLinks } from "@/domain/nav/navContent";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 pt-6">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5">
          <img src={logoIcon} alt="BBD web" className="h-9 w-9 object-contain" />
          <span className="font-grotesk text-[16px] font-medium tracking-tight text-pure-white">BBD web</span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-2 py-1 font-grotesk text-[16px] font-medium text-pure-white transition-colors hover:text-gloss-white/70"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="inline-flex h-11 items-center justify-center rounded-full border-[1.5px] border-pure-white px-6 font-grotesk text-[16px] font-medium text-pure-white transition-colors hover:bg-pure-white/10"
        >
          Contáctanos
        </a>
      </div>
    </header>
  );
}
