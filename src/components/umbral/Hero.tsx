import heroAsset from "@/assets/hero.png.asset.json";
import { CTA_LABELS } from "@/config/umbral";
import { Reveal } from "./Reveal";
import { WhatsappCta } from "./WhatsappCta";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[92svh] w-full overflow-hidden">
      <img
        src={heroAsset.url}
        alt="Sala vacía de Umbral con luz natural entrando por cortinas blancas sobre una pared beige"
        className="photo-fade-bottom absolute inset-0 h-full w-full object-cover object-[62%_center] md:object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/18 via-55% to-background/75" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-background/72 via-background/28 via-45% to-transparent md:block" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="relative mx-auto flex min-h-[92svh] max-w-[1440px] flex-col justify-end px-6 pb-20 pt-32 md:justify-center md:px-12 md:pb-28">
        <div className="max-w-[46rem]">
          <Reveal delay={120}>
            <h1 className="font-serif text-[clamp(2.6rem,8.5vw,6.2rem)] leading-[0.95] tracking-[-0.02em] text-foreground">
              Cruzá el umbral
              <br />
              hacia tu centro.
            </h1>
          </Reveal>

          <Reveal delay={340}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-foreground/75 md:text-lg">
              Un espacio para volver al cuerpo, aquietar la mente y dejarte
              llevar.
            </p>
          </Reveal>

          <Reveal delay={560}>
            <WhatsappCta className="mt-12" label={CTA_LABELS.hero} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}