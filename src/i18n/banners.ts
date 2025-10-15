import { createTranslation } from './types';

/**
 * Banner slides for the home page slider
 * Each banner includes title, description, button, and Unicorn Studio background
 */
export const banners = [
  {
    id: 'brochure',
    title: createTranslation({
      en: "Spanish AI Olympiad Brochure",
      es: "Folleto de la Olimpiada Española de IA"
    }),
    description: createTranslation({
      en: "Download our Brochure and help promote the 1st Spanish AI Olympiad",
      es: "Descarga nuestro folleto y ayuda a promocionar la 1ª Olimpiada Española de IA"
    }),
    buttonText: createTranslation({
      en: "Download Brochure",
      es: "Descargar Folleto"
    }),
    buttonUrl: createTranslation({
      en: "/form/download/",
      es: "/es/form/download/"
    }),
    backgroundJson: '/banner.json',
    backgroundColor: '#000000',
    order: 1
  },
  {
    id: 'summer-camp',
    title: createTranslation({
      en: "Tenerife Summer Camp 2025",
      es: "Campamento de Verano Tenerife 2025"
    }),
    description: createTranslation({
      en: "Join us for an intensive AI and coding summer camp in beautiful Tenerife",
      es: "Únete a nosotros para un campamento de verano intensivo de IA y programación en la hermosa Tenerife"
    }),
    buttonText: createTranslation({
      en: "Learn More",
      es: "Más Información"
    }),
    buttonUrl: createTranslation({
      en: "/tenerife-summer-camp/",
      es: "/es/tenerife-summer-camp/"
    }),
    backgroundJson: '/summer-camp.json',
    backgroundColor: '#251392',
    order: 2
  }
] as const;
