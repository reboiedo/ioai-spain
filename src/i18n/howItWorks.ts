import { createTranslation } from './types';

export const howItWorks = {
  eyebrow: createTranslation({
    en: "Program",
    es: "Programa"
  }),
  sectionTitle: createTranslation({
    en: "How Spain's AI Olympiad Works",
    es: "Cómo Funciona la Olimpiada de IA de España"
  }),
  sectionIntro: createTranslation({
    en: "Clear path from beginner to Team Spain. Three phases designed for progressive skill development",
    es: "Camino claro desde principiante hasta el Equipo España. Tres fases diseñadas para el desarrollo progresivo de habilidades"
  }),
  phases: {
    basic: {
      eyebrow: createTranslation({
        en: "Phase 1",
        es: "Fase 1"
      }),
      title: createTranslation({
        en: "Basic Cycle",
        es: "Ciclo Básico"
      }),
      intro: createTranslation({
        en: "No AI Experience? No Problem. Artificial intelligence may feel unfamiliar, but that's the point; you don't need prior experience to begin. The Basic Cycle introduces core AI ideas and applications through simple online tests. Feel free to explore resources while you participate; even using tools like ChatGPT is encouraged!",
        es: "¿Sin experiencia en IA? No hay problema. La inteligencia artificial puede parecer desconocida, pero ese es el punto; no necesitas experiencia previa para empezar. El Ciclo Básico introduce ideas y aplicaciones fundamentales de IA a través de pruebas simples en línea. ¡Siéntete libre de explorar recursos mientras participas; incluso se recomienda usar herramientas como ChatGPT!"
      })
    },
    preparatory: {
      eyebrow: createTranslation({
        en: "Phase 2",
        es: "Fase 2"
      }),
      title: createTranslation({
        en: "Preparatory Cycle",
        es: "Ciclo Preparatorio"
      }),
      intro: createTranslation({
        en: "The Preparatory Cycle develops practical AI skills through hands-on challenges—no programming experience required, though it helps. Full task details will be published by the end of 2025; until then, review the <a href=\"https://ioai-official.org/wp-content/uploads/2025/10/Syllabus.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">IOAI 2026 Syllabus</a> to get a head start.",
        es: "El Ciclo Preparatorio desarrolla habilidades prácticas de IA a través de desafíos prácticos—no se requiere experiencia en programación, aunque ayuda. Los detalles completos de las tareas se publicarán a finales de 2025; mientras tanto, revisa el <a href=\"https://ioai-official.org/wp-content/uploads/2025/10/Syllabus.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Programa IOAI 2026</a> para obtener ventaja."
      })
    },
    team: {
      eyebrow: createTranslation({
        en: "Phase 3",
        es: "Fase 3"
      }),
      title: createTranslation({
        en: "Team Spain Training & Competition",
        es: "Entrenamiento y Competición del Equipo España"
      }),
      intro: createTranslation({
        en: "Elite program for Spain's representatives. Intensive preparation leading to international competition in Abu Dhabi.",
        es: "Programa élite para los representantes de España. Preparación intensiva que lleva a la competición internacional en Abu Dhabi."
      })
    }
  },
  labels: {
    // Only keeping labels that are actually used in the Round component
    qualification: createTranslation({
      en: "Qualification",
      es: "Calificación"
    }),
    tbd: createTranslation({
      en: "TBD",
      es: "Por Definir"
    }),
    starts: createTranslation({
      en: "Starts",
      es: "Comienza"
    })
    // Note: Section headers like "Topics Covered", "Training Components", etc.
    // come directly from the markdown files as ## headers
  }
} as const;