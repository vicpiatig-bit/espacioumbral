import heroAsset from "@/assets/hero.png.asset.json";
import { umbral } from "@/config/umbral";
import { Reveal } from "./Reveal";

export function ElEspacio() {
  return (
    <section id="el-espacio" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-[1440px] px-6 pt-28 md:px-12 md:pt-40">
        <Reveal>
          <h2 className="max-w-[18ch] font-serif text-[clamp(2rem,5vw,3.8rem)] leading-[1.05] tracking-[-0.015em] text-foreground">
            Un refugio diseñado para el silencio.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={140} className="mt-14 md:mt-20">
        <img
          src={heroAsset.url}
          alt="Vista amplia del estudio Umbral: piso de madera, pared cálida y luz natural filtrada"
          loading="lazy"
          className="photo-fade-y h-[52vh] w-full object-cover object-[55%_70%] md:h-[76vh] md:object-[center_65%]"
        />
      </Reveal>

      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 md:grid-cols-12 md:px-12 md:py-24">
        <Reveal delay={120} className="md:col-span-5 md:col-start-7">
          <p className="text-[0.95rem] leading-[1.9] text-muted-foreground">
            En el corazón de {umbral.barrio} creamos un espacio donde la ciudad
            queda afuera por un momento. Luz natural, materiales cálidos y una
            atmósfera pensada para que puedas llegar, respirar y simplemente
            estar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}