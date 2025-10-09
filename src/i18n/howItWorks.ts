import { createTranslation } from './types';

export const howItWorks = {
  eyebrow: createTranslation({
    en: "Programme",
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
        en: "No AI experience? No problem. The early stages spark curiosity and introduce core AI concepts through accessible online tests. Students, teachers, and parents can all participate.",
        es: "¿Sin experiencia en IA? No hay problema. Las primeras etapas despiertan la curiosidad e introducen conceptos básicos de IA a través de pruebas en línea accesibles. Estudiantes, profesores y padres pueden participar."
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
        en: "High school students only. Develop practical AI skills through specialized training and real-world challenges.",
        es: "Solo estudiantes de secundaria. Desarrolla habilidades prácticas de IA a través de entrenamiento especializado y desafíos del mundo real."
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