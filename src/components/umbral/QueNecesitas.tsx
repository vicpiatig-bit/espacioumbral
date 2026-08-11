import { Reveal } from "./Reveal";
import { WhatsappCta } from "./WhatsappCta";

const caminos = [
  { accion: "Moverte", practica: "Yoga", href: "#yoga" },
  { accion: "Pausar", practica: "Meditación", href: "#meditacion" },
  { accion: "Soltar", practica: "Masajes", href: "#masajes" },
];

export function QueNecesitas() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-28 text-center md:px-12 md:py-40">
        <Reveal>
          <h2 className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground">
            ¿Qué necesitás hoy?
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col items-center gap-4 md:mt-16 md:gap-5">
          {caminos.map((camino, i) => (
            <Reveal key={camino.href} delay={160 + i * 140}>
              <a
                href={camino.href}
                className="group inline-flex flex-wrap items-baseline justify-center gap-x-4 font-serif text-[clamp(1.9rem,6vw,3.6rem)] leading-[1.1] text-foreground/85 transition-colors duration-500 hover:text-foreground"
              >
                <span>{camino.accion}</span>
                <span className="text-foreground/35 transition-colors duration-500 group-hover:text-foreground/60">
                  →
                </span>
                <span className="italic">{camino.practica}</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={620}>
          <p className="mx-auto mt-14 max-w-sm text-[0.95rem] leading-[1.9] text-muted-foreground">
            No hay una única forma de empezar. Elegí lo que tu cuerpo y tu mente
            necesitan hoy.
          </p>
          <WhatsappCta variant="outline" className="mt-10" />
        </Reveal>
      </div>
    </section>
  );
}