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
      en: "Be a Spanish citizen, Permanent Resident, or full-time school student in Spain",
      es: "Ser ciudadano español, Residente Permanente o estudiante a tiempo completo en España"
    }),
    point2: createTranslation({
      en: "Be at least 14 at registration and no older than 20 on July 1, 2026",
      es: "Tener al menos 14 años en el registro y no más de 20 años el 1 de julio de 2026"
    }),
    point3: createTranslation({
      en: "Be enrolled in secondary/high school for 2025-2026",
      es: "Estar matriculado en secundaria/bachillerato para 2025-2026"
    })
  },
  joinButton: createTranslation({
    en: "Join now",
    es: "Únete ahora"
  }),
  joinButtonUrl: createTranslation({
    en: "/form/join-training/",
    es: "/es/form/join-training/"
  })
} as const;