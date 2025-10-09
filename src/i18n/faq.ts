import { createTranslation } from './types';

export const faq = {
  eyebrow: createTranslation({
    en: "FAQ",
    es: "Preguntas Frecuentes"
  }),
  sectionTitle: createTranslation({
    en: "Frequently Asked Questions",
    es: "Preguntas Frecuentes"
  }),
  viewAll: createTranslation({
    en: "View all FAQs",
    es: "Ver todas las preguntas"
  }),
  expandAnswer: createTranslation({
    en: "Click to expand answer",
    es: "Haz clic para expandir la respuesta"
  }),
  categories: {
    eligibility: createTranslation({
      en: "Eligibility",
      es: "Elegibilidad"
    }),
    process: createTranslation({
      en: "Selection Process",
      es: "Proceso de Selección"
    }),
    requirements: createTranslation({
      en: "Requirements",
      es: "Requisitos"
    }),
    contact: createTranslation({
      en: "Contact",
      es: "Contacto"
    }),
    general: createTranslation({
      en: "General",
      es: "General"
    })
  }
} as const;