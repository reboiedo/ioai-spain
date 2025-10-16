import { createTranslation } from '../types';

export const courses = {
  // Section titles
  beginnerTitle: createTranslation({
    en: 'Beginner Level',
    es: 'Nivel Principiante'
  }),
  advancedTitle: createTranslation({
    en: 'Advanced Level',
    es: 'Nivel Avanzado'
  }),
  ioaiTitle: createTranslation({
    en: 'IOAI Spain Training',
    es: 'Entrenamiento IOAI España'
  }),

  // Hint text
  tapToLearnMore: createTranslation({
    en: 'Tap to learn more',
    es: 'Toca para saber más'
  }),
  close: createTranslation({
    en: 'Close',
    es: 'Cerrar'
  }),

  // Beginner courses
  beginner: {
    math: {
      title: createTranslation({
        en: 'Mathematics',
        es: 'Matemáticas'
      }),
      description: createTranslation({
        en: 'Learn how to distinguish truth from falsehood, make scientific predictions, and present convincing arguments.',
        es: 'Aprende cómo distinguir la verdad de la falsedad, hacer predicciones científicas y presentar argumentos convincentes.'
      })
    },
    gameDev: {
      title: createTranslation({
        en: 'Game development',
        es: 'Desarrollo de Juegos'
      }),
      description: createTranslation({
        en: 'Learn game design fundamentals: storyboarding, and basic programming. Discover gameplay mechanics and user interaction to create your own games.',
        es: 'Aprende los fundamentos del diseño de juegos: storyboarding y programación básica. Descubre las mecánicas de juego y la interacción del usuario para crear tus propios juegos.'
      })
    },
    python: {
      title: createTranslation({
        en: 'Python for Beginners',
        es: 'Python para Principiantes'
      }),
      description: createTranslation({
        en: 'Learn Python programming basics: data types, control structures, functions, and libraries. Gain hands-on experience building simple applications and solving problems.',
        es: 'Aprende los conceptos básicos de programación en Python: tipos de datos, estructuras de control, funciones y bibliotecas. Obtén experiencia práctica construyendo aplicaciones simples y resolviendo problemas.'
      })
    },
    design: {
      title: createTranslation({
        en: 'Design Track',
        es: 'Curso de Diseño'
      }),
      description: createTranslation({
        en: 'Learn the basics of design, including colour theory and layout, to create attractive and functional designs. This course boosts creativity and teaches effective design principles.',
        es: 'Aprende los conceptos básicos del diseño, incluyendo teoría del color y maquetación, para crear diseños atractivos y funcionales. Este curso potencia la creatividad y enseña principios de diseño efectivos.'
      })
    },
    ai: {
      title: createTranslation({
        en: 'AI',
        es: 'IA'
      }),
      description: createTranslation({
        en: 'Learn basic AI concepts, pattern recognition, history of AI, search mechanisms and information retrieval, ethics and responsible use of AI. Maths foundations are required as well as problem-solving skills.',
        es: 'Aprende conceptos básicos de IA, reconocimiento de patrones, historia de la IA, mecanismos de búsqueda y recuperación de información, ética y uso responsable de la IA. Se requieren fundamentos matemáticos así como habilidades de resolución de problemas.'
      })
    }
  },

  // Advanced courses
  advanced: {
    math: {
      title: createTranslation({
        en: 'Mathematics',
        es: 'Matemáticas'
      }),
      description: createTranslation({
        en: 'Learn topics from combinatorics, number theory, and geometry to modern applications in algorithms and artificial intelligence; construct rigorous proofs, tackle Olympiad-style challenges, and develop advanced mathematical reasoning.',
        es: 'Aprende temas desde combinatoria, teoría de números y geometría hasta aplicaciones modernas en algoritmos e inteligencia artificial; construye pruebas rigurosas, aborda desafíos estilo Olimpiada y desarrolla razonamiento matemático avanzado.'
      })
    },
    algorithms: {
      title: createTranslation({
        en: 'Introduction to Algorithms',
        es: 'Introducción a Algoritmos'
      }),
      description: createTranslation({
        en: 'Learn the basics of algorithms to solve problems more efficiently. Discover simple methods to organize, analyze, and execute tasks step-by-step.',
        es: 'Aprende los conceptos básicos de algoritmos para resolver problemas de manera más eficiente. Descubre métodos simples para organizar, analizar y ejecutar tareas paso a paso.'
      })
    },
    ai: {
      title: createTranslation({
        en: 'AI',
        es: 'IA'
      }),
      description: createTranslation({
        en: 'The summer school program on AI provides a theoretical foundation and hands-on experience on recent advances in Machine Learning, Deep Learning, and Language modeling fields. It includes a crash course on AI, a robotics workshop, GPT-like solutions adaptation',
        es: 'El programa de escuela de verano sobre IA proporciona una base teórica y experiencia práctica en los avances recientes en los campos de Aprendizaje Automático, Aprendizaje Profundo y modelado de lenguaje. Incluye un curso intensivo sobre IA, un taller de robótica y adaptación de soluciones similares a GPT'
      })
    }
  },

  // IOAI Training
  ioai: {
    title: createTranslation({
      en: 'IOAI Training',
      es: 'Entrenamiento IOAI'
    }),
    description: createTranslation({
      en: 'Comprehensive preparation of the Team Spain selected through the previous four Rounds with experienced faculty to master IOAI competition standards.',
      es: 'Preparación completa del Equipo España seleccionado a través de las cuatro rondas previas con profesorado experimentado para dominar los estándares de competición IOAI.'
    })
  }
} as const;
