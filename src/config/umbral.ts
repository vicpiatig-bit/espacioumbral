/**
 * Datos del negocio. Todo lo editable de Umbral vive acá.
 * Los datos son provisionales: cambialos en este único archivo.
 */

export const umbral = {
  nombre: "Umbral",
  barrio: "Palermo Hollywood",
  ciudad: "Buenos Aires",
  direccion: "Fitz Roy 1847",
  direccionCompleta: "Fitz Roy 1847, Palermo Hollywood, Buenos Aires",
  // Se muestra tal cual en pantalla
  whatsappVisible: "011-5555-5555",
  // Formato internacional argentino, sin signos (54 9 11 ...)
  whatsappInternacional: "5491155555555",
  whatsappMensaje: "Hola, Umbral. Quisiera conocer más sobre las experiencias y clases.",
  // Datos provisionales de Instagram
  instagramUsuario: "@umbral.estudio",
  instagramUrl: "https://instagram.com/umbral.estudio",
  horarios: [
    { dias: "Lunes a viernes", horas: "8:00 – 21:00" },
    { dias: "Sábados", horas: "9:00 – 14:00" },
  ],
} as const;

export const whatsappUrl = `https://wa.me/${umbral.whatsappInternacional}?text=${encodeURIComponent(
  umbral.whatsappMensaje,
)}`;

export const CTA_LABEL = "Hablar por WhatsApp";

/** Etiquetas de los CTA. Todos llevan al mismo WhatsApp. */
export const CTA_LABELS = {
  header: "Hablar por WhatsApp",
  hero: "Empezá hoy",
  caminos: "Reservá tu lugar",
  final: "Hablar por WhatsApp",
} as const;