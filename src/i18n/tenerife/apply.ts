import { createTranslation } from '../types';

export const apply = {
  title: createTranslation({
    en: 'JOIN',
    es: 'ÚNETE'
  }),
  copy: createTranslation({
    en: 'Ready to take part in the IOAI Spain training camp? Applications open with the national qualifier round in February — shortlisted students are invited directly to camp.',
    es: '¿Listo para participar en el campamento de entrenamiento IOAI España? Las solicitudes se abren con la ronda clasificatoria nacional en febrero — los estudiantes seleccionados son invitados directamente al campamento.'
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
