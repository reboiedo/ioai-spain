import { createTranslation } from './types';

export const about = {
  eyebrow: createTranslation({
    en: "About",
    es: "Acerca de"
  }),
  sectionTitle: createTranslation({
    en: "About IOAI Spain",
    es: "Acerca de IOAI España"
  }),
  intro: createTranslation({
    en: "Spain's gateway to the International Olympiad in Artificial Intelligence. We connect talented high school students with the world's premier AI competition through expert training and national selection.",
    es: "La puerta de entrada de España a la Olimpiada Internacional de Inteligencia Artificial. Conectamos a estudiantes talentosos de secundaria con la competencia principal de IA del mundo a través de entrenamiento experto y selección nacional."
  }),
  ioai2026: {
    title: createTranslation({
      en: "IOAI 2026",
      es: "IOAI 2026"
    }),
    date: createTranslation({
      en: "August 2-8, 2026 in Abu Dhabi",
      es: "2-8 de agosto de 2026 en Abu Dabi"
    }),
    description: createTranslation({
      en: "The global competition bringing together the brightest high school minds to tackle cutting-edge AI challenges. IOAI sets the Olympic standard for young AI talent worldwide.",
      es: "La competencia global que reúne a las mentes más brillantes de secundaria para abordar desafíos de IA de vanguardia. IOAI establece el estándar olímpico para jóvenes talentos de IA en todo el mundo."
    })
  },
  harbourSpace: {
    title: createTranslation({
      en: "Harbour.Space",
      es: "Harbour.Space"
    }),
    subtitle: createTranslation({
      en: "Official IOAI accreditation for Spain",
      es: "Acreditación oficial de IOAI para España"
    }),
    description: createTranslation({
      en: "As the organization authorized by IOAI, Harbour.Space is solely responsible for selecting and preparing Spain's national teams with world-class faculty.",
      es: "Como la organización autorizada por IOAI, Harbour.Space es la única responsable de seleccionar y preparar los equipos nacionales de España con profesorado de clase mundial."
    })
  }
} as const;