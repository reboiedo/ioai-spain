import { createTranslation } from './types';

export const banner = {
  title: createTranslation({
    en: "Spanish AI Olympiad Brochure",
    es: "Folleto de la Olimpiada Española de IA"
  }),
  description: createTranslation({
    en: "Download our Brochure and help promote the 1st Spanish AI Olympiad",
    es: "Descarga nuestro folleto y ayuda a promocionar la 1ª Olimpiada Española de IA"
  }),
  downloadButton: createTranslation({
    en: "Download Brochure",
    es: "Descargar Folleto"
  }),
  downloadUrl: createTranslation({
    en: "/form/download/",
    es: "/es/form/download/"
  })
} as const;