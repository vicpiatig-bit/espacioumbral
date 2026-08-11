import { Reveal } from "./Reveal";

export function Filosofia() {
  return (
    <section className="bg-sand/45">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-44">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
              Nuestra filosofía
            </p>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-10 font-serif text-[clamp(1.6rem,3.6vw,2.7rem)] leading-[1.35] tracking-[-0.01em] text-foreground">
              Creemos que el bienestar no es una meta que se alcanza, sino un
              momento del día que se elige.
            </p>
          </Reveal>

          <Reveal delay={340}>
            <p className="mx-auto mt-10 max-w-md text-[0.95rem] leading-[1.9] text-muted-foreground">
              No proponemos transformarte. Proponemos hacer lugar. Que puedas
              llegar como estás, dejar el ruido del otro lado de la puerta y
              darte un rato honesto con vos.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}