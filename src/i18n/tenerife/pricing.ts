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
    en: 'Both options include the full programme. Lunch and snacks during camp hours come with both. The difference is whether your child stays at the camp hotel with breakfast and dinner included, or stays elsewhere and arranges those meals separately.',
    es: 'Las dos opciones incluyen el programa completo. La comida y los tentempiés durante el horario del campamento vienen con ambas. La diferencia es si tu hijo se aloja en el hotel del campamento con desayuno y cena incluidos, o se aloja en otro sitio y gestiona esas comidas por su cuenta.'
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
          'Daily lunch + snacks',
          'Accommodation arranged separately'
        ],
        es: [
          'Programa académico de dos semanas',
          'Calendario extracurricular completo',
          'Almuerzo diario + tentempiés',
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
