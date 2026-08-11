import { Instagram } from "lucide-react";
import { umbral, whatsappUrl } from "@/config/umbral";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-12 md:py-16">
        <div>
          <p className="font-serif text-lg uppercase tracking-[0.18em] text-foreground">
            Umbral
          </p>
          <p className="mt-4 max-w-xs text-[0.85rem] leading-relaxed text-muted-foreground">
            {umbral.direccionCompleta}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {[
            { href: "#el-espacio", label: "El espacio" },
            { href: "#yoga", label: "Yoga" },
            { href: "#meditacion", label: "Meditación" },
            { href: "#masajes", label: "Masajes" },
            { href: "#ubicacion", label: "Ubicación" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-500 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="md:text-right">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.85rem] text-foreground underline decoration-foreground/25 underline-offset-[6px] transition-colors duration-500 hover:decoration-foreground/70"
          >
            {umbral.whatsappVisible}
          </a>
          <a
            href={umbral.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram de Umbral, ${umbral.instagramUsuario}`}
            className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/25 text-foreground/80 transition-colors duration-500 hover:border-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            <Instagram size={18} strokeWidth={1.4} aria-hidden="true" />
          </a>
          <p className="mt-4 text-[0.72rem] text-muted-foreground">
            © {new Date().getFullYear()} Umbral
          </p>
        </div>
      </div>
    </footer>
  );
}