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
    en: 'the IOAI Spain training camp on the slopes of Mount Teide.',
    es: 'el campamento de entrenamiento de IOAI España en las laderas del Teide.'
  })
} as const;
