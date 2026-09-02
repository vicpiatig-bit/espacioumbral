import { createFileRoute } from "@tanstack/react-router";

import { umbral } from "@/config/umbral";
import { Header } from "@/components/umbral/Header";
import { Hero } from "@/components/umbral/Hero";
import { Pausa } from "@/components/umbral/Pausa";
import { QueEsUmbral } from "@/components/umbral/QueEsUmbral";
import { Experiencia } from "@/components/umbral/Experiencia";
import { ElEspacio } from "@/components/umbral/ElEspacio";
import { QueNecesitas } from "@/components/umbral/QueNecesitas";
import { Filosofia } from "@/components/umbral/Filosofia";
import { Ubicacion } from "@/components/umbral/Ubicacion";
import { Contacto } from "@/components/umbral/Contacto";
import { CtaFinal } from "@/components/umbral/CtaFinal";
import { Footer } from "@/components/umbral/Footer";
import yogaAsset from "@/assets/yoga.png.asset.json";
import meditacionAsset from "@/assets/meditacion.png.asset.json";
import masajeAsset from "@/assets/masaje.png.asset.json";

const TITLE = "Umbral — Yoga, Meditación y Masajes en Palermo Hollywood";
const DESCRIPTION =
  "Umbral es un espacio de bienestar integral en Palermo Hollywood. Yoga, meditación y masajes para volver al cuerpo, aquietar la mente y bajar el ritmo.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: "Umbral",
          description: DESCRIPTION,
          address: {
            "@type": "PostalAddress",
            streetAddress: umbral.direccion,
            addressLocality: umbral.barrio,
            addressRegion: umbral.ciudad,
            addressCountry: "AR",
          },
          telephone: umbral.whatsappVisible,
          openingHours: ["Mo-Fr 08:00-21:00", "Sa 09:00-14:00"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <Pausa />
        <QueEsUmbral />

        <Experiencia
          id="yoga"
          numero="01"
          titulo="Yoga"
          concepto="Volver al cuerpo."
          texto="Prácticas para moverte con presencia, respirar más profundo y recuperar conexión con tu cuerpo."
          imagen={yogaAsset.url}
          alt="Mujer en transición hacia la postura de la cobra en un estudio minimalista de luz cálida"
          fondo="cream"
        />
        <Experiencia
          id="meditacion"
          numero="02"
          titulo="Meditación"
          concepto="Encontrar silencio."
          texto="Espacios para desacelerar, observar y cultivar una presencia más tranquila."
          imagen={meditacionAsset.url}
          alt="Mujer sentada en postura de meditación con los ojos cerrados en una sala serena"
          invertida
        />
        <Experiencia
          id="masajes"
          numero="03"
          titulo="Masajes"
          concepto="Soltar el cuerpo."
          texto="Una pausa profunda para liberar tensión, descansar y volver a sentirte liviano."
          imagen={masajeAsset.url}
          alt="Manos realizando un masaje en la espalda, con luz cálida y tonos naturales"
          fondo="cream"
        />

        <ElEspacio />
        <QueNecesitas />
        <Filosofia />
        <Ubicacion />
        <Contacto />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
