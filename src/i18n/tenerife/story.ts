import { createTranslation } from '../types';

interface StoryItem {
  label: ReturnType<typeof createTranslation<string>>;
  body: ReturnType<typeof createTranslation<string>>;
}

interface StoryFact {
  label: ReturnType<typeof createTranslation<string>>;
  value: ReturnType<typeof createTranslation<string>>;
}

interface StorySponsor {
  /** Brand name — same in both locales but stored here for symmetry. */
  name: string;
  href: string;
}

export const story = {
  titleLine1: createTranslation({
    en: 'ABOUT',
    es: 'NUESTRA'
  }),
  titleLine2: createTranslation({
    en: 'US',
    es: 'HISTORIA'
  }),
  lede: createTranslation({
    en: "Most summer camps make you choose: serious academics or a great summer. We don't think that's a good enough deal. At our camp, mornings go deep into AI and afternoons go to Tenerife's beaches, trails and historic towns. Both halves are built with equal care.",
    es: 'La mayoría de los campamentos de verano te obligan a elegir: o lo académico va en serio, o tienes un buen verano. No nos parece un trato lo bastante bueno. En nuestro campamento, las mañanas se sumergen en la IA y las tardes se van a las playas, los senderos y los pueblos históricos de Tenerife. Las dos mitades están cuidadas por igual.'
  }),
  poweredBy: createTranslation({
    en: 'Powered by',
    es: 'Impulsado por'
  }),
  videoAriaLabel: createTranslation({
    en: 'Play story video',
    es: 'Reproducir vídeo de la historia'
  }),
  sponsors: [
    { name: 'Harbour.Space', href: 'https://harbour.space' },
    { name: 'Leagues of Code', href: 'https://www.leaguesofcode.com' }
  ] satisfies StorySponsor[],
  items: [
    {
      label: createTranslation({
        en: 'Backed by Harbour.Space and Leagues of Code',
        es: 'Respaldado por Harbour.Space y Leagues of Code'
      }),
      body: createTranslation({
        en: 'Two organisations with years of running serious educational programs at scale. The Harbour.Space team has prepared winners of international olympiads in competitive programming and runs the Spanish national selection for the International Olympiad in AI.',
        es: 'Dos organizaciones con años de experiencia llevando programas educativos serios a gran escala. El equipo de Harbour.Space ha preparado a ganadores de olimpiadas internacionales de programación competitiva y dirige la selección nacional española para la Olimpiada Internacional de IA.'
      })
    },
    {
      label: createTranslation({
        en: 'A track for every starting point',
        es: 'Una ruta para cada punto de partida'
      }),
      body: createTranslation({
        en: 'The Beginners track opens the door for students with little or no AI experience. The Advanced track is structured, rigorous training for those ready to go deep. Each student picks one they are ready for.',
        es: 'La ruta de Principiantes abre la puerta a estudiantes con poca o ninguna experiencia en IA. La ruta Avanzada es un entrenamiento estructurado y riguroso para quienes están listos para profundizar. Cada estudiante elige la que le corresponde.'
      })
    },
    {
      label: createTranslation({
        en: 'National AI olympiad teams train at the camp',
        es: 'Los equipos nacionales de la olimpiada de IA entrenan en el campamento'
      }),
      body: createTranslation({
        en: "Alongside our two student tracks, the camp hosts top-performing students from multiple countries preparing for the International Olympiad in AI. Outside class, all three groups mix on the same trips, beaches and dinner tables. For a beginner, that proximity is motivation no classroom can manufacture. For advanced students, it's a reminder there's always further to go.",
        es: 'Junto a nuestras dos rutas de estudiantes, el campamento acoge a los mejores estudiantes de varios países que se preparan para la Olimpiada Internacional de IA. Fuera de clase, los tres grupos se mezclan en las mismas excursiones, playas y mesas a la hora de cenar. Para un principiante, esa cercanía es una motivación que ninguna aula puede fabricar. Para los estudiantes avanzados, es un recordatorio de que siempre hay más camino por delante.'
      })
    }
  ] satisfies StoryItem[],
  facts: [
    {
      label: createTranslation({
        en: 'Language',
        es: 'Idioma'
      }),
      value: createTranslation({
        en: 'English',
        es: 'Inglés'
      })
    },
    {
      label: createTranslation({
        en: 'Ages',
        es: 'Edades'
      }),
      value: createTranslation({
        en: '10–20',
        es: '10–20'
      })
    },
    {
      label: createTranslation({
        en: 'Dates',
        es: 'Fechas'
      }),
      value: createTranslation({
        en: 'July 5–19, 2026',
        es: '5–19 julio, 2026'
      })
    }
  ] satisfies StoryFact[]
} as const;
