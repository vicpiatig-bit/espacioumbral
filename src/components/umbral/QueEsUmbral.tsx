import guiarAsset from "@/assets/guiar.png.asset.json";
import { Reveal } from "./Reveal";

export function QueEsUmbral() {
  return (
    <section id="experiencias" className="bg-background">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-28 md:grid-cols-12 md:gap-16 md:px-12 md:py-40">
        <Reveal className="md:col-span-6 md:col-start-1">
          <img
            src={guiarAsset.url}
            alt="Secuencia superpuesta de una mujer practicando yoga en un estudio con luz natural"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover object-center"
          />
        </Reveal>

        <div className="flex flex-col justify-center md:col-span-5 md:col-start-8">
          <Reveal delay={140}>
            <p className="text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
              Umbral
            </p>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05] tracking-[-0.015em] text-foreground">
              Un espacio para volver a vos.
            </h2>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-8 space-y-6 text-[0.95rem] leading-[1.9] text-muted-foreground">
              <p>
                Entendemos el bienestar como algo integral: el cuerpo y la mente
                no son dos cosas separadas, sino partes de una misma experiencia.
                Por eso el yoga, la meditación y los masajes conviven acá bajo el
                mismo techo.
              </p>
              <p>
                Hay días en que el cuerpo necesita moverse. Otros en que la mente
                pide silencio. Y otros en que lo único posible es soltar. Cada
                práctica es una puerta distinta al mismo lugar.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}