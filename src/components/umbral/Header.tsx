import { useEffect, useState } from "react";
import { CTA_LABEL, whatsappUrl } from "@/config/umbral";
import { cn } from "@/lib/utils";

const links = [
  { href: "#el-espacio", label: "El espacio" },
  { href: "#experiencias", label: "Experiencias" },
  { href: "#yoga", label: "Yoga" },
  { href: "#meditacion", label: "Meditación" },
  { href: "#masajes", label: "Masajes" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-700",
        scrolled && !open
          ? "bg-background/85 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12 md:py-7">
        <a
          href="#top"
          className="font-serif text-xl tracking-[0.18em] uppercase text-foreground"
        >
          Umbral
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.68rem] uppercase tracking-[0.2em] text-foreground/70 transition-colors duration-500 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center rounded-full border border-foreground bg-foreground px-6 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-background shadow-[0_8px_22px_-14px_color-mix(in_oklab,var(--foreground)_60%,transparent)] transition-colors duration-500 hover:bg-foreground/90 md:inline-flex"
          >
            {CTA_LABEL}
          </a>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
          >
            <span
              className={cn(
                "block h-px w-6 bg-foreground transition-transform duration-500",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-foreground transition-transform duration-500",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 top-0 -z-10 flex flex-col justify-center bg-background px-8 transition-opacity duration-700 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-serif text-3xl text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="mt-14 inline-flex min-h-13 w-fit items-center rounded-full bg-foreground px-8 py-4 text-[0.68rem] uppercase tracking-[0.2em] text-background"
        >
          {CTA_LABEL}
        </a>
      </div>
    </header>
  );
}