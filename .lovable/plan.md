# Umbral — Landing page

Una sola página en `/`, en español rioplatense, con narrativa continua: ruido → pausa → umbral → cuerpo → mente → experiencia → presencia → contacto.

## Cómo traduzco la referencia

La captura aporta el ritmo: hero fotográfico de ancho completo con titular serif grande, bloques alternados imagen/texto con mucho aire, y un cierre tipográfico. Lo refino así:

- Una sola escala tipográfica editorial (serif para titulares, sans discreta para todo lo funcional), sin cajas ni cards decorativas.
- Composición asimétrica real: las imágenes rompen el margen (bleed) en lugar de quedar centradas dentro de un contenedor.
- Menos elementos por sección, más espacio negativo, y transiciones de color de fondo muy sutiles entre crema y blanco roto para marcar el paso de una etapa a otra.
- Un solo CTA en toda la página: WhatsApp.

## Fotografías por sección

| Sección | Foto |
|---|---|
| Hero | `hero.png` (sala vacía con luz; el espacio negativo a la derecha aloja el titular) |
| Pausa / ritmo | `manifiesto.png` (figura caminando con motion blur = velocidad que se aquieta) |
| Qué es Umbral | `guiar.png` (tres posturas superpuestas = cuerpo, mente, experiencia) |
| Yoga | `yoga.png` |
| Meditación | `meditacion.png` |
| Masajes | `masaje.png` |
| El espacio | `hero.png` en crop distinto (panorámico, sin texto encima) |

Todas subidas como assets CDN, sin filtros, con `alt` descriptivo y crops mobile que preservan el sujeto (`object-position` por sección).

## Secciones

1. **Header** — logo "Umbral", links El espacio / Experiencias / Yoga / Meditación / Masajes, CTA WhatsApp. Transparente sobre el hero, fondo sólido al hacer scroll. En mobile: menú full-screen sereno.
2. **Hero** — H1 "Cruzá el umbral hacia tu centro.", bajada y CTA. Sin nada más.
3. **Pausa** — "Afuera, todo pide velocidad." / "Acá, podés bajar el ritmo." + foto vertical desplazada.
4. **Qué es Umbral** — "Un espacio para volver a vos." Texto editorial sobre por qué conviven las tres prácticas.
5-7. **Yoga / Meditación / Masajes** — tres bloques de altura generosa, imagen y texto alternando lado. Kicker numerado, título, concepto en itálica, párrafo.
8. **El espacio** — foto panorámica a sangre + "Un refugio diseñado para el silencio." y ubicación.
9. **¿Qué necesitás hoy?** — tipográfica pura, tres líneas grandes (Moverte → Yoga, etc.) que anclan a su sección, y CTA "Hablar con Umbral".
10. **Filosofía / testimonio** — cita serif grande sobre fondo crema, atribución sobria.
11. **Ubicación y horarios** — dos columnas simples: dirección / horarios / WhatsApp.
12. **CTA final** — "Hacé espacio para vos." + las cuatro líneas + botón.
13. **Footer** — mínimo: logo, links, datos, año.

## Detalles técnicos

- `src/routes/index.tsx` reemplaza el placeholder; secciones en `src/components/umbral/*` para mantenerlo legible.
- Datos de contacto centralizados en `src/config/umbral.ts` (dirección, horarios, teléfono, mensaje de WhatsApp) — un solo lugar para editar. El link se arma como `wa.me` con el mensaje predefinido.
- Tokens de color y tipografía en `src/styles.css` (@theme): blanco roto, crema, arena, beige, marrón suave, negro cálido en oklch. Serif editorial + sans limpia cargadas por `<link>` en `__root.tsx`.
- Animaciones: un hook `useReveal` con IntersectionObserver → fade + 12px de subida, ~900ms, easing suave, respetando `prefers-reduced-motion`. Sin librerías nuevas.
- SEO: title y meta description pedidos en el `head()` de la ruta index, og/twitter con la foto del hero, JSON-LD `LocalBusiness` con dirección y horarios, un solo H1.
- Sin backend, sin formularios, sin dependencias nuevas.
