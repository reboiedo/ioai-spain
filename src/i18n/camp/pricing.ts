import { createTranslation } from '../types';

export const pricing = {
  heading: createTranslation({
    en: 'Join us this Summer in Tenerife!',
    es: '¡Únete a nosotros este verano en Tenerife!'
  }),
  withoutAccommodation: {
    label: createTranslation({
      en: 'Without\nAccommodation',
      es: 'Sin\nAlojamiento'
    }),
    price: createTranslation({
      en: '1800€',
      es: '1800€'
    })
  },
  withAccommodation: {
    label: createTranslation({
      en: 'With\nAccommodation',
      es: 'Con\nAlojamiento'
    }),
    price: createTranslation({
      en: '3000€',
      es: '3000€'
    })
  },
  bookButton: createTranslation({
    en: 'Book',
    es: 'Reservar'
  }),
  disclaimer: createTranslation({
    en: '*travel expenses to and from Tenerife are not included',
    es: '*los gastos de viaje hacia y desde Tenerife no están incluidos'
  })
} as const;
