import { createTranslation } from '../types';

export const nav = {
  moreInfoLabel: createTranslation({
    en: 'More Info',
    es: 'Más Info'
  }),
  moreInfoHref: createTranslation({
    en: '#faq',
    es: '#faq'
  }),
  registerLabel: createTranslation({
    en: 'Register',
    es: 'Inscribirse'
  }),
  registerUrl: createTranslation({
    en: '/form/tenerife-camp/',
    es: '/es/form/tenerife-camp/'
  })
} as const;
