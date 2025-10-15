import { createTranslation } from '../types';

export const footer = {
  brand: createTranslation({
    en: 'IOAI Spain',
    es: 'IOAI España'
  }),
  description: createTranslation({
    en: 'Our camp is designed to inspire and empower the next generation of tech leaders, and we can\'t wait to share our passion for coding with your child.',
    es: 'Nuestro campamento está diseñado para inspirar y empoderar a la próxima generación de líderes tecnológicos, y estamos ansiosos por compartir nuestra pasión por la programación con tu hijo.'
  }),
  visitLabel: createTranslation({
    en: 'Visit our main website',
    es: 'Visita nuestro sitio web principal'
  }),
  website: createTranslation({
    en: 'https://ioai-spain.org',
    es: 'https://ioai-spain.org'
  }),
  contactHeading: createTranslation({
    en: 'Need Help? Contact us',
    es: '¿Necesitas ayuda? Contáctanos'
  }),
  contactText: createTranslation({
    en: 'Send us an email or give us a call today and let us guide you to the Barcelona shores of coding success.',
    es: 'Envíanos un correo electrónico o llámanos hoy y permítenos guiarte hacia las costas de Barcelona del éxito en programación.'
  }),
  emailLabel: createTranslation({
    en: 'Email',
    es: 'Correo electrónico'
  }),
  email: createTranslation({
    en: 'ioai.spain@harbour.space',
    es: 'ioai.spain@harbour.space'
  }),
  callLabel: createTranslation({
    en: 'Call us',
    es: 'Llámanos'
  }),
  phone: createTranslation({
    en: '+34 67 498 303',
    es: '+34 67 498 303'
  }),
  copyright: createTranslation({
    en: '© IOAI Spain',
    es: '© IOAI España'
  }),
  privacyPolicy: createTranslation({
    en: 'Privacy Policy',
    es: 'Política de Privacidad'
  })
} as const;
