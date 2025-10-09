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
    en: "Open call for all Spanish students under 20 who haven't started university yet. Join the national selection for IOAI 2026 and compete in Abhu Dabhi.",
    es: "Convocatoria abierta para todos los estudiantes españoles menores de 20 años que aún no hayan comenzado la universidad. Únete a la selección nacional para IOAI 2026 y compite en Abu Dabi."
  }),
  trainingStarts: createTranslation({
    en: "Training starts October 27th",
    es: "El entrenamiento comienza el 27 de octubre"
  })
} as const;