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
        en: 'In the exciting world of math at our summer camp you will learn how to distinguish truth from falsehood, make scientific predictions, and present convincing arguments. No previous mathematical experience is required, only a willingness to explore and discover new things. Join us and uncover the many hidden wonders of math!',
        es: 'En el emocionante mundo de las matemáticas en nuestro campamento de verano aprenderás cómo distinguir la verdad de la falsedad, hacer predicciones científicas y presentar argumentos convincentes. No se requiere experiencia matemática previa, solo ganas de explorar y descubrir cosas nuevas. ¡Únete a nosotros y descubre las muchas maravillas ocultas de las matemáticas!'
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
        en: 'The summer school program on AI provides a theoretical foundation and hands-on experience on recent advances in Machine Learning, Deep Learning, and Language modeling fields. It includes a crash course on AI, a robotics workshop, GPT-like solutions adaptation',
        es: 'El programa de escuela de verano sobre IA proporciona una base teórica y experiencia práctica en los avances recientes en los campos de Aprendizaje Automático, Aprendizaje Profundo y modelado de lenguaje. Incluye un curso intensivo sobre IA, un taller de robótica y adaptación de soluciones similares a GPT'
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
        en: 'In the exhilarating world of advanced math at our summer camp, you will dive deep into problem-solving, abstraction, and creative reasoning. Explore topics from combinatorics, number theory, and geometry to modern applications in algorithms and artificial intelligence. You\'ll learn to construct rigorous proofs, tackle Olympiad-style challenges, and think like a true mathematician. A solid foundation and curiosity for deeper exploration are all you need. Join us and push the boundaries of what you thought possible in mathematics!',
        es: 'En el emocionante mundo de las matemáticas avanzadas en nuestro campamento de verano, te sumergirás profundamente en la resolución de problemas, la abstracción y el razonamiento creativo. Explora temas desde combinatoria, teoría de números y geometría hasta aplicaciones modernas en algoritmos e inteligencia artificial. Aprenderás a construir pruebas rigurosas, abordar desafíos estilo Olimpiada y pensar como un verdadero matemático. Una base sólida y curiosidad por una exploración más profunda es todo lo que necesitas. ¡Únete a nosotros y empuja los límites de lo que creías posible en matemáticas!'
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
      en: 'IOAI Spain - A dedicated track will focus on training the national team for the International Olympiad in Artificial Intelligence (IOAI) — a key milestone in the country\'s preparation for the global stage.',
      es: 'IOAI España - Un programa dedicado se enfocará en entrenar al equipo nacional para la Olimpiada Internacional de Inteligencia Artificial (IOAI) — un hito clave en la preparación del país para el escenario global.'
    })
  }
} as const;
