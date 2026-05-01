import { createTranslation } from '../types';

interface DaySlot {
  time: ReturnType<typeof createTranslation<string>>;
  title: ReturnType<typeof createTranslation<string>>;
  description: ReturnType<typeof createTranslation<string>>;
}

export const dayInLife = {
  titleLine1: createTranslation({
    en: 'A DAY AT',
    es: 'UN DÍA EN'
  }),
  titleLine2: createTranslation({
    en: 'TENERIFE',
    es: 'TENERIFE'
  }),
  /** Combined title used by the mobile layout, which renders a single
   *  in-flow `SectionTitle` instead of the desktop two-line stack. */
  titleMobile: createTranslation({
    en: 'A DAY AT TENERIFE',
    es: 'UN DÍA EN TENERIFE'
  }),
  intro: createTranslation({
    en: "Every day at the camp follows the same rhythm — morning learning blocks, an unhurried lunch, the afternoon programme on the island, dinner together, and a deliberately quiet evening before the next early start. Here's how a typical day breaks down.",
    es: 'Cada día en el campamento sigue el mismo ritmo — bloques de aprendizaje por la mañana, un almuerzo sin prisas, el programa de la tarde por la isla, cena en grupo y una noche deliberadamente tranquila antes del siguiente arranque temprano. Así se reparte un día típico.'
  }),
  slots: [
    {
      time: createTranslation({
        en: '7:00am – 9:00am',
        es: '7:00 – 9:00'
      }),
      title: createTranslation({
        en: 'Early rise',
        es: 'Arranque temprano'
      }),
      description: createTranslation({
        en: "The day starts with a morning workout, a quick clean-up, and the day's announcements. Then a generous breakfast to power through the first lecture block.",
        es: 'El día empieza con un entrenamiento matinal, un aseo rápido y los avisos del día. Luego un desayuno generoso para encarar el primer bloque de clase.'
      })
    },
    {
      time: createTranslation({
        en: '9:30am – 11:00am',
        es: '9:30 – 11:00'
      }),
      title: createTranslation({
        en: '1st period',
        es: 'Primera clase'
      }),
      description: createTranslation({
        en: "Students pick up the day's coding skills through a mix of lectures, hands-on practice, and short quizzes that keep the room awake and accountable.",
        es: 'Los estudiantes recogen las habilidades de programación del día con una mezcla de clases magistrales, práctica guiada y pequeños cuestionarios que mantienen la sala despierta y comprometida.'
      })
    },
    {
      time: createTranslation({
        en: '11:00am – 11:30am',
        es: '11:00 – 11:30'
      }),
      title: createTranslation({
        en: 'Snack time',
        es: 'Tentempié'
      }),
      description: createTranslation({
        en: 'A short break to recharge with something nutritious. Energy back up, attention reset, ready for the next block.',
        es: 'Una pausa breve para recargar con algo nutritivo. Energía arriba, atención reseteada, listos para el siguiente bloque.'
      })
    },
    {
      time: createTranslation({
        en: '11:30am – 1:00pm',
        es: '11:30 – 13:00'
      }),
      title: createTranslation({
        en: '2nd period',
        es: 'Segunda clase'
      }),
      description: createTranslation({
        en: "The second teaching block leans into individual practice — the instructor circulates while students build their own small projects from the morning's material.",
        es: 'El segundo bloque docente se apoya en la práctica individual — el instructor circula mientras los estudiantes construyen sus propios pequeños proyectos a partir del material de la mañana.'
      })
    },
    {
      time: createTranslation({
        en: '1:30pm – 4:00pm',
        es: '13:30 – 16:00'
      }),
      title: createTranslation({
        en: 'Lunch',
        es: 'Almuerzo'
      }),
      description: createTranslation({
        en: 'A long, well-balanced lunch on site. Time to eat, talk, and rest before the afternoon programme picks up.',
        es: 'Un almuerzo largo y equilibrado en el lugar. Tiempo para comer, hablar y descansar antes de que arranque el programa de la tarde.'
      })
    },
    {
      time: createTranslation({
        en: '4:00pm – 7:00pm',
        es: '16:00 – 19:00'
      }),
      title: createTranslation({
        en: 'Activities',
        es: 'Actividades'
      }),
      description: createTranslation({
        en: 'The full afternoon goes to the extracurricular programme — beach sports, hikes, cultural walks, surfing, the workshops, the day trips. See the previous section for the day-by-day plan.',
        es: 'Toda la tarde se va al programa extracurricular — deportes de playa, caminatas, paseos culturales, surf, talleres, excursiones. En la sección anterior está el plan día a día.'
      })
    },
    {
      time: createTranslation({
        en: '7:00pm – 8:00pm',
        es: '19:00 – 20:00'
      }),
      title: createTranslation({
        en: 'Dinner',
        es: 'Cena'
      }),
      description: createTranslation({
        en: 'Dinner together as a cohort — fresh seafood, Mediterranean staples, and locally-sourced produce on a rotating menu.',
        es: 'Cena toda la cohorte junta — pescado fresco, básicos mediterráneos y producto local de proximidad en un menú rotativo.'
      })
    },
    {
      time: createTranslation({
        en: '8:00pm – 10:00pm',
        es: '20:00 – 22:00'
      }),
      title: createTranslation({
        en: 'Wind down',
        es: 'Cierre del día'
      }),
      description: createTranslation({
        en: 'The last hours of the day are deliberately unstructured — chill time, an optional movie, occasional quizzes or stargazing on the terrace, then lights out for an early start.',
        es: 'Las últimas horas del día son deliberadamente sin agenda — tiempo libre, una película opcional, algún cuestionario o mirar las estrellas en la terraza, y a dormir para arrancar temprano.'
      })
    }
  ] satisfies DaySlot[]
} as const;
