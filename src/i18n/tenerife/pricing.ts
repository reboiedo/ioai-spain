import { createTranslation } from '../types';

interface PricingTier {
  variant: 'primary' | 'secondary';
  /** Headline statement — the first thing read. */
  headline: ReturnType<typeof createTranslation<string>>;
  price: ReturnType<typeof createTranslation<string>>;
  features: ReturnType<typeof createTranslation<string[]>>;
  cta: {
    text: ReturnType<typeof createTranslation<string>>;
    href: ReturnType<typeof createTranslation<string>>;
  };
}

export const pricing = {
  eyebrow: createTranslation({
    en: 'pick your',
    es: 'elige tu'
  }),
  title: createTranslation({
    en: 'PACKAGE',
    es: 'PAQUETE'
  }),
  copy: createTranslation({
    en: 'Two ways in. Both include the full academic programme and the afternoon activities; the Full pass adds accommodation, all meals and round-the-clock supervision. Pick the one that fits your travel plans.',
    es: 'Dos formas de entrar. Ambas incluyen el programa académico completo y las actividades de la tarde; el pase Completo añade alojamiento, todas las comidas y supervisión las 24 horas. Elige el que mejor se adapte a tus planes de viaje.'
  }),
  tiers: [
    {
      variant: 'primary',
      headline: createTranslation({
        en: 'With accommodation',
        es: 'Con alojamiento'
      }),
      price: createTranslation({
        en: '€3,000',
        es: '3.000 €'
      }),
      features: createTranslation({
        en: [
          'Two-week academic programme',
          'Full extracurricular schedule',
          '4-star hotel + all meals',
          '24-hour supervision + insurance'
        ],
        es: [
          'Programa académico de dos semanas',
          'Calendario extracurricular completo',
          'Hotel de 4 estrellas + todas las comidas',
          'Supervisión 24 horas + seguro'
        ]
      }),
      cta: {
        text: createTranslation({
          en: 'Register',
          es: 'Inscribirse'
        }),
        href: createTranslation({
          en: '#apply',
          es: '#apply'
        })
      }
    },
    {
      variant: 'secondary',
      headline: createTranslation({
        en: 'Without accommodation',
        es: 'Sin alojamiento'
      }),
      price: createTranslation({
        en: '€1,800',
        es: '1.800 €'
      }),
      features: createTranslation({
        en: [
          'Two-week academic programme',
          'Full extracurricular schedule',
          'Daily lunch on site',
          'Accommodation arranged separately'
        ],
        es: [
          'Programa académico de dos semanas',
          'Calendario extracurricular completo',
          'Almuerzo diario en el lugar',
          'Alojamiento gestionado por separado'
        ]
      }),
      cta: {
        text: createTranslation({
          en: 'Register',
          es: 'Inscribirse'
        }),
        href: createTranslation({
          en: '#apply',
          es: '#apply'
        })
      }
    }
  ] satisfies PricingTier[]
} as const;
