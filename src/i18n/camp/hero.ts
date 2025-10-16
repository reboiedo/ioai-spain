import { createTranslation } from '../types';

export const hero = {
  mainTitle: createTranslation({
    en: 'Tenerife Summer Camp',
    es: 'Campamento de Verano en Tenerife'
  }),
  dateSubtitle: createTranslation({
    en: 'July 1st — 15th, 2026',
    es: '1 — 15 de Julio, 2026'
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
    en: 'We\'re thrilled to invite young innovators aged 10 to 20 on the beautiful island of Tenerife. Our camp is designed to inspire and empower the next generation of tech leaders, and we can\'t wait to share our passion for coding with your child.',
    es: 'Estamos encantados de invitar a jóvenes innovadores de 10 a 20 años en la hermosa isla de Tenerife. Nuestro campamento está diseñado para inspirar y empoderar a la próxima generación de líderes tecnológicos, y estamos ansiosos por compartir nuestra pasión por la programación con tu hijo.'
  })
} as const;
