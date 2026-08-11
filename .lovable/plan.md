Mejorar la integración de la sección de ubicación

Objetivo
Hacer que la sección de ubicación deje de sentirse como un bloque de texto aislado y pase a integrarse mejor con la narrativa visual y editorial del resto de la landing de Umbral.

Cambios propuestos

1. Tratamiento visual de la sección
   - Aplicar un fondo cálido sutil (por ejemplo, `bg-cream` o un tono arena muy claro) que la diferencie de la sección anterior y el `CtaFinal`.
   - Aumentar el tamaño tipográfico de los títulos "Dónde estamos" y "Horarios" para que tengan más presencia y jerarquía, manteniendo el estilo de eyebrow.

2. Conexión con el espacio físico
   - Incluir una imagen o una representación visual de la zona del estudio (por ejemplo, una foto del acceso o de la calle Fitz Roy) que se funda suavemente con el fondo cálido.
   - Si no hay foto disponible del exterior, usar una imagen del interior ya aprobada (como `hero.png`) como fondo atmosférico con degradado para evitar cortes duros.
   - Agregar un enlace sutil de "Cómo llegar" con la dirección completa vinculada a Google Maps, sin repetir el número de teléfono.

3. Integración con la narrativa y el footer
   - Ajustar el ritmo de transición entre `Filosofía`, `Ubicación`, `CtaFinal` y `Footer` para que la ubicación actúe como un puente hacia el contacto.
   - Revisar que el footer conserve el número de WhatsApp y el ícono de Instagram, y que la sección de ubicación no los duplique.
   - Alinear el espaciado y la escala tipográfica de la ubicación con la `Filosofía` y el `CtaFinal` para una progresión coherente.

4. Accesibilidad y conversión
   - Mantener el contraste suficiente en los textos sobre el fondo cálido.
   - Asegurar que los enlaces tengan estados de foco y hover visibles.
   - No agregar nuevos campos de formulario ni funcionalidades de reserva.

Archivos a modificar
- `src/components/umbral/Ubicacion.tsx`
- `src/components/umbral/Footer.tsx` (revisión de integración, sin duplicar datos)
- `src/config/umbral.ts` (si se agrega enlace a Google Maps o nuevos datos de ubicación)
- `src/styles.css` (si se agregan nuevas utilidades de fondo o degradados)

Criterios de aceptación
- La sección de ubicación se percibe como una continuación natural del recorrido visual, no como un apéndice informativo.
- Los títulos tienen mayor jerarquía y la información está bien centrada y espaciada.
- No se repite el teléfono de WhatsApp en la sección de ubicación (solo en el footer).
- El build de la aplicación sigue funcionando correctamente.
