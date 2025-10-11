import { createTranslation } from './types';

export const finalCTA = {
  title: createTranslation({
    en: "Ready to Join IOAI Spain?",
    es: "¿Listo para Unirte a IOAI España?"
  }),
  ctaButton: createTranslation({
    en: "Join the Waitlist",
    es: "Únete a la Lista de Espera"
  }),
  ctaUrl: createTranslation({
    en: "/form/join-training/",
    es: "/es/form/join-training/"
  })
} as const;