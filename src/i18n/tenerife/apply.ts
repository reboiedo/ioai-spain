import { createTranslation } from '../types';

export const apply = {
  title: createTranslation({
    en: 'JOIN',
    es: 'ÚNETE'
  }),
  copy: createTranslation({
    en: 'Two weeks of serious AI work and an unforgettable Tenerife summer. Spots are limited. Register now for July 5–19, 2026.',
    es: 'Dos semanas de trabajo serio en IA y un verano inolvidable en Tenerife. Las plazas son limitadas. Regístrate ahora para el 5–19 de julio de 2026.'
  }),
  href: createTranslation({
    en: '/form/camp-signup/',
    es: '/es/form/camp-signup/'
  }),
  brochureHref: createTranslation({
    en: '/brochure/tenerife-camp.pdf',
    es: '/brochure/tenerife-camp-es.pdf'
  })
} as const;
