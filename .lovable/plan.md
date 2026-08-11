# Ajustes de CTAs, ubicación y auditoría

## Cambios solicitados

### 1. CTAs más livianos
- Volver a un peso tipográfico ligero en los botones: de `font-semibold` a peso normal/medio, manteniendo el tracking amplio y el contraste actual de fondo.
- El botón fijo del header ("Hablar por WhatsApp") pasa a tener un hover con contraste real: inversión suave (fondo claro + texto oscuro + borde) con transición lenta. Mismo tratamiento en foco por teclado.

### 2. Sección "El espacio"
- Quitar la dirección que aparece debajo del párrafo "En el corazón de Palermo Hollywood…". La dirección queda sólo en Ubicación y footer.

### 3. Sección "Dónde estamos / Horarios"
- Títulos un poco más grandes, con más presencia.
- La información se acomoda de forma más centrada, con las dos columnas equilibradas.
- Se elimina la tercera columna de WhatsApp: salen el número de teléfono y el botón "Reservar práctica".
- Debajo del bloque de contacto se agrega un ícono de Instagram con enlace y etiqueta accesible. El usuario del perfil queda como dato provisional editable en la configuración.

### 4. Teléfono
- El número visible queda únicamente en el footer.

## Auditoría (después de aplicar los cambios)
Revisión escrita, sin cambios adicionales de código, cubriendo:
- Diseño y ritmo editorial: espacio negativo, escala tipográfica, consistencia de grillas.
- Jerarquía visual: orden de lectura por sección y peso relativo de titulares y CTAs.
- Contraste y accesibilidad: contraste de textos y botones, áreas táctiles, estados hover/focus, textos alternativos, semántica de encabezados.
- Conversión: cantidad y ubicación de CTAs, claridad de etiquetas, fricción en mobile.
- Recomendaciones priorizadas, para aplicar sólo si las pedís.

## Detalles técnicos
- `src/config/umbral.ts`: nuevo campo `instagram` (usuario + URL, provisional); baja de `CTA_LABELS.ubicacion`.
- `src/components/umbral/WhatsappCta.tsx`: peso de fuente más liviano.
- `src/components/umbral/Header.tsx`: hover/focus invertido en el CTA fijo.
- `src/components/umbral/ElEspacio.tsx`: quitar bloque de dirección.
- `src/components/umbral/Ubicacion.tsx`: dos bloques centrados + ícono de Instagram (lucide-react), sin teléfono ni botón.