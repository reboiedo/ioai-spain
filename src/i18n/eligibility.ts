import { createTranslation } from './types';

export const eligibility = {
  eyebrow: createTranslation({
    en: "Eligibility",
    es: "Elegibilidad"
  }),
  sectionTitle: createTranslation({
    en: "Who Can Participate?",
    es: "¿Quién Puede Participar?"
  }),
  intro: createTranslation({
    en: "Students interested in representing Spain at the IOAI must meet the following criteria:",
    es: "Los estudiantes interesados en representar a España en la IOAI deben cumplir los siguientes criterios:"
  }),
  criteria: {
    point1: createTranslation({
      en: "Be a Spanish citizen, Permanent Resident, or full-time high school student in Spain",
      es: "Ser ciudadano español, Residente Permanente o estudiante de secundaria a tiempo completo en España"
    }),
    point2: createTranslation({
      en: "Be under 20 years old on July 1st, 2026",
      es: "Tener menos de 20 años el 1 de julio de 2026"
    }),
    point3: createTranslation({
      en: "Be enrolled in secondary/high school for 2025-2026",
      es: "Estar matriculado en secundaria/bachillerato para 2025-2026"
    })
  },
  joinButton: createTranslation({
    en: "Join now",
    es: "Únete ahora"
  })
} as const;