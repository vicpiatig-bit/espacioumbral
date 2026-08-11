import manifiestoAsset from "@/assets/manifiesto.png.asset.json";
import { Reveal } from "./Reveal";

export function Pausa() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-6 py-28 md:grid-cols-12 md:gap-10 md:px-12 md:py-40">
        <div className="md:col-span-6 md:col-start-1">
          <Reveal>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] tracking-[-0.015em] text-foreground">
              Afuera, todo pide velocidad.
            </h2>
            <p className="mt-6 font-serif text-[clamp(1.6rem,4vw,2.8rem)] italic leading-[1.15] text-foreground/60">
              Acá, podés bajar el ritmo.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-10 max-w-sm text-[0.95rem] leading-[1.9] text-muted-foreground">
              Umbral es una pausa dentro de la ciudad. Un rato en el que no hay
              nada que resolver: solamente respirar, aflojar y volver a vos.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160} className="md:col-span-5 md:col-start-8">
          <div className="photo-soft">
            <img
              src={manifiestoAsset.url}
              alt="Mujer caminando con calma por una sala de luz cálida, con leve desenfoque de movimiento"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover object-center"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}