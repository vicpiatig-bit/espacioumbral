import { Instagram } from "lucide-react";
import { umbral } from "@/config/umbral";
import { Reveal } from "./Reveal";

export function Ubicacion() {
  return (
    <section id="ubicacion" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24 md:px-12 md:py-32">
        <div className="grid gap-16 sm:grid-cols-2 sm:gap-12">
          <Reveal className="text-center">
            <h2 className="text-[0.8rem] uppercase tracking-[0.28em] text-foreground/80">
              Dónde estamos
            </h2>
            <p className="mt-7 font-serif text-2xl leading-snug text-foreground md:text-3xl">
              {umbral.barrio}
              <br />
              {umbral.ciudad}
            </p>
            <p className="mt-4 text-[0.95rem] text-muted-foreground">
              {umbral.direccion}
            </p>
          </Reveal>

          <Reveal delay={140} className="text-center">
            <h2 className="text-[0.8rem] uppercase tracking-[0.28em] text-foreground/80">
              Horarios
            </h2>
            <dl className="mx-auto mt-7 max-w-xs space-y-4">
              {umbral.horarios.map((h) => (
                <div
                  key={h.dias}
                  className="flex items-baseline justify-between gap-6 border-b border-foreground/10 pb-3 text-[0.95rem]"
                >
                  <dt className="text-foreground/80">{h.dias}</dt>
                  <dd className="text-muted-foreground">{h.horas}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={280} className="mt-16 flex justify-center">
          <a
            href={umbral.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram de Umbral, ${umbral.instagramUsuario}`}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-foreground/25 text-foreground/80 transition-colors duration-500 hover:border-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            <Instagram size={20} strokeWidth={1.4} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}