import { Reveal } from "./Reveal";
import { WhatsappCta } from "./WhatsappCta";

export function CtaFinal() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-32 text-center md:px-12 md:py-48">
        <Reveal>
          <h2 className="font-serif text-[clamp(2.4rem,7vw,5rem)] leading-[1.02] tracking-[-0.02em] text-foreground">
            Hacé espacio para vos.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-10 max-w-xs text-[0.95rem] leading-[2] text-muted-foreground">
            Un momento para moverte.
            <br />
            Un momento para respirar.
            <br />
            Un momento para soltar.
            <br />
            Te esperamos en Umbral.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <WhatsappCta className="mt-12" />
        </Reveal>
      </div>
    </section>
  );
}