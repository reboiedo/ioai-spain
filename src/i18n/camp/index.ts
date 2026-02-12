import { hero } from './hero';
import { courses } from './courses';
import { experience } from './experience';
import { safety } from './safety';
import { schedule } from './schedule';
import { pricing } from './pricing';
import { faq } from './faq';
import { partners } from './partners';
import { footer } from './footer';
import { tenerifeCamp } from '../tenerifeCamp';
import type { Language } from '../types';
import { getTranslation } from '../types';

export const campTranslations = {
  hero,
  courses,
  experience,
  safety,
  schedule,
  pricing,
  faq,
  partners,
  footer
} as const;

export function useCampTranslations(locale: Language | undefined) {
  return {
    hero: {
      mainTitle: getTranslation(hero.mainTitle, locale),
      dateSubtitle: getTranslation(hero.dateSubtitle, locale),
      tagline: getTranslation(hero.tagline, locale),
      description: getTranslation(hero.description, locale),
      paragraph: getTranslation(hero.paragraph, locale),
      poweredBy: getTranslation(hero.poweredBy, locale)
    },
    courses: {
      beginnerTitle: getTranslation(courses.beginnerTitle, locale),
      advancedTitle: getTranslation(courses.advancedTitle, locale),
      ioaiTitle: getTranslation(courses.ioaiTitle, locale),
      tapToLearnMore: getTranslation(courses.tapToLearnMore, locale),
      close: getTranslation(courses.close, locale),
      beginner: {
        math: {
          title: getTranslation(courses.beginner.math.title, locale),
          description: getTranslation(courses.beginner.math.description, locale)
        },
        gameDev: {
          title: getTranslation(courses.beginner.gameDev.title, locale),
          description: getTranslation(courses.beginner.gameDev.description, locale)
        },
        python: {
          title: getTranslation(courses.beginner.python.title, locale),
          description: getTranslation(courses.beginner.python.description, locale)
        },
        design: {
          title: getTranslation(courses.beginner.design.title, locale),
          description: getTranslation(courses.beginner.design.description, locale)
        },
        ai: {
          title: getTranslation(courses.beginner.ai.title, locale),
          description: getTranslation(courses.beginner.ai.description, locale)
        }
      },
      advanced: {
        math: {
          title: getTranslation(courses.advanced.math.title, locale),
          description: getTranslation(courses.advanced.math.description, locale)
        },
        algorithms: {
          title: getTranslation(courses.advanced.algorithms.title, locale),
          description: getTranslation(courses.advanced.algorithms.description, locale)
        },
        ai: {
          title: getTranslation(courses.advanced.ai.title, locale),
          description: getTranslation(courses.advanced.ai.description, locale)
        }
      },
      ioai: {
        title: getTranslation(courses.ioai.title, locale),
        description: getTranslation(courses.ioai.description, locale)
      }
    },
    experience: {
      heading: getTranslation(experience.heading, locale),
      paragraph1: getTranslation(experience.paragraph1, locale),
      paragraph2: getTranslation(experience.paragraph2, locale)
    },
    safety: {
      heading: getTranslation(safety.heading, locale),
      paragraph: getTranslation(safety.paragraph, locale)
    },
    schedule: {
      heading: getTranslation(schedule.heading, locale),
      items: schedule.items.map(item => ({
        time: getTranslation(item.time, locale),
        title: getTranslation(item.title, locale),
        description: getTranslation(item.description, locale)
      }))
    },
    pricing: {
      heading: getTranslation(pricing.heading, locale),
      withoutAccommodation: {
        label: getTranslation(pricing.withoutAccommodation.label, locale),
        price: getTranslation(pricing.withoutAccommodation.price, locale)
      },
      withAccommodation: {
        label: getTranslation(pricing.withAccommodation.label, locale),
        price: getTranslation(pricing.withAccommodation.price, locale)
      },
      bookButton: getTranslation(pricing.bookButton, locale),
      disclaimer: getTranslation(pricing.disclaimer, locale)
    },
    faq: {
      heading: getTranslation(faq.heading, locale),
      items: faq.items.map(item => ({
        question: getTranslation(item.question, locale),
        answer: getTranslation(item.answer, locale)
      }))
    },
    partners: {
      heading: getTranslation(partners.heading, locale)
    },
    footer: {
      brand: getTranslation(footer.brand, locale),
      description: getTranslation(footer.description, locale),
      visitLabel: getTranslation(footer.visitLabel, locale),
      website: getTranslation(footer.website, locale),
      contactHeading: getTranslation(footer.contactHeading, locale),
      contactText: getTranslation(footer.contactText, locale),
      emailLabel: getTranslation(footer.emailLabel, locale),
      email: getTranslation(footer.email, locale),
      callLabel: getTranslation(footer.callLabel, locale),
      phone: getTranslation(footer.phone, locale),
      copyright: getTranslation(footer.copyright, locale),
      privacyPolicy: getTranslation(footer.privacyPolicy, locale)
    },
    tenerifeCamp: {
      courses: {
        sectionTitle: getTranslation(tenerifeCamp.courses.sectionTitle, locale),
        description: getTranslation(tenerifeCamp.courses.description, locale)
      }
    }
  };
}

export type { Language } from '../types';
export { LANGUAGES } from '../types';
