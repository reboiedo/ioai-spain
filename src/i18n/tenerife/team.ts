import { createTranslation } from '../types';

interface TeamMember {
  /** Two-letter initials shown when no portrait is available. */
  initials: string;
  /** Full name — same in both locales. */
  name: string;
  /** Filename (no extension) of the portrait in `src/assets/tenerife/team/`. */
  imageKey?: string;
  /** Short credential / accolade — translated. */
  role: ReturnType<typeof createTranslation<string>>;
  /** Bio paragraph — translated. */
  bio: ReturnType<typeof createTranslation<string>>;
}

export const team = {
  eyebrow: createTranslation({
    en: 'superstar',
    es: 'el equipo'
  }),
  title: createTranslation({
    en: 'COACHES',
    es: 'COACHES'
  }),
  copy: createTranslation({
    en: 'Every track is led by someone who works in the field, not just teaches it. The team includes research engineers from leading AI institutes, competitive programming coaches, olympiad winners, PhD researchers, and industry professionals with experience at major tech companies. Several instructors have coached or competed at international level themselves.',
    es: 'Cada ruta la dirige alguien que trabaja en el sector, no solo lo enseña. El equipo incluye ingenieros de investigación de los principales institutos de IA, entrenadores de programación competitiva, ganadores de olimpiadas, investigadores con doctorado y profesionales del sector con experiencia en grandes empresas tecnológicas. Varios instructores han entrenado o competido a nivel internacional.'
  }),
  members: [
    {
      initials: 'VA',
      name: 'Vladimir Arkhipov',
      imageKey: 'vladimir',
      role: createTranslation({
        en: '10+ ML competitions won',
        es: '10+ competiciones de ML ganadas'
      }),
      bio: createTranslation({
        en: "Vladimir has won over 10 machine learning competitions and hackathons, and helped design the final round of the national AI olympiad. He spent time as an ML Engineer at PIK Digital before moving into teaching, where he's been helping students crack AI for over two years.",
        es: 'Vladimir ha ganado más de 10 competiciones y hackathones de aprendizaje automático y ayudó a diseñar la ronda final de la olimpiada nacional de IA. Pasó por PIK Digital como ML Engineer antes de pasarse a la docencia, donde lleva más de dos años ayudando a estudiantes a entender la IA.'
      })
    },
    {
      initials: 'AL',
      name: 'Alberto Leyva Guerra',
      imageKey: 'alberto',
      role: createTranslation({
        en: '3× IOI finalist',
        es: 'Finalista 3× de la IOI'
      }),
      bio: createTranslation({
        en: 'Alberto represented his country at the International Olympiad in Informatics (IOI) — the world championship of competitive programming — three years in a row. He earned medals at the Ibero-American computing competition across all three years, and holds Candidate Master rank on Codeforces, a global platform where only the top few percent of competitive programmers reach that level.',
        es: 'Alberto representó a su país en la Olimpiada Internacional de Informática (IOI) — el campeonato mundial de programación competitiva — tres años seguidos. Consiguió medallas en la competición iberoamericana de informática en los tres años y tiene el rango de Candidate Master en Codeforces, una plataforma global a la que solo llega el pequeño porcentaje superior de programadores competitivos.'
      })
    },
    {
      initials: 'AS',
      name: 'Artem Seleznev',
      imageKey: 'artem_seleznev',
      role: createTranslation({
        en: '2025 IOAI team mentor',
        es: 'Mentor del equipo IOAI 2025'
      }),
      bio: createTranslation({
        en: "Artem is a research engineer at AIRI, one of the top AI research institutes in the field. He's won the National Technology AI Olympiad and the AI Challenge twice (2023 and 2024), and was chosen to mentor the national-level team at the 2025 International Olympiad in Artificial Intelligence — the global championship for AI students. He's also spoken at major tech events including Skolkovo.",
        es: 'Artem es ingeniero de investigación en AIRI, uno de los institutos de investigación en IA más destacados del sector. Ha ganado la National Technology AI Olympiad y el AI Challenge dos veces (2023 y 2024), y fue elegido para mentorizar al equipo nacional en la Olimpiada Internacional de Inteligencia Artificial 2025 — el campeonato mundial para estudiantes de IA. También ha intervenido en grandes eventos del sector como Skolkovo.'
      })
    },
    {
      initials: 'AP',
      name: 'Artem Plotkin',
      imageKey: 'artem_plotkin',
      role: createTranslation({
        en: 'ICPC and IOI coach',
        es: 'Entrenador de ICPC e IOI'
      }),
      bio: createTranslation({
        en: 'Artem is a software engineer and mathematician with industry experience at Yandex, currently completing a PhD in Computational Mathematics. He coaches competitive programming teams at ICPC and IOI level — two of the most prestigious competitions in the field — and teaches algorithms and nonlinear programming. His own competitive record speaks for itself: 1st place at the 2018 International Data Analysis Olympiad and 5th place at the 2024 CodeRun Backend Championship.',
        es: 'Artem es ingeniero de software y matemático con experiencia en la industria en Yandex, y actualmente está terminando un doctorado en Matemáticas Computacionales. Entrena equipos de programación competitiva a nivel ICPC e IOI — dos de las competiciones más prestigiosas del sector — y enseña algoritmos y programación no lineal. Su propio palmarés habla por sí mismo: 1.º puesto en la Olimpiada Internacional de Análisis de Datos 2018 y 5.º puesto en el CodeRun Backend Championship 2024.'
      })
    },
    {
      initials: 'IZ',
      name: 'Ivan Zagorulko',
      imageKey: 'ivan',
      role: createTranslation({
        en: '2025 IOAI team mentor',
        es: 'Mentor del equipo IOAI 2025'
      }),
      bio: createTranslation({
        en: 'Ivan is a research engineer at AIRI and a three-time winner of the AI Challenge (2022, 2023, 2024). He mentored the national-level team at the 2025 International Olympiad in AI, and recently published a research paper accepted at AAAI — one of the most prestigious conferences in the field.',
        es: 'Ivan es ingeniero de investigación en AIRI y tres veces ganador del AI Challenge (2022, 2023, 2024). Mentorizó al equipo nacional en la Olimpiada Internacional de IA 2025 y recientemente publicó un trabajo de investigación aceptado en AAAI — una de las conferencias más prestigiosas del sector.'
      })
    },
    {
      initials: 'IM',
      name: 'Ilia Mogilev',
      imageKey: 'ilia',
      role: createTranslation({
        en: '10,000+ CS teachers trained',
        es: '10.000+ profesores de informática formados'
      }),
      bio: createTranslation({
        en: "Ilia has spent 8+ years designing education programs at scale. He's built over 50 learning products, trained more than 10,000 CS teachers nationwide, developed curriculum content for Yandex, and created materials for Hour of Code Kazakhstan that reached 20,000+ students. He also ran a nationwide AI hackathon for 8,000 schoolchildren.",
        es: 'Ilia lleva más de 8 años diseñando programas educativos a escala. Ha construido más de 50 productos de aprendizaje, ha formado a más de 10.000 profesores de informática a nivel nacional, ha desarrollado contenido curricular para Yandex y ha creado materiales para Hour of Code Kazakhstan que llegaron a más de 20.000 estudiantes. También dirigió un hackathon nacional de IA para 8.000 escolares.'
      })
    },
    {
      initials: 'OM',
      name: 'Ogabek Masharipov',
      imageKey: 'ogabek',
      role: createTranslation({
        en: 'Leagues of Code Academic Coordinator',
        es: 'Coordinador Académico de Leagues of Code'
      }),
      bio: createTranslation({
        en: "Ogabek has taught Computer Science and Robotics at both school and university level across Europe. He's a lecturer in Algorithms and Data Structures at a leading state university, and has taught the IB Computer Science curriculum at a top international gymnasium. His focus is on building structured, efficient lessons that actually stick.",
        es: 'Ogabek ha enseñado Informática y Robótica tanto a nivel escolar como universitario en Europa. Es profesor de Algoritmos y Estructuras de Datos en una universidad estatal de referencia, y ha impartido el plan de Informática del IB en un destacado gymnasium internacional. Su enfoque es construir clases estructuradas y eficientes que de verdad calen.'
      })
    },
    {
      initials: 'AV',
      name: 'Anier Velasco',
      imageKey: 'anier',
      role: createTranslation({
        en: 'Member of the IOI Spain Scientific Committee',
        es: 'Miembro del Comité Científico de la IOI España'
      }),
      bio: createTranslation({
        en: 'Anier is a researcher and educator specialising in the theory behind machine learning. He studied Computer Science and Data Science at Harbour.Space University, won a gold medal at the National Olympiad in Informatics, and has contributed to Aya — an open-source multilingual AI project backed by Cohere for AI, involving researchers from over 100 countries.',
        es: 'Anier es investigador y educador especializado en la teoría detrás del aprendizaje automático. Estudió Informática y Ciencia de Datos en Harbour.Space University, ganó una medalla de oro en la Olimpiada Nacional de Informática y ha contribuido a Aya — un proyecto de IA multilingüe de código abierto impulsado por Cohere for AI, en el que participan investigadores de más de 100 países.'
      })
    }
  ] satisfies TeamMember[]
} as const;
