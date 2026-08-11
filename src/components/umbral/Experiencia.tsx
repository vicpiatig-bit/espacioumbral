import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export type ExperienciaProps = {
  id: string;
  numero: string;
  titulo: string;
  concepto: string;
  texto: string;
  imagen: string;
  alt: string;
  invertida?: boolean;
  fondo?: "background" | "cream";
};

export function Experiencia({
  id,
  numero,
  titulo,
  concepto,
  texto,
  imagen,
  alt,
  invertida = false,
  fondo = "background",
}: ExperienciaProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24", fondo === "cream" ? "bg-cream" : "bg-background")}
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-24 md:grid-cols-12 md:gap-16 md:px-12 md:py-32">
        <Reveal
          className={cn(
            "md:col-span-6",
            invertida ? "md:col-start-7 md:order-2" : "md:col-start-1",
          )}
        >
          <div className="photo-soft">
            <img
              src={imagen}
              alt={alt}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-center md:aspect-[3/4]"
            />
          </div>
        </Reveal>

        <div
          className={cn(
            "md:col-span-4",
            invertida ? "md:col-start-2 md:order-1" : "md:col-start-8",
          )}
        >
          <Reveal delay={160}>
            <p className="text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
              {numero} — Experiencia
            </p>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.05] tracking-[-0.015em] text-foreground">
              {titulo}
            </h2>
            <p className="mt-3 font-serif text-[clamp(1.15rem,2.4vw,1.6rem)] italic text-foreground/55">
              {concepto}
            </p>
            <p className="mt-8 max-w-sm text-[0.95rem] leading-[1.9] text-muted-foreground">
              {texto}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}