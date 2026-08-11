import { umbral } from "@/config/umbral";
import { Reveal } from "./Reveal";
import { WhatsappCta } from "./WhatsappCta";

export function Ubicacion() {
  return (
    <section id="ubicacion" className="scroll-mt-24 bg-background">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-24 md:grid-cols-12 md:gap-10 md:px-12 md:py-32">
        <Reveal className="md:col-span-4">
          <h2 className="text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
            Dónde estamos
          </h2>
          <p className="mt-6 font-serif text-2xl leading-snug text-foreground md:text-3xl">
            {umbral.barrio}
            <br />
            {umbral.ciudad}
          </p>
          <p className="mt-4 text-[0.95rem] text-muted-foreground">
            {umbral.direccion}
          </p>
        </Reveal>

        <Reveal delay={140} className="md:col-span-4 md:col-start-6">
          <h2 className="text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
            Horarios
          </h2>
          <dl className="mt-6 space-y-4">
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

        <Reveal delay={280} className="md:col-span-3 md:col-start-10">
          <h2 className="text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
            WhatsApp
          </h2>
          <p className="mt-6 font-serif text-2xl text-foreground">
            {umbral.whatsappVisible}
          </p>
          <WhatsappCta variant="outline" className="mt-8" />
        </Reveal>
      </div>
    </section>
  );
}