Mejorar la integración del teléfono y el ícono de Instagram en el footer

Objetivo
Que el número de WhatsApp y el ícono de Instagram en el footer se perciban como un bloque de contacto coherente, manteniendo el estilo minimalista de Umbral.

Cambios propuestos

1. Agrupar el contacto
   - Reorganizar la columna derecha del footer para que el número de WhatsApp y el ícono de Instagram formen una única unidad visual.
   - Opción minimalista: disponer el ícono de Instagram alineado al lado del número de teléfono (misma línea), separados por un espacio generoso, en lugar de que el ícono quede debajo del número.

2. Unificar tipografía y estados
   - Aplicar la misma tipografía y color base al teléfono y al ícono.
   - Mantener el hover sutil: el teléfono ya tiene un underline que se intensifica; el ícono puede usar el mismo color de foreground en hover.
   - Asegurar un área táctil cómoda para el ícono (mantener los 40×40 px) y estados de foco visibles.

3. Espaciado y jerarquía
   - Dejar un espacio claro entre el bloque de contacto y el copyright, para que cada pie de información respire.
   - Alinear el bloque de contacto a la derecha en desktop y alineado al inicio en mobile, respetando la estructura actual del footer.

4. A11y y consistencia
   - Conservar el `aria-label` descriptivo del enlace de Instagram.
   - Verificar que el enlace de WhatsApp conserve el texto visible y el destino correcto.

Archivos a modificar
- `src/components/umbral/Footer.tsx`

Criterios de aceptación
- El teléfono y el ícono de Instagram se leen como un solo bloque de contacto.
- El estilo sigue siendo minimalista: sin fondos adicionales, sin bordes nuevos, sin gradientes.
- El layout funciona bien en desktop y mobile.
- El build de la aplicación sigue funcionando correctamente.
