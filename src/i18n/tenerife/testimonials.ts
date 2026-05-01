import { createTranslation } from '../types';

interface Testimonial {
  /** Image key (filename without extension) under
   *  `src/assets/tenerife/testimonials/`. */
  imageKey: 'alejandro' | 'maxim' | 'anna' | 'jaime';
  /** Speaker name — same in both locales. */
  name: string;
  quote: ReturnType<typeof createTranslation<string>>;
  role: ReturnType<typeof createTranslation<string>>;
  context: ReturnType<typeof createTranslation<string>>;
}

export const testimonials = {
  title: createTranslation({
    en: 'TESTIMONIALS',
    es: 'TESTIMONIOS'
  }),
  /** Used for the avatar alt: `${prefix}${name}`. */
  portraitAltPrefix: createTranslation({
    en: 'Portrait of ',
    es: 'Retrato de '
  }),
  prevAriaLabel: createTranslation({
    en: 'Previous testimonial',
    es: 'Testimonio anterior'
  }),
  nextAriaLabel: createTranslation({
    en: 'Next testimonial',
    es: 'Siguiente testimonio'
  }),
  prevLabel: createTranslation({
    en: 'Prev',
    es: 'Ant.'
  }),
  nextLabel: createTranslation({
    en: 'Next',
    es: 'Sig.'
  }),
  taglineLine1: createTranslation({
    en: 'Real voices',
    es: 'Voces reales'
  }),
  taglineLine2: createTranslation({
    en: 'from camp',
    es: 'del campamento'
  }),
  items: [
    {
      imageKey: 'alejandro',
      name: 'Alejandro Vivero',
      quote: createTranslation({
        en: "I won Spain's first-ever gold medal at the 2024 International Olympiad in Informatics, after training at the Harbour.Space Menorca Camp 2023.",
        es: 'Gané la primera medalla de oro de España en la Olimpiada Internacional de Informática 2024, después de entrenar en el Harbour.Space Menorca Camp 2023.'
      }),
      role: createTranslation({
        en: 'Gold winner student',
        es: 'Estudiante medalla de oro'
      }),
      context: createTranslation({
        en: 'IOI 2024',
        es: 'IOI 2024'
      })
    },
    {
      imageKey: 'maxim',
      name: 'Maxim Oboznyi',
      quote: createTranslation({
        en: 'The experience was truly eye-opening. Learning advanced math and programming alongside talented students from around the world in Barcelona pushed my skills forward and gave me a strong foundation.',
        es: 'La experiencia me abrió los ojos de verdad. Aprender matemáticas y programación avanzadas junto a estudiantes con talento de todo el mundo en Barcelona impulsó mis habilidades y me dio una base sólida.'
      }),
      role: createTranslation({
        en: 'Silver Medalist',
        es: 'Medalla de plata'
      }),
      context: createTranslation({
        en: 'Southwestern European Regional Contest 2022',
        es: 'Southwestern European Regional Contest 2022'
      })
    },
    {
      imageKey: 'anna',
      name: 'Anna',
      quote: createTranslation({
        en: "My daughter arrived unsure about STEM, but the projects and mentors helped her see it differently. It genuinely helped her find her direction. She's now studying programming at university. We're really grateful!!",
        es: 'Mi hija llegó dudando del STEM, pero los proyectos y los mentores la ayudaron a verlo de otra manera. Le ayudó de verdad a encontrar su dirección. Ahora está estudiando programación en la universidad. ¡Estamos muy agradecidos!'
      }),
      role: createTranslation({
        en: 'Parent',
        es: 'Madre'
      }),
      context: createTranslation({
        en: 'Barcelona Summer Camp 2019',
        es: 'Barcelona Summer Camp 2019'
      })
    },
    {
      imageKey: 'jaime',
      name: 'Jaime',
      quote: createTranslation({
        en: "The Menorca camp was honestly incredible. The activities were hands-on, so it never felt like school, and the mentors were super friendly and helped whenever you got stuck. I'd 100% do it again.",
        es: 'El campamento de Menorca fue, sinceramente, increíble. Las actividades eran muy prácticas, así que nunca parecía la escuela, y los mentores eran súper cercanos y ayudaban en cuanto te atascabas. Lo repetiría al 100%.'
      }),
      role: createTranslation({
        en: 'Participant',
        es: 'Participante'
      }),
      context: createTranslation({
        en: 'Menorca Summer Camp 2023',
        es: 'Menorca Summer Camp 2023'
      })
    }
  ] satisfies Testimonial[]
} as const;
