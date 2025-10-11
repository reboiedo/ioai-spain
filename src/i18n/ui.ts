import { createTranslation } from './types';

export const ui = {
  nav: {
    languageLabel: createTranslation({
      en: 'English',
      es: 'Español'
    }),
    selectLanguage: createTranslation({
      en: 'Select language',
      es: 'Seleccionar idioma'
    }),
    joinNow: createTranslation({
      en: 'Join Now',
      es: 'Únete Ahora'
    }),
    joinNowUrl: createTranslation({
      en: '/form/join-training/',
      es: '/es/form/join-training/'
    }),
    aboutIOAI: createTranslation({
      en: 'About IOAI',
      es: 'Acerca de IOAI'
    }),
    whyJoin: createTranslation({
      en: 'Why Join',
      es: 'Por Qué Unirse'
    }),
    programme: createTranslation({
      en: 'Program',
      es: 'Programa'
    }),
    eligibility: createTranslation({
      en: 'Eligibility',
      es: 'Elegibilidad'
    }),
    faq: createTranslation({
      en: 'FAQ',
      es: 'Preguntas Frecuentes'
    })
  },
  common: {
    learnMore: createTranslation({
      en: 'Learn more',
      es: 'Más información'
    }),
    apply: createTranslation({
      en: 'Apply',
      es: 'Aplicar'
    }),
    joinNow: createTranslation({
      en: 'Join Now',
      es: 'Únete Ahora'
    }),
    getStarted: createTranslation({
      en: 'Get Started',
      es: 'Comenzar'
    }),
    register: createTranslation({
      en: 'Register',
      es: 'Registrarse'
    }),
    comingSoon: createTranslation({
      en: 'More content coming soon...',
      es: 'Más contenido próximamente...'
    })
  }
} as const;