import { createTranslation } from '../types';

export const hero = {
  mainTitle: createTranslation({
    en: 'Tenerife Summer Camp',
    es: 'Campamento de Verano en Tenerife'
  }),
  dateSubtitle: createTranslation({
    en: 'July 5th — 19th, 2026',
    es: '5 — 19 de Julio, 2026'
  }),
  tagline: createTranslation({
    en: '2-Week Tech Summer Camp in Tenerife',
    es: 'Campamento de Tecnología de 2 Semanas en Tenerife'
  }),
  description: createTranslation({
    en: 'A path to computer tech success for your child with an island-coding adventure at our summer camp',
    es: 'Un camino hacia el éxito tecnológico para tu hijo con una aventura de programación en nuestra isla'
  }),
  paragraph: createTranslation({
    en: 'We\'re thrilled to welcome young innovators to our summer camp on the beautiful island of Tenerife. Children aged 10–13, teenagers aged 14–17, and young adults aged 18–20 each follow separate, age-appropriate tracks, so every student benefits from the right mix of challenge, support, and fun.\n\nOur program combines rigorous learning with a vibrant extracurricular experience, so students don\'t have to choose between academic growth and the joy of summer camp.',
    es: 'Estamos encantados de dar la bienvenida a jóvenes innovadores a nuestro campamento de verano en la hermosa isla de Tenerife. Los niños de 10 a 13 años, los adolescentes de 14 a 17 años y los jóvenes adultos de 18 a 20 años siguen itinerarios separados y adaptados a su edad, para que cada estudiante se beneficie de la combinación adecuada de desafío, apoyo y diversión.\n\nNuestro programa combina un aprendizaje riguroso con una experiencia extracurricular vibrante, para que los estudiantes no tengan que elegir entre crecimiento académico y la alegría del campamento de verano.'
  }),
  poweredBy: createTranslation({
    en: 'Powered and organized by:',
    es: 'Impulsado y organizado por:'
  })
} as const;
