# Ajustes de CTA, horarios y tratamiento fotográfico

## 1. CTAs con más presencia y contraste

Hoy hay tres variantes de botón (`solid`, `outline`, `quiet`) y las versiones `outline` se pierden sobre fondos crema.

- Redefinir la variante `outline` como un botón realmente visible: borde marrón cálido más denso, fondo arena suave y texto negro cálido, con hover que invierte a fondo oscuro y texto claro.
- Reforzar la variante `solid`: mayor peso tipográfico, un punto más de altura y una sombra muy suave y cálida (no dura) para que se despegue del fondo.
- Unificar tamaño táctil cómodo en mobile (mín. 48px de alto) y estado focus visible.
- El CTA del header pasa de borde tenue a botón sólido compacto, para que sea el ancla constante de conversión.

Todos siguen abriendo el mismo WhatsApp con el mismo mensaje predefinido.

## 2. Variar el texto de los CTAs

Un único destino, distintos textos según el momento narrativo:

- Header: "Hablar por WhatsApp"
- Hero: "Empezá hoy"
- ¿Qué necesitás hoy?: "Reservá tu lugar"
- Ubicación: "Reservar práctica"
- CTA final: "Hablar por WhatsApp"
- Footer: se mantiene el número visible

Las etiquetas quedan centralizadas en `src/config/umbral.ts` para editarlas en un solo lugar.

## 3. Sacar el horario de domingo

Se elimina la fila "Domingos — Cerrado" de los horarios (sección Ubicación y datos estructurados SEO). Quedan lunes a viernes y sábados.

## 4. Integrar las fotos con más delicadeza

Menos cortes duros, más transición entre imagen y fondo:

- Fundido suave en los bordes de las fotos grandes (hero y "El espacio") hacia el color de fondo, para que no terminen en un corte recto.
- Degradado del hero más gradual y cálido, evitando el contraste abrupto detrás del titular.
- Un leve tinte cálido y una viñeta muy sutil sobre las imágenes de las experiencias, respetando los colores naturales (sin filtros fuertes).
- Esquinas apenas redondeadas y aparición con un fade más lento y un micro-zoom al entrar en pantalla, para que las fotos se asienten en lugar de aparecer de golpe.

## Detalles técnicos

- `src/components/umbral/WhatsappCta.tsx`: nuevas clases por variante, prop `label` ya existente.
- `src/config/umbral.ts`: objeto con las etiquetas de CTA y eliminación del horario de domingo.
- `src/routes/index.tsx`: `openingHours` del JSON-LD sin domingo; labels de CTA.
- `src/components/umbral/{Hero,ElEspacio,Experiencia,Pausa,QueEsUmbral,QueNecesitas,Ubicacion,CtaFinal,Header}.tsx`: labels y tratamiento de imagen (máscaras de fundido, overlays cálidos).
- `src/styles.css`: utilidades para el fundido de bordes y el tinte cálido de fotografía.
