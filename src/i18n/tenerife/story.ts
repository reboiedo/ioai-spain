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
    en: "For over a decade behind the scenes of olympiad coaching and AI research, we've watched ambitious students chase the same handful of opportunities — and noticed how rarely those opportunities reach beyond a familiar inner circle. The Tenerife camp exists to widen that circle.",
    es: 'Durante más de una década entre bambalinas del coaching de olimpiadas y la investigación en IA, hemos visto a estudiantes ambiciosos perseguir el mismo puñado de oportunidades — y nos ha llamado la atención lo poco que esas oportunidades llegan más allá de un círculo cercano y conocido. El campamento de Tenerife existe para ampliar ese círculo.'
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
    { name: 'Leagues of Code', href: 'https://leaguesofcodes.com' }
  ] satisfies StorySponsor[],
  items: [
    {
      label: createTranslation({
        en: 'The academics and the summer are both real',
        es: 'Lo académico y el verano son los dos reales'
      }),
      body: createTranslation({
        en: "The learning program and the extracurricular program are built with equal care. Mornings go deep into AI. Afternoons go to Tenerife's beaches, trails, and historic towns. Neither half is filler, and you don't have to sacrifice one to get the other.",
        es: 'El programa de aprendizaje y el extracurricular están cuidados por igual. Las mañanas se sumergen en la IA. Las tardes se van a las playas, los senderos y los pueblos históricos de Tenerife. Ninguna mitad es relleno, y no tienes que sacrificar una para tener la otra.'
      })
    },
    {
      label: createTranslation({
        en: 'Two tracks, one community',
        es: 'Dos rutas, una sola comunidad'
      }),
      body: createTranslation({
        en: "Foundations and applied ML run in parallel, plus a team research sprint that cuts across both. Mornings you're in your track; afternoons and evenings the whole cohort is together — meals, labs, problem sets, hikes.",
        es: 'Fundamentos y ML aplicado corren en paralelo, más un sprint de investigación en equipo que atraviesa los dos. Por la mañana estás en tu ruta; por la tarde y la noche toda la cohorte está junta — comidas, laboratorios, problemas, caminatas.'
      })
    },
    {
      label: createTranslation({
        en: 'The highest level is in the room',
        es: 'El nivel más alto está en la sala'
      }),
      body: createTranslation({
        en: 'Students selected from the IOAI Spain qualifier, taught by researchers who publish at NeurIPS and ICML, with industry mentors from Barcelona\'s AI labs. Ambition is the baseline.',
        es: 'Estudiantes seleccionados desde el clasificatorio de IOAI España, enseñados por investigadores que publican en NeurIPS e ICML, con mentores de la industria de los laboratorios de IA de Barcelona. La ambición es el punto de partida.'
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
        en: '14–18',
        es: '14–18'
      })
    },
    {
      label: createTranslation({
        en: 'Dates',
        es: 'Fechas'
      }),
      value: createTranslation({
        en: 'TBD',
        es: 'Por confirmar'
      })
    }
  ] satisfies StoryFact[]
} as const;
