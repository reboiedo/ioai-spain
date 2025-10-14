import { hero } from './hero';
import { meta } from './meta';
import { ui } from './ui';
import { faq } from './faq';
import { howItWorks } from './howItWorks';
import { about } from './about';
import { eligibility } from './eligibility';
import { registration } from './registration';
import { whyJoin } from './whyJoin';
import { sponsors } from './sponsors';
import { finalCTA } from './finalCTA';
import { banner } from './banner';
import { tenerifeCamp } from './tenerifeCamp';
import type { Language } from './types';
import { getTranslation } from './types';

export const translations = {
  hero,
  meta,
  ui,
  faq,
  howItWorks,
  about,
  eligibility,
  registration,
  whyJoin,
  sponsors,
  finalCTA,
  banner,
  tenerifeCamp
} as const;

export function useTranslations(locale: Language | undefined) {
  return {
    hero: {
      eyebrow: getTranslation(hero.eyebrow, locale),
      title: getTranslation(hero.title, locale),
      subtitle: getTranslation(hero.subtitle, locale),
      trainingStarts: getTranslation(hero.trainingStarts, locale),
      ctaUrl: getTranslation(hero.ctaUrl, locale)
    },
    meta: {
      title: getTranslation(meta.title, locale),
      description: getTranslation(meta.description, locale),
      organizationName: getTranslation(meta.organizationName, locale)
    },
    ui: {
      nav: {
        languageLabel: getTranslation(ui.nav.languageLabel, locale),
        selectLanguage: getTranslation(ui.nav.selectLanguage, locale),
        joinNow: getTranslation(ui.nav.joinNow, locale),
        joinNowUrl: getTranslation(ui.nav.joinNowUrl, locale),
        aboutIOAI: getTranslation(ui.nav.aboutIOAI, locale),
        whyJoin: getTranslation(ui.nav.whyJoin, locale),
        programme: getTranslation(ui.nav.programme, locale),
        eligibility: getTranslation(ui.nav.eligibility, locale),
        faq: getTranslation(ui.nav.faq, locale)
      },
      common: {
        learnMore: getTranslation(ui.common.learnMore, locale),
        apply: getTranslation(ui.common.apply, locale),
        joinNow: getTranslation(ui.common.joinNow, locale),
        getStarted: getTranslation(ui.common.getStarted, locale),
        register: getTranslation(ui.common.register, locale),
        comingSoon: getTranslation(ui.common.comingSoon, locale)
      }
    },
    faq: {
      eyebrow: getTranslation(faq.eyebrow, locale),
      sectionTitle: getTranslation(faq.sectionTitle, locale),
      viewAll: getTranslation(faq.viewAll, locale),
      expandAnswer: getTranslation(faq.expandAnswer, locale),
      categories: {
        eligibility: getTranslation(faq.categories.eligibility, locale),
        process: getTranslation(faq.categories.process, locale),
        requirements: getTranslation(faq.categories.requirements, locale),
        contact: getTranslation(faq.categories.contact, locale),
        general: getTranslation(faq.categories.general, locale)
      }
    },
    howItWorks: {
      eyebrow: getTranslation(howItWorks.eyebrow, locale),
      sectionTitle: getTranslation(howItWorks.sectionTitle, locale),
      sectionIntro: getTranslation(howItWorks.sectionIntro, locale),
      phases: {
        basic: {
          eyebrow: getTranslation(howItWorks.phases.basic.eyebrow, locale),
          title: getTranslation(howItWorks.phases.basic.title, locale),
          intro: getTranslation(howItWorks.phases.basic.intro, locale)
        },
        preparatory: {
          eyebrow: getTranslation(howItWorks.phases.preparatory.eyebrow, locale),
          title: getTranslation(howItWorks.phases.preparatory.title, locale),
          intro: getTranslation(howItWorks.phases.preparatory.intro, locale)
        },
        team: {
          eyebrow: getTranslation(howItWorks.phases.team.eyebrow, locale),
          title: getTranslation(howItWorks.phases.team.title, locale),
          intro: getTranslation(howItWorks.phases.team.intro, locale)
        }
      },
      labels: {
        qualification: getTranslation(howItWorks.labels.qualification, locale),
        tbd: getTranslation(howItWorks.labels.tbd, locale),
        starts: getTranslation(howItWorks.labels.starts, locale)
      }
    },
    about: {
      eyebrow: getTranslation(about.eyebrow, locale),
      sectionTitle: getTranslation(about.sectionTitle, locale),
      intro: getTranslation(about.intro, locale),
      ioai2026: {
        title: getTranslation(about.ioai2026.title, locale),
        date: getTranslation(about.ioai2026.date, locale),
        description: getTranslation(about.ioai2026.description, locale)
      },
      harbourSpace: {
        title: getTranslation(about.harbourSpace.title, locale),
        subtitle: getTranslation(about.harbourSpace.subtitle, locale),
        description: getTranslation(about.harbourSpace.description, locale)
      }
    },
    eligibility: {
      eyebrow: getTranslation(eligibility.eyebrow, locale),
      sectionTitle: getTranslation(eligibility.sectionTitle, locale),
      intro: getTranslation(eligibility.intro, locale),
      criteria: {
        point1: getTranslation(eligibility.criteria.point1, locale),
        point2: getTranslation(eligibility.criteria.point2, locale),
        point3: getTranslation(eligibility.criteria.point3, locale)
      },
      joinButton: getTranslation(eligibility.joinButton, locale),
      joinButtonUrl: getTranslation(eligibility.joinButtonUrl, locale)
    },
    registration: {
      meta: {
        title: getTranslation(registration.meta.title, locale),
        description: getTranslation(registration.meta.description, locale)
      },
      title: getTranslation(registration.title, locale),
      subtitle: getTranslation(registration.subtitle, locale),
      sectionTitle: getTranslation(registration.sectionTitle, locale),
      fields: {
        fullName: {
          label: getTranslation(registration.fields.fullName.label, locale),
          placeholder: getTranslation(registration.fields.fullName.placeholder, locale)
        },
        schoolName: {
          label: getTranslation(registration.fields.schoolName.label, locale),
          placeholder: getTranslation(registration.fields.schoolName.placeholder, locale)
        },
        role: {
          label: getTranslation(registration.fields.role.label, locale),
          placeholder: getTranslation(registration.fields.role.placeholder, locale),
          options: {
            student: getTranslation(registration.fields.role.options.student, locale),
            teacher: getTranslation(registration.fields.role.options.teacher, locale),
            parent: getTranslation(registration.fields.role.options.parent, locale),
            other: getTranslation(registration.fields.role.options.other, locale)
          }
        },
        email: {
          label: getTranslation(registration.fields.email.label, locale),
          placeholder: getTranslation(registration.fields.email.placeholder, locale)
        },
        consent: {
          label: getTranslation(registration.fields.consent.label, locale)
        }
      },
      submitButton: getTranslation(registration.submitButton, locale),
      confirmationMessage: getTranslation(registration.confirmationMessage, locale),
      successMessage: getTranslation(registration.successMessage, locale),
      errorMessage: getTranslation(registration.errorMessage, locale)
    },
    whyJoin: {
      eyebrow: getTranslation(whyJoin.eyebrow, locale),
      sectionTitle: getTranslation(whyJoin.sectionTitle, locale),
      intro: getTranslation(whyJoin.intro, locale),
      benefits: {
        represent: {
          title: getTranslation(whyJoin.benefits.represent.title, locale),
          description: getTranslation(whyJoin.benefits.represent.description, locale)
        },
        skills: {
          title: getTranslation(whyJoin.benefits.skills.title, locale),
          description: getTranslation(whyJoin.benefits.skills.description, locale)
        },
        standOut: {
          title: getTranslation(whyJoin.benefits.standOut.title, locale),
          description: getTranslation(whyJoin.benefits.standOut.description, locale)
        },
        community: {
          title: getTranslation(whyJoin.benefits.community.title, locale),
          description: getTranslation(whyJoin.benefits.community.description, locale)
        }
      }
    },
    sponsors: {
      eyebrow: getTranslation(sponsors.eyebrow, locale),
      sectionTitle: getTranslation(sponsors.sectionTitle, locale),
      intro: getTranslation(sponsors.intro, locale),
      contactEmail: getTranslation(sponsors.contactEmail, locale)
    },
    finalCTA: {
      title: getTranslation(finalCTA.title, locale),
      ctaButton: getTranslation(finalCTA.ctaButton, locale),
      ctaUrl: getTranslation(finalCTA.ctaUrl, locale)
    },
    banner: {
      title: getTranslation(banner.title, locale),
      description: getTranslation(banner.description, locale),
      downloadButton: getTranslation(banner.downloadButton, locale),
      downloadUrl: getTranslation(banner.downloadUrl, locale)
    },
    tenerifeCamp: {
      meta: {
        title: getTranslation(tenerifeCamp.meta.title, locale),
        description: getTranslation(tenerifeCamp.meta.description, locale)
      },
      hero: {
        eyebrow: getTranslation(tenerifeCamp.hero.eyebrow, locale),
        title: getTranslation(tenerifeCamp.hero.title, locale),
        subtitle: getTranslation(tenerifeCamp.hero.subtitle, locale),
        ctaButton: getTranslation(tenerifeCamp.hero.ctaButton, locale),
        ctaUrl: getTranslation(tenerifeCamp.hero.ctaUrl, locale),
        dates: getTranslation(tenerifeCamp.hero.dates, locale),
        location: getTranslation(tenerifeCamp.hero.location, locale)
      },
      about: {
        eyebrow: getTranslation(tenerifeCamp.about.eyebrow, locale),
        title: getTranslation(tenerifeCamp.about.title, locale),
        description: getTranslation(tenerifeCamp.about.description, locale)
      },
      courses: {
        eyebrow: getTranslation(tenerifeCamp.courses.eyebrow, locale),
        sectionTitle: getTranslation(tenerifeCamp.courses.sectionTitle, locale),
        viewAll: getTranslation(tenerifeCamp.courses.viewAll, locale)
      },
      instructors: {
        eyebrow: getTranslation(tenerifeCamp.instructors.eyebrow, locale),
        sectionTitle: getTranslation(tenerifeCamp.instructors.sectionTitle, locale),
        description: getTranslation(tenerifeCamp.instructors.description, locale)
      },
      schedule: {
        eyebrow: getTranslation(tenerifeCamp.schedule.eyebrow, locale),
        sectionTitle: getTranslation(tenerifeCamp.schedule.sectionTitle, locale),
        description: getTranslation(tenerifeCamp.schedule.description, locale)
      },
      faq: {
        eyebrow: getTranslation(tenerifeCamp.faq.eyebrow, locale),
        sectionTitle: getTranslation(tenerifeCamp.faq.sectionTitle, locale),
        viewAll: getTranslation(tenerifeCamp.faq.viewAll, locale)
      },
      features: {
        handson: {
          title: getTranslation(tenerifeCamp.features.handson.title, locale),
          description: getTranslation(tenerifeCamp.features.handson.description, locale)
        },
        mentorship: {
          title: getTranslation(tenerifeCamp.features.mentorship.title, locale),
          description: getTranslation(tenerifeCamp.features.mentorship.description, locale)
        },
        community: {
          title: getTranslation(tenerifeCamp.features.community.title, locale),
          description: getTranslation(tenerifeCamp.features.community.description, locale)
        },
        location: {
          title: getTranslation(tenerifeCamp.features.location.title, locale),
          description: getTranslation(tenerifeCamp.features.location.description, locale)
        }
      },
      cta: {
        eyebrow: getTranslation(tenerifeCamp.cta.eyebrow, locale),
        title: getTranslation(tenerifeCamp.cta.title, locale),
        description: getTranslation(tenerifeCamp.cta.description, locale),
        button: getTranslation(tenerifeCamp.cta.button, locale),
        buttonUrl: getTranslation(tenerifeCamp.cta.buttonUrl, locale)
      },
      logistics: {
        eyebrow: getTranslation(tenerifeCamp.logistics.eyebrow, locale),
        sectionTitle: getTranslation(tenerifeCamp.logistics.sectionTitle, locale),
        accommodation: {
          title: getTranslation(tenerifeCamp.logistics.accommodation.title, locale),
          description: getTranslation(tenerifeCamp.logistics.accommodation.description, locale)
        },
        meals: {
          title: getTranslation(tenerifeCamp.logistics.meals.title, locale),
          description: getTranslation(tenerifeCamp.logistics.meals.description, locale)
        },
        activities: {
          title: getTranslation(tenerifeCamp.logistics.activities.title, locale),
          description: getTranslation(tenerifeCamp.logistics.activities.description, locale)
        }
      },
      common: {
        learnMore: getTranslation(tenerifeCamp.common.learnMore, locale),
        register: getTranslation(tenerifeCamp.common.register, locale),
        viewDetails: getTranslation(tenerifeCamp.common.viewDetails, locale),
        download: getTranslation(tenerifeCamp.common.download, locale),
        brochure: getTranslation(tenerifeCamp.common.brochure, locale)
      }
    }
  };
}

export type { Language } from './types';
export { LANGUAGES } from './types';