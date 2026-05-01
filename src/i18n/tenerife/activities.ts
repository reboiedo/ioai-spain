import { createTranslation } from '../types';

interface Activity {
  /** Day number — same in both locales. */
  day: number;
  title: ReturnType<typeof createTranslation<string>>;
  description: ReturnType<typeof createTranslation<string>>;
}

export const activities = {
  eyebrow: createTranslation({
    en: 'Daily',
    es: 'Cada día'
  }),
  title: createTranslation({
    en: 'ADVENTURES',
    es: 'AVENTURAS'
  }),
  intro: createTranslation({
    en: 'Outside of study hours, campers have a full schedule of activities across Tenerife — beaches, national parks, historic towns, and cultural workshops. Two weeks of afternoons and evenings, planned but never crammed.',
    es: 'Fuera de las horas de estudio, los campistas tienen una agenda completa de actividades por toda Tenerife — playas, parques nacionales, pueblos históricos y talleres culturales. Dos semanas de tardes y noches, planificadas pero nunca sobrecargadas.'
  }),
  /** Prefix for the per-card "Day N" label. The day number is appended
   *  by the component, e.g. `${dayLabel} ${a.day}`. */
  dayLabel: createTranslation({
    en: 'Day',
    es: 'Día'
  }),
  prevAriaLabel: createTranslation({
    en: 'Previous activity',
    es: 'Actividad anterior'
  }),
  nextAriaLabel: createTranslation({
    en: 'Next activity',
    es: 'Siguiente actividad'
  }),
  /** Suffix for the mobile polaroid card aria-label, after
   *  `Day N: <title> — `. */
  cardTapHint: createTranslation({
    en: 'tap to read description',
    es: 'toca para leer la descripción'
  }),
  items: [
    {
      day: 1,
      title: createTranslation({
        en: 'Welcome & getting to know each other',
        es: 'Bienvenida y primeros encuentros'
      }),
      description: createTranslation({
        en: 'The camp kicks off with a walk along the seafront of Puerto de la Cruz, finishing at the historic Plaza del Charco. Along the way, campers take part in a simple but effective icebreaker — sharing their name, something they love, and their plans for the future. By the end of the evening, the group already feels like a group.',
        es: 'El campamento arranca con un paseo por el frente marítimo de Puerto de la Cruz, terminando en la histórica Plaza del Charco. Por el camino, los campistas hacen un rompehielos sencillo pero efectivo — comparten su nombre, algo que les apasiona y sus planes de futuro. Al final de la tarde, el grupo ya se siente grupo.'
      })
    },
    {
      day: 2,
      title: createTranslation({
        en: 'Historic Puerto de la Cruz',
        es: 'Puerto de la Cruz histórico'
      }),
      description: createTranslation({
        en: "Campers explore the old town on a guided cultural walk that brings local history to life. Highlights include the 17th-century Church of Nuestra Señora de la Peña de Francia, the town's historic fishing pier — once used to export Malvasia wine — Playa Jardín designed by celebrated Canarian artist César Manrique, and the Castle of San Felipe, a coastal fortress built to defend against pirates. The walk ends back at the iconic Lago Martiánez pool complex.",
        es: 'Los campistas exploran el casco antiguo en un paseo cultural guiado que da vida a la historia local. Entre los puntos destacados están la iglesia del siglo XVII de Nuestra Señora de la Peña de Francia, el muelle pesquero histórico — usado en su día para exportar vino de Malvasía —, Playa Jardín diseñada por el célebre artista canario César Manrique y el Castillo de San Felipe, una fortaleza costera levantada para defenderse de los piratas. El paseo termina de vuelta en el icónico complejo Lago Martiánez.'
      })
    },
    {
      day: 3,
      title: createTranslation({
        en: 'Beach sports',
        es: 'Deportes de playa'
      }),
      description: createTranslation({
        en: 'A full afternoon at Playa Jardín with volleyball, football, tennis and frisbee. Campers rotate through activities in small groups, keeping it social, competitive and fun.',
        es: 'Una tarde completa en Playa Jardín con vóley, fútbol, tenis y frisbee. Los campistas rotan entre actividades en grupos pequeños, manteniéndolo social, competitivo y divertido.'
      })
    },
    {
      day: 4,
      title: createTranslation({
        en: 'Yoga workshop & beach',
        es: 'Taller de yoga y playa'
      }),
      description: createTranslation({
        en: 'A more mindful afternoon. While some campers enjoy the beach, others take part in a yoga workshop designed to balance the physical intensity of the week with self-care and reflection. Every camper gets their session.',
        es: 'Una tarde más consciente. Mientras unos campistas disfrutan de la playa, otros participan en un taller de yoga pensado para equilibrar la intensidad física de la semana con autocuidado y reflexión. Cada campista pasa por su sesión.'
      })
    },
    {
      day: 5,
      title: createTranslation({
        en: 'Rambla de Castro coastal trail',
        es: 'Sendero costero Rambla de Castro'
      }),
      description: createTranslation({
        en: "A scenic coastal hike through one of Tenerife's most beautiful natural routes. The group passes black-sand coves, a historic 1903 steam-engine pumping station, a wooden bridge over a ravine, an 18th-century coastal fort, and arrives at Mirador de San Pedro — a clifftop viewpoint with sweeping ocean views.",
        es: 'Una caminata costera por uno de los recorridos naturales más bonitos de Tenerife. El grupo pasa por calas de arena negra, una histórica estación de bombeo a vapor de 1903, un puente de madera sobre un barranco, un fuerte costero del siglo XVIII y llega al Mirador de San Pedro — un mirador en lo alto del acantilado con vistas amplias al océano.'
      })
    },
    {
      day: 6,
      title: createTranslation({
        en: 'Traditional Canarian games',
        es: 'Juegos canarios tradicionales'
      }),
      description: createTranslation({
        en: 'Back at Playa Jardín for an afternoon of traditional games from the Canary Islands: crab races, tug-of-war and the handkerchief game. Loud, fun, and a genuine window into local culture.',
        es: 'De vuelta en Playa Jardín para una tarde de juegos tradicionales de las Islas Canarias: carreras de cangrejos, tira y afloja y el juego del pañuelo. Ruidoso, divertido y una ventana auténtica a la cultura local.'
      })
    },
    {
      day: 7,
      title: createTranslation({
        en: 'Zip-line park at Forestal Park',
        es: 'Parque de tirolinas Forestal Park'
      }),
      description: createTranslation({
        en: 'A special day at Forestal Park Tenerife, a high-altitude adventure park in the forests of Monte de La Esperanza. Before heading in, the group takes part in a short session on emotions — naming them, noticing them, and letting go of the negative ones through a dreamcatcher activity afterward. Lunch is a picnic in the forest.',
        es: 'Un día especial en Forestal Park Tenerife, un parque de aventuras en altura en los bosques del Monte de La Esperanza. Antes de entrar, el grupo hace una sesión corta sobre emociones — nombrarlas, notarlas y soltar las negativas con una actividad de atrapasueños después. La comida es un picnic en el bosque.'
      })
    },
    {
      day: 8,
      title: createTranslation({
        en: 'Teide National Park & Observatory',
        es: 'Parque Nacional del Teide y Observatorio'
      }),
      description: createTranslation({
        en: 'A full-day excursion to the top of Tenerife. One group visits the Teide Observatory, home to leading European solar telescopes. The other explores the El Portillo Visitor Centre, with exhibitions on volcanic geology, a botanical garden of native species and a simulated volcanic tube. Both groups then meet at Roques de García for lunch and a breathing and nature connection activity, surrounded by one of the most dramatic landscapes in Europe.',
        es: 'Una excursión de día completo a lo más alto de Tenerife. Un grupo visita el Observatorio del Teide, sede de los principales telescopios solares europeos. El otro explora el Centro de Visitantes de El Portillo, con exposiciones sobre geología volcánica, un jardín botánico de especies autóctonas y un tubo volcánico simulado. Ambos grupos se reúnen luego en los Roques de García para almorzar y hacer una actividad de respiración y conexión con la naturaleza, rodeados de uno de los paisajes más impresionantes de Europa.'
      })
    },
    {
      day: 9,
      title: createTranslation({
        en: 'La Orotava cultural walk',
        es: 'Paseo cultural por La Orotava'
      }),
      description: createTranslation({
        en: 'A guided tour through the beautifully preserved historic town of La Orotava. Campers visit a neo-Gothic chapel, a 19th-century French garden with panoramic views, the iconic Casa de los Balcones with its carved wooden architecture, and a traditional gofio mill — a staple of Canarian food culture.',
        es: 'Una visita guiada por el casco histórico, magníficamente conservado, de La Orotava. Los campistas visitan una capilla neogótica, un jardín francés del siglo XIX con vistas panorámicas, la icónica Casa de los Balcones con su arquitectura de madera tallada y un molino tradicional de gofio — un básico de la cultura gastronómica canaria.'
      })
    },
    {
      day: 10,
      title: createTranslation({
        en: 'Surfing at Playa Martiánez',
        es: 'Surf en Playa Martiánez'
      }),
      description: createTranslation({
        en: 'Just five minutes from the hotel, campers try surfing for the first time (or build on what they know) in small groups with professional instructors. While half surf, the other half enjoy the beach or the hotel pool.',
        es: 'A solo cinco minutos del hotel, los campistas prueban el surf por primera vez (o trabajan sobre lo que ya saben) en grupos pequeños con instructores profesionales. Mientras una mitad surfea, la otra disfruta de la playa o de la piscina del hotel.'
      })
    },
    {
      day: 11,
      title: createTranslation({
        en: 'Painting workshop & beach',
        es: 'Taller de pintura y playa'
      }),
      description: createTranslation({
        en: 'An afternoon combining creativity with sunshine. Campers take a guided painting workshop on the beach, turning their impressions of the trip into their own artwork. A quieter, more reflective counterpoint to the more active days.',
        es: 'Una tarde que combina creatividad y sol. Los campistas hacen un taller de pintura guiado en la playa, convirtiendo sus impresiones del viaje en su propia obra. Un contrapunto más tranquilo y reflexivo a los días más activos.'
      })
    },
    {
      day: 12,
      title: createTranslation({
        en: 'Surfing, round two',
        es: 'Surf, segunda ronda'
      }),
      description: createTranslation({
        en: 'Another session in the water, with extended surf classes for all participants. More time in the sea, more time to progress.',
        es: 'Otra sesión en el agua, con clases de surf extendidas para todos los participantes. Más tiempo en el mar, más tiempo para avanzar.'
      })
    },
    {
      day: 13,
      title: createTranslation({
        en: 'Farewell beach games',
        es: 'Juegos de playa de despedida'
      }),
      description: createTranslation({
        en: 'The last beach afternoon: handball, beach paddles, gymkhana obstacle courses and relay races. Before leaving, the whole group gathers in a circle to share their favourite memory of Tenerife.',
        es: 'La última tarde de playa: balonmano, palas de playa, gymkhanas con circuitos de obstáculos y carreras de relevos. Antes de irse, todo el grupo se junta en círculo para compartir su recuerdo favorito de Tenerife.'
      })
    },
    {
      day: 14,
      title: createTranslation({
        en: 'Loro Parque',
        es: 'Loro Parque'
      }),
      description: createTranslation({
        en: "The final special-day excursion takes campers to Loro Parque, one of Europe's most celebrated wildlife parks. The visit is designed not just as a fun day out, but as a meaningful encounter with animal welfare and biodiversity conservation — themes that connect to the broader values of the camp.",
        es: 'La última excursión de día especial lleva a los campistas a Loro Parque, uno de los parques de fauna más celebrados de Europa. La visita está pensada no solo como un día divertido, sino como un encuentro con sentido con el bienestar animal y la conservación de la biodiversidad — temas que conectan con los valores más amplios del campamento.'
      })
    },
    {
      day: 15,
      title: createTranslation({
        en: 'Farewell & the jar of messages',
        es: 'Despedida y el frasco de mensajes'
      }),
      description: createTranslation({
        en: "The last day brings the group together for a final activity: the jar of messages. Each camper writes a note — a reflection, an encouragement, a memory — folds it up and adds it to a shared jar. It's a simple, powerful way to close two weeks of shared experience. The day ends with a collective farewell discussion and the kind of goodbyes that usually involve promises to stay in touch.",
        es: 'El último día reúne al grupo para una actividad final: el frasco de mensajes. Cada campista escribe una nota — una reflexión, un ánimo, un recuerdo — la dobla y la añade a un frasco compartido. Es una forma sencilla y poderosa de cerrar dos semanas de experiencia compartida. El día termina con una charla de despedida colectiva y el tipo de despedidas que suelen incluir promesas de seguir en contacto.'
      })
    }
  ] satisfies Activity[]
} as const;
