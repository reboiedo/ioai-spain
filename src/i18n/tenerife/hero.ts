import { createTranslation } from '../types';

export const hero = {
  /** Single-line desktop title — kept as the brand mark in both
   *  locales. Edit here to translate it (e.g. CAMPAMENTO TENERIFE). */
  title: createTranslation({
    en: 'TENERIFE CAMP',
    es: 'TENERIFE CAMP'
  }),
  titleStacked: {
    line1: createTranslation({
      en: 'TENERIFE',
      es: 'TENERIFE'
    }),
    line2: createTranslation({
      en: 'CAMP',
      es: 'CAMP'
    })
  },
  dateEyebrow: createTranslation({
    en: 'July 5th — 19th, 2026',
    es: '5 — 19 de julio, 2026'
  }),
  ledeLine: createTranslation({
    en: 'Two weeks of AI, mathematics and outdoor adventure for curious students aged 10 to 20.',
    es: 'Dos semanas de IA, matemáticas y aventura al aire libre para estudiantes curiosos de 10 a 20 años.'
  })
} as const;
