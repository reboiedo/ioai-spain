import { createTranslation } from './types';

export const whyJoin = {
  eyebrow: createTranslation({
    en: 'Why Join',
    es: 'Por Qué Unirse'
  }),
  sectionTitle: createTranslation({
    en: "You're Entering AI at a Historic Breakthrough Moment.",
    es: "Estás Entrando en la IA en un Momento Histórico de Avance."
  }),
  intro: createTranslation({
    en: "AI just hit gold-medal performance on the world's toughest coding challenges, surpassing top human teams in what experts call a watershed moment toward AGI. This is your opportunity to be part of the next wave of breakthroughs.",
    es: "La IA acaba de alcanzar un rendimiento de medalla de oro en los desafíos de programación más difíciles del mundo, superando a los mejores equipos humanos en lo que los expertos llaman un momento decisivo hacia la AGI. Esta es tu oportunidad de ser parte de la próxima ola de avances."
  }),
  benefits: {
    represent: {
      title: createTranslation({
        en: 'Represent Spain Internationally',
        es: 'Representa a España Internacionalmente'
      }),
      description: createTranslation({
        en: 'Be among the first Spanish students to compete globally.',
        es: 'Sé uno de los primeros estudiantes españoles en competir globalmente.'
      })
    },
    skills: {
      title: createTranslation({
        en: 'Master Cutting-Edge Skills',
        es: 'Domina Habilidades de Vanguardia'
      }),
      description: createTranslation({
        en: 'Develop algorithmic thinking, AI fluency, and problem-solving abilities that define the future.',
        es: 'Desarrolla pensamiento algorítmico, fluidez en IA y habilidades de resolución de problemas que definen el futuro.'
      })
    },
    standOut: {
      title: createTranslation({
        en: 'Stand Out to Universities & Companies',
        es: 'Destácate ante Universidades y Empresas'
      }),
      description: createTranslation({
        en: 'Gain recognition from leading labs, universities, and startups watching this space closely.',
        es: 'Obtén reconocimiento de laboratorios líderes, universidades y startups que siguen de cerca este espacio.'
      })
    },
    community: {
      title: createTranslation({
        en: 'Join the Builder Community',
        es: 'Únete a la Comunidad de Constructores'
      }),
      description: createTranslation({
        en: 'Connect with like-minded innovators who are shaping what comes next in AI.',
        es: 'Conecta con innovadores afines que están dando forma a lo que viene después en IA.'
      })
    }
  }
} as const;