import { createTranslation } from '../types';

interface TrackItem {
  name: ReturnType<typeof createTranslation<string>>;
  description: ReturnType<typeof createTranslation<string>>;
  outcomes: ReturnType<typeof createTranslation<string>>;
}

interface TrackGroup {
  title: ReturnType<typeof createTranslation<string>>;
  description: ReturnType<typeof createTranslation<string>>;
  items: TrackItem[];
}

interface FitItem {
  text: ReturnType<typeof createTranslation<string>>;
}

export const tracks = {
  eyebrow: createTranslation({
    en: 'learning',
    es: 'aprendiendo'
  }),
  title: createTranslation({
    en: 'TRACKS',
    es: 'RUTAS'
  }),
  copy: createTranslation({
    en: 'Every camper picks one track — beginner or advanced — and goes deep into it. Ten sessions, 35 hours in total, hands-on and project-based, led by experienced educators and industry professionals in small groups. By the end of the camp, every student has something real to show for it.',
    es: 'Cada campista elige una ruta — principiante o avanzada — y se sumerge en ella. Diez sesiones, 35 horas en total, prácticas y por proyectos, dirigidas por educadores experimentados y profesionales del sector en grupos pequeños. Al final del campamento, cada estudiante tiene algo real que mostrar.'
  }),
  beginner: {
    title: createTranslation({
      en: 'Beginner',
      es: 'Principiante'
    }),
    description: createTranslation({
      en: "For students curious about AI with little or no prior experience. The goal isn't to overwhelm — it's to open a door, build real intuition, and make the subject feel exciting rather than intimidating.",
      es: 'Para estudiantes con curiosidad por la IA con poca o ninguna experiencia previa. El objetivo no es abrumar — es abrir una puerta, construir intuición real y hacer que el tema resulte emocionante en lugar de intimidante.'
    }),
    items: [
      {
        name: createTranslation({
          en: 'Python',
          es: 'Python'
        }),
        description: createTranslation({
          en: 'No experience needed — just a willingness to think logically and try things out. This track starts from zero and builds steadily: variables, conditions, loops, functions, and eventually a complete working program that you design and build yourself. By the final session, you\'re not just writing code — you\'re presenting it, explaining it, and understanding what comes next.',
          es: 'No se necesita experiencia — solo disposición para pensar lógicamente y probar cosas. Esta ruta arranca de cero y construye con calma: variables, condiciones, bucles, funciones y, al final, un programa completo y funcional que diseñas y construyes tú mismo. En la última sesión no solo escribes código: lo presentas, lo explicas y entiendes qué viene después.'
        }),
        outcomes: createTranslation({
          en: 'A working Python program, a solid foundation in programming logic, and the confidence to keep going independently.',
          es: 'Un programa funcional en Python, una base sólida en lógica de programación y la confianza para seguir avanzando por tu cuenta.'
        })
      },
      {
        name: createTranslation({
          en: 'Artificial Intelligence',
          es: 'Inteligencia Artificial'
        }),
        description: createTranslation({
          en: "AI is everywhere — but most people have no idea how it actually works. This track changes that. No coding required. You'll learn what AI really is (and isn't), how machines learn, what data does, how computer vision works, and how to use AI tools effectively. You'll also tackle the harder questions: bias, fairness, and what it means to use AI responsibly.",
          es: 'La IA está en todas partes — pero la mayoría no tiene ni idea de cómo funciona. Esta ruta cambia eso. Sin programación. Aprenderás qué es realmente la IA (y qué no), cómo aprenden las máquinas, qué hace los datos, cómo funciona la visión por computadora y cómo usar herramientas de IA de forma efectiva. También abordarás las preguntas más difíciles: sesgo, justicia y qué significa usar la IA con responsabilidad.'
        }),
        outcomes: createTranslation({
          en: 'A clear mental model of how AI systems work, hands-on experience with real AI tools, and a final project that puts your understanding into practice.',
          es: 'Un modelo mental claro de cómo funcionan los sistemas de IA, experiencia práctica con herramientas reales y un proyecto final que pone tu comprensión en práctica.'
        })
      },
      {
        name: createTranslation({
          en: 'Game Development',
          es: 'Desarrollo de Videojuegos'
        }),
        description: createTranslation({
          en: "Ever wondered how games actually work — not just how to play them, but how they're built? This track takes you inside the structure of games: the rules, the mechanics, the logic that makes things move and respond. No prior coding knowledge required. You'll finish the camp with a fully playable game you designed and built yourself.",
          es: '¿Te has preguntado cómo funcionan los videojuegos por dentro — no solo cómo jugarlos, sino cómo se construyen? Esta ruta te lleva al interior de la estructura de los juegos: las reglas, las mecánicas, la lógica que hace que las cosas se muevan y respondan. Sin conocimientos previos de programación. Terminarás el campamento con un juego totalmente jugable que diseñaste y construiste tú mismo.'
        }),
        outcomes: createTranslation({
          en: 'A complete playable game, an understanding of how game logic works, and a new way of looking at every game you play.',
          es: 'Un juego completo y jugable, una comprensión de cómo funciona la lógica de los videojuegos y una nueva forma de ver cada juego al que juegues.'
        })
      },
      {
        name: createTranslation({
          en: 'Design',
          es: 'Diseño'
        }),
        description: createTranslation({
          en: "Design isn't decoration — it's a way of solving problems. This track covers the full creative spectrum: visual design, typography, photography, sound, video, and 3D. You'll work with industry-standard tools like Figma and Canva, and by the end you'll have a multi-format portfolio that shows what you can do across different media.",
          es: 'El diseño no es decoración — es una forma de resolver problemas. Esta ruta cubre todo el espectro creativo: diseño visual, tipografía, fotografía, sonido, video y 3D. Trabajarás con herramientas estándar de la industria como Figma y Canva, y al final tendrás un portafolio multiformato que muestra lo que puedes hacer en distintos medios.'
        }),
        outcomes: createTranslation({
          en: 'A structured creative portfolio, practical skills across multiple design disciplines, and a new understanding of how visual communication works.',
          es: 'Un portafolio creativo estructurado, habilidades prácticas en varias disciplinas de diseño y una nueva comprensión de cómo funciona la comunicación visual.'
        })
      }
    ] satisfies TrackItem[]
  } satisfies TrackGroup,
  advanced: {
    title: createTranslation({
      en: 'Advanced',
      es: 'Avanzado'
    }),
    description: createTranslation({
      en: 'For students ready for a serious challenge. Structured, rigorous training for those who want to push well past school-level material and into the kind of work done at olympiad and research level.',
      es: 'Para estudiantes listos para un reto serio. Entrenamiento estructurado y riguroso para quienes quieren ir mucho más allá del material escolar y entrar en el tipo de trabajo que se hace a nivel de olimpiada e investigación.'
    }),
    items: [
      {
        name: createTranslation({
          en: 'Mathematics',
          es: 'Matemáticas'
        }),
        description: createTranslation({
          en: 'For students who are ready to go well beyond school-level mathematics. This track covers quadratic and polynomial functions, exponential and logarithmic models, trigonometry, set theory, and sequences — connecting them not as isolated topics but as a coherent mathematical toolkit for tackling complex problems. The final session is a multi-round problem-solving showcase across all areas covered.',
          es: 'Para estudiantes listos para ir mucho más allá de las matemáticas escolares. Esta ruta cubre funciones cuadráticas y polinómicas, modelos exponenciales y logarítmicos, trigonometría, teoría de conjuntos y sucesiones — conectándolos no como temas aislados sino como una caja de herramientas matemática coherente para abordar problemas complejos. La sesión final es una exposición de resolución de problemas en varias rondas que abarca todas las áreas tratadas.'
        }),
        outcomes: createTranslation({
          en: 'Fluency in advanced mathematical concepts, the ability to move flexibly between different areas of mathematics, and the kind of problem-solving confidence that shows up everywhere.',
          es: 'Fluidez en conceptos matemáticos avanzados, la capacidad de moverse con flexibilidad entre distintas áreas de las matemáticas y la confianza en la resolución de problemas que se nota en todo.'
        })
      },
      {
        name: createTranslation({
          en: 'Algorithms',
          es: 'Algoritmos'
        }),
        description: createTranslation({
          en: "This track is for students who are already strong programmers and ready to compete at the highest level. The curriculum covers the data structures, algorithms and problem-solving strategies used in top programming olympiads — from segment trees and persistent data structures to graph theory, shortest path algorithms and network flow. You'll work through real olympiad problems under timed conditions, learn to read and analyse top-scoring solutions, and finish with a mock competition. By the end, you'll have the tools and the mindset to perform when it counts.",
          es: 'Esta ruta es para estudiantes que ya programan bien y están listos para competir al más alto nivel. El temario cubre las estructuras de datos, algoritmos y estrategias de resolución usadas en las principales olimpiadas de programación — desde árboles de segmentos y estructuras persistentes hasta teoría de grafos, algoritmos de caminos mínimos y flujo en redes. Resolverás problemas reales de olimpiadas a contrarreloj, aprenderás a leer y analizar las mejores soluciones y terminarás con una competición simulada. Al final tendrás las herramientas y la mentalidad para rendir cuando importa.'
        }),
        outcomes: createTranslation({
          en: 'A deep command of advanced algorithms and data structures, the ability to decompose complex problems under pressure, and real competitive programming experience.',
          es: 'Un dominio profundo de algoritmos y estructuras de datos avanzadas, la capacidad de descomponer problemas complejos bajo presión y experiencia real en programación competitiva.'
        })
      },
      {
        name: createTranslation({
          en: 'Artificial Intelligence',
          es: 'Inteligencia Artificial'
        }),
        description: createTranslation({
          en: "For students who already know Python and have some familiarity with AI concepts, this is where things get serious. You'll work with real datasets, train and evaluate machine learning models, and go hands-on with neural networks, computer vision, and model optimization. The track culminates in a group project where your team identifies a real-world problem and builds a working ML solution to present on the final day.",
          es: 'Para estudiantes que ya conocen Python y tienen alguna familiaridad con conceptos de IA, aquí es donde la cosa se pone seria. Trabajarás con conjuntos de datos reales, entrenarás y evaluarás modelos de aprendizaje automático y te meterás de lleno en redes neuronales, visión por computadora y optimización de modelos. La ruta culmina con un proyecto grupal en el que tu equipo identifica un problema real y construye una solución de ML funcional para presentar el último día.'
        }),
        outcomes: createTranslation({
          en: 'Practical experience across the full machine learning pipeline, exposure to computer vision and deep learning, and a group project that demonstrates what you can actually do.',
          es: 'Experiencia práctica en todo el flujo de aprendizaje automático, exposición a visión por computadora y aprendizaje profundo, y un proyecto grupal que demuestra lo que puedes hacer de verdad.'
        })
      }
    ] satisfies TrackItem[]
  } satisfies TrackGroup,
  fit: {
    title: createTranslation({
      en: "Not sure if it's the right camp?",
      es: '¿No estás seguro de si es el campamento adecuado?'
    }),
    lede: createTranslation({
      en: 'No prior experience, no clear passion, no plan needed — just an openness to try something that might surprise you. The camp is for kids who:',
      es: 'No hace falta experiencia previa, ni una pasión clara, ni un plan — solo apertura para probar algo que puede sorprenderte. El campamento es para chicos que:'
    }),
    items: [
      {
        text: createTranslation({
          en: 'Like figuring out how things work',
          es: 'Disfrutan entendiendo cómo funcionan las cosas'
        })
      },
      {
        text: createTranslation({
          en: 'Are curious about AI',
          es: 'Tienen curiosidad por la IA'
        })
      },
      {
        text: createTranslation({
          en: 'Want to meet peers from around the world',
          es: 'Quieren conocer a compañeros de todo el mundo'
        })
      },
      {
        text: createTranslation({
          en: 'Are ready for a summer that counts',
          es: 'Están listos para un verano que cuente'
        })
      }
    ] satisfies FitItem[]
  }
} as const;
