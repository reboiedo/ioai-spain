import { createTranslation } from '../types';

interface FaqItem {
  question: ReturnType<typeof createTranslation<string>>;
  answer: ReturnType<typeof createTranslation<string>>;
}

export const faq = {
  eyebrow: createTranslation({
    en: 'FAQ &',
    es: 'FAQ &'
  }),
  title: createTranslation({
    en: 'CONTACT',
    es: 'CONTACTO'
  }),
  contactLead: createTranslation({
    en: 'Need to talk through something specific? Reach out anytime at ',
    es: '¿Necesitas hablar de algo concreto? Escríbenos en cualquier momento a '
  }),
  email: {
    label: createTranslation({
      en: 'ioai.spain@harbour.space',
      es: 'ioai.spain@harbour.space'
    }),
    href: createTranslation({
      en: 'mailto:ioai.spain@harbour.space',
      es: 'mailto:ioai.spain@harbour.space'
    })
  },
  phone: {
    label: createTranslation({
      en: '+34 671 498 303',
      es: '+34 671 498 303'
    }),
    href: createTranslation({
      en: 'tel:+34671498303',
      es: 'tel:+34671498303'
    })
  },
  items: [
    {
      question: createTranslation({
        en: 'Who is the camp for?',
        es: '¿Para quién es el campamento?'
      }),
      answer: createTranslation({
        en: 'Curious students aged 10 to 20, with or without prior coding experience. Beginners pick the Beginner track and work up from zero; more advanced students pick the Advanced track and dive straight into olympiad-level material. Everyone shares the extracurricular programme.',
        es: 'Estudiantes curiosos de 10 a 20 años, con o sin experiencia previa en programación. Los principiantes eligen la ruta Principiante y avanzan desde cero; los más avanzados eligen la ruta Avanzada y se sumergen directamente en material de nivel olimpiada. Todos comparten el programa extracurricular.'
      })
    },
    {
      question: createTranslation({
        en: 'Do you need prior coding experience?',
        es: '¿Hace falta experiencia previa en programación?'
      }),
      answer: createTranslation({
        en: 'Not for the Beginner tracks. Python, AI, Game Development and Design all start from zero — the goal is to build real intuition, not throw students in the deep end. The Advanced tracks (Mathematics, Algorithms, AI) assume comfort with the basics and move fast.',
        es: 'Para las rutas Principiante, no. Python, IA, Desarrollo de Videojuegos y Diseño empiezan desde cero — el objetivo es construir intuición real, no lanzar a los estudiantes al fondo. Las rutas Avanzadas (Matemáticas, Algoritmos, IA) asumen soltura con lo básico y avanzan rápido.'
      })
    },
    {
      question: createTranslation({
        en: "What's included in the price?",
        es: '¿Qué incluye el precio?'
      }),
      answer: createTranslation({
        en: 'Two weeks of academic programme (45 hours across one chosen track), the full extracurricular programme (excursions, sports, workshops, cultural visits), a 4-star shared-room hotel stay with all meals included, transport between activities, and camp insurance.',
        es: 'Dos semanas de programa académico (45 horas en la ruta elegida), el programa extracurricular completo (excursiones, deportes, talleres, visitas culturales), alojamiento en hotel de 4 estrellas en habitación compartida con todas las comidas incluidas, transporte entre actividades y el seguro del campamento.'
      })
    },
    {
      question: createTranslation({
        en: 'What language is the camp in?',
        es: '¿En qué idioma se imparte el campamento?'
      }),
      answer: createTranslation({
        en: 'Everything happens in English — academic sessions, group activities, and day-to-day camp life. For most students this becomes a genuine language immersion alongside the technical learning.',
        es: 'Todo sucede en inglés — sesiones académicas, actividades en grupo y la vida diaria del campamento. Para la mayoría de los estudiantes esto se convierte en una inmersión lingüística real junto al aprendizaje técnico.'
      })
    },
    {
      question: createTranslation({
        en: 'Where do students stay?',
        es: '¿Dónde se alojan los estudiantes?'
      }),
      answer: createTranslation({
        en: 'At a 4-star hotel in Puerto de la Cruz on the northern coast of Tenerife, two minutes from Martiánez beach. Rooms are shared between three campers, with breakfast, lunch and dinner included on site every day.',
        es: 'En un hotel de 4 estrellas en Puerto de la Cruz, en la costa norte de Tenerife, a dos minutos de la playa de Martiánez. Las habitaciones son compartidas entre tres campistas, con desayuno, almuerzo y cena incluidos en el lugar cada día.'
      })
    },
    {
      question: createTranslation({
        en: 'How is supervision handled?',
        es: '¿Cómo funciona la supervisión?'
      }),
      answer: createTranslation({
        en: 'Nineteen dedicated supervisors are on the ground at all times, plus eight coaches who are accessible for help with anything — learning, activities, or in between. All staff are trained to be attentive to individual needs and age groups.',
        es: 'Diecinueve supervisores dedicados están en el lugar en todo momento, además de ocho entrenadores disponibles para ayudar en lo que haga falta — aprendizaje, actividades o lo que surja en medio. Todo el personal está formado para atender necesidades individuales y grupos de edad.'
      })
    },
    {
      question: createTranslation({
        en: 'What do students need to bring?',
        es: '¿Qué tienen que traer los estudiantes?'
      }),
      answer: createTranslation({
        en: 'A laptop is required for the academic programme. Beyond that: comfortable summer clothing for two weeks, swimwear, sunscreen, sturdy shoes for hikes, and a refillable water bottle. A full packing list is sent two weeks before camp.',
        es: 'Es obligatorio un portátil para el programa académico. Aparte de eso: ropa de verano cómoda para dos semanas, bañador, protector solar, calzado resistente para caminatas y una botella reutilizable. Dos semanas antes del campamento se envía una lista completa de equipaje.'
      })
    },
    {
      question: createTranslation({
        en: 'Are flights included?',
        es: '¿Están incluidos los vuelos?'
      }),
      answer: createTranslation({
        en: 'No — families book their own flights to and from Tenerife. Both Tenerife North and Tenerife South airports are well-connected to mainland Europe.',
        es: 'No — las familias reservan sus propios vuelos hacia y desde Tenerife. Tanto el aeropuerto de Tenerife Norte como el de Tenerife Sur están bien conectados con la Europa continental.'
      })
    },
    {
      question: createTranslation({
        en: 'Is there airport transfer?',
        es: '¿Hay traslado desde el aeropuerto?'
      }),
      answer: createTranslation({
        en: 'Yes. Group transfers between the airport and the hotel are organised on the published arrival and departure days. Outside those dates, transfers can be arranged for a small fee.',
        es: 'Sí. Los traslados en grupo entre el aeropuerto y el hotel se organizan en los días publicados de llegada y salida. Fuera de esas fechas, se pueden organizar traslados con un pequeño coste.'
      })
    }
  ] satisfies FaqItem[]
} as const;
