import { createTranslation } from '../types';

export const meta = {
  title: createTranslation({
    en: 'Tenerife Camp — IOAI Spain',
    es: 'Tenerife Camp — IOAI España'
  }),
  description: createTranslation({
    en: 'A two-week IOAI Spain training camp on the slopes of Mount Teide. AI, mathematics, and outdoor adventure for ages 14–18.',
    es: 'Un campamento de entrenamiento IOAI España de dos semanas en las laderas del Teide. IA, matemáticas y aventura al aire libre para edades 14–18.'
  }),
  ogImage: createTranslation({
    en: '/og-tenerife.png',
    es: '/og-tenerife-es.png'
  }),
  canonical: createTranslation({
    en: '/tenerife-camp/',
    es: '/es/tenerife-camp/'
  })
} as const;
