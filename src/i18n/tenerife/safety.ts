import { createTranslation } from '../types';

interface SafetyPillar {
  title: ReturnType<typeof createTranslation<string>>;
  description: ReturnType<typeof createTranslation<string>>;
}

interface Supervisor {
  /** Full name — same in both locales. Stored here so all
   *  supervisor data lives in one place even though the value
   *  isn't translated. */
  name: string;
  /** Two-letter initials for the gradient placeholder tile. */
  initials: string;
  /** Filename (no extension) under
   *  `src/assets/tenerife/safety/supervisors/`. */
  imageKey?: string;
  /** Role / area of responsibility — translated. */
  role: ReturnType<typeof createTranslation<string>>;
}

export const safety = {
  titleLine1: createTranslation({
    en: 'SAFETY',
    es: 'SEGURIDAD'
  }),
  titleLine2: createTranslation({
    en: 'FIRST',
    es: 'PRIMERO'
  }),
  titleEyebrow: createTranslation({
    en: 'always',
    es: 'siempre'
  }),
  lede: createTranslation({
    en: 'Your child is looked after at all times. Below is exactly how we take care of every camper, from the moment they land in Tenerife to the day they fly home.',
    es: 'Tu hijo está cuidado en todo momento. A continuación, exactamente cómo cuidamos a cada campista, desde que aterriza en Tenerife hasta el día que vuela de vuelta a casa.'
  }),
  photoAlt: createTranslation({
    en: 'Camp staff supervising students during an outdoor activity',
    es: 'Personal del campamento supervisando a estudiantes durante una actividad al aire libre'
  }),
  pillars: [
    {
      title: createTranslation({
        en: '24/7 supervision',
        es: 'Supervisión 24/7'
      }),
      description: createTranslation({
        en: 'Nineteen dedicated supervisors on the ground plus eight coaches always accessible — day, night, on every activity.',
        es: 'Diecinueve supervisores dedicados sobre el terreno más ocho entrenadores siempre disponibles — de día, de noche, en cada actividad.'
      })
    },
    {
      title: createTranslation({
        en: 'Trained mentors',
        es: 'Mentores formados'
      }),
      description: createTranslation({
        en: 'Every staff member carries extensive experience working with children and is trained to age group and individual needs.',
        es: 'Cada miembro del equipo tiene amplia experiencia trabajando con niños y está formado para atender cada grupo de edad y necesidades individuales.'
      })
    },
    {
      title: createTranslation({
        en: 'Medical Insurance',
        es: 'Seguro Médico'
      }),
      description: createTranslation({
        en: 'Civil liability, personal accident and travel assistance insurance are included.',
        es: 'Se incluye seguro de responsabilidad civil, accidentes personales y asistencia en viaje.'
      })
    },
    {
      title: createTranslation({
        en: 'Daily updates',
        es: 'Actualizaciones diarias'
      }),
      description: createTranslation({
        en: 'Parents are kept in the loop with regular check-ins and a direct channel to the camp coordinator for anything urgent.',
        es: 'Los padres están al tanto con seguimientos regulares y un canal directo con la coordinadora del campamento para cualquier urgencia.'
      })
    }
  ] satisfies SafetyPillar[],
  supervisorsTitle: createTranslation({
    en: 'Camp organizers',
    es: 'Organizadores del campamento'
  }),
  supervisorsCopy: createTranslation({
    en: 'The team behind the camp — planning the program, looking after every detail, and on call for parents and campers from the first email to the last day on the island.',
    es: 'El equipo detrás del campamento — planifica el programa, cuida cada detalle y está disponible para padres y campistas desde el primer correo hasta el último día en la isla.'
  }),
  supervisors: [
    {
      name: 'Olga Litvinova',
      initials: 'OL',
      imageKey: 'olga',
      role: createTranslation({
        en: 'Project Manager',
        es: 'Directora de Proyecto'
      })
    },
    {
      name: 'Patricia Carranza',
      initials: 'PC',
      imageKey: 'patricia',
      role: createTranslation({
        en: 'Academic Consultant',
        es: 'Consultora Académica'
      })
    },
    {
      name: 'Maria Kanbina',
      initials: 'MK',
      imageKey: 'maria',
      role: createTranslation({
        en: 'Customer Relations',
        es: 'Atención al Cliente'
      })
    },
    {
      name: 'Kalista Galic',
      initials: 'KG',
      imageKey: 'kalista',
      role: createTranslation({
        en: 'Camp Supervisor',
        es: 'Supervisora del Campamento'
      })
    }
  ] satisfies Supervisor[]
} as const;
