import { createTranslation } from '../types';

export const meta = {
  title: createTranslation({
    en: 'Tenerife Camp — IOAI Spain',
    es: 'Tenerife Camp — IOAI España'
  }),
  description: createTranslation({
    en: 'Two weeks of AI, mathematics and outdoor adventure on the slopes of Mount Teide, for curious students aged 10 to 20.',
    es: 'Dos semanas de IA, matemáticas y aventura al aire libre en las laderas del Teide, para estudiantes curiosos de 10 a 20 años.'
  }),
  ogImage: createTranslation({
    en: '/og-tenerife.png',
    es: '/og-tenerife-es.png'
  }),
  canonical: createTranslation({
    en: '/tenerife-summer-camp/',
    es: '/es/tenerife-summer-camp/'
  })
} as const;
