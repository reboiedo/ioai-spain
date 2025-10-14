import { createTranslation } from './types';

export const hero = {
  eyebrow: createTranslation({
    en: "National Olympiad in AI",
    es: "Olimpiada Nacional de IA"
  }),
  title: createTranslation({
    en: "Spain's Search for Future AI Leaders Begins",
    es: "Comienza la Búsqueda de los Futuros Líderes de IA de España"
  }),
  subtitle: createTranslation({
    en: "Open to all Spanish secondary and high school students who haven't started university yet. Join the national selection for IOAI 2026 and compete in Abu Dhabi.",
    es: "Abierto a todos los estudiantes españoles de secundaria y bachillerato que aún no hayan comenzado la universidad. Únete a la selección nacional para IOAI 2026 y compite en Abu Dabi."
  }),
  trainingStarts: createTranslation({
    en: "Starts October 27th",
    es: "Comienza el 27 de octubre"
  }),
  ctaUrl: createTranslation({
    en: "/form/join-training/",
    es: "/es/form/join-training/"
  })
} as const;