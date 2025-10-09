import { createTranslation } from './types';

export const meta = {
  title: createTranslation({
    en: "IOAI Spain - International Olympiad in AI",
    es: "IOAI España - Olimpiada Internacional de IA"
  }),
  description: createTranslation({
    en: "Join Spain's national team for the International Olympiad in Artificial Intelligence 2026",
    es: "Únete al equipo nacional de España para la Olimpiada Internacional de Inteligencia Artificial 2026"
  })
} as const;