import { meta } from './meta';
import { nav } from './nav';
import { footer } from './footer';
import { apply } from './apply';
import { venue } from './venue';
import { pricing } from './pricing';
import { hero } from './hero';
import { tracks } from './tracks';
import { safety } from './safety';
import { faq } from './faq';
import { story } from './story';
import { team } from './team';
import { dayInLife } from './dayInLife';
import { testimonials } from './testimonials';
import { activities } from './activities';
import type { Language } from '../types';
import { getTranslation } from '../types';

export const tenerifeTranslations = {
  meta,
  nav,
  footer,
  apply,
  venue,
  pricing,
  hero,
  tracks,
  safety,
  faq,
  story,
  team,
  dayInLife,
  testimonials,
  activities
} as const;

export function useTenerifeTranslations(locale: Language | undefined) {
  return {
    meta: {
      title: getTranslation(meta.title, locale),
      description: getTranslation(meta.description, locale),
      ogImage: getTranslation(meta.ogImage, locale),
      canonical: getTranslation(meta.canonical, locale)
    },
    nav: {
      moreInfoLabel: getTranslation(nav.moreInfoLabel, locale),
      moreInfoHref: getTranslation(nav.moreInfoHref, locale),
      registerLabel: getTranslation(nav.registerLabel, locale),
      registerUrl: getTranslation(nav.registerUrl, locale)
    },
    footer: {
      copyright: getTranslation(footer.copyright, locale)
    },
    apply: {
      title: getTranslation(apply.title, locale),
      copy: getTranslation(apply.copy, locale),
      href: getTranslation(apply.href, locale),
      brochureHref: getTranslation(apply.brochureHref, locale)
    },
    venue: {
      title: getTranslation(venue.title, locale),
      copy: getTranslation(venue.copy, locale),
      mapTitle: getTranslation(venue.mapTitle, locale),
      photoSlots: venue.photoSlots.map((slot) => ({
        key: slot.key,
        alt: getTranslation(slot.alt, locale),
        aspect: slot.aspect
      }))
    },
    pricing: {
      eyebrow: getTranslation(pricing.eyebrow, locale),
      title: getTranslation(pricing.title, locale),
      copy: getTranslation(pricing.copy, locale),
      tiers: pricing.tiers.map((tier) => ({
        variant: tier.variant,
        headline: getTranslation(tier.headline, locale),
        price: getTranslation(tier.price, locale),
        features: getTranslation(tier.features, locale),
        cta: {
          text: getTranslation(tier.cta.text, locale),
          href: getTranslation(tier.cta.href, locale)
        }
      }))
    },
    hero: {
      title: getTranslation(hero.title, locale),
      titleStacked: {
        line1: getTranslation(hero.titleStacked.line1, locale),
        line2: getTranslation(hero.titleStacked.line2, locale)
      },
      dateEyebrow: getTranslation(hero.dateEyebrow, locale),
      ledeLine: getTranslation(hero.ledeLine, locale)
    },
    tracks: {
      eyebrow: getTranslation(tracks.eyebrow, locale),
      title: getTranslation(tracks.title, locale),
      copy: getTranslation(tracks.copy, locale),
      beginner: {
        title: getTranslation(tracks.beginner.title, locale),
        description: getTranslation(tracks.beginner.description, locale),
        items: tracks.beginner.items.map((item) => ({
          name: getTranslation(item.name, locale),
          description: getTranslation(item.description, locale),
          outcomes: getTranslation(item.outcomes, locale)
        }))
      },
      advanced: {
        title: getTranslation(tracks.advanced.title, locale),
        description: getTranslation(tracks.advanced.description, locale),
        items: tracks.advanced.items.map((item) => ({
          name: getTranslation(item.name, locale),
          description: getTranslation(item.description, locale),
          outcomes: getTranslation(item.outcomes, locale)
        }))
      },
      fit: {
        title: getTranslation(tracks.fit.title, locale),
        lede: getTranslation(tracks.fit.lede, locale),
        items: tracks.fit.items.map((item) => ({
          text: getTranslation(item.text, locale)
        }))
      }
    },
    safety: {
      titleLine1: getTranslation(safety.titleLine1, locale),
      titleLine2: getTranslation(safety.titleLine2, locale),
      titleEyebrow: getTranslation(safety.titleEyebrow, locale),
      lede: getTranslation(safety.lede, locale),
      photoAlt: getTranslation(safety.photoAlt, locale),
      pillars: safety.pillars.map((p) => ({
        title: getTranslation(p.title, locale),
        description: getTranslation(p.description, locale)
      })),
      supervisorsTitle: getTranslation(safety.supervisorsTitle, locale),
      supervisorsCopy: getTranslation(safety.supervisorsCopy, locale),
      supervisors: safety.supervisors.map((s) => ({
        name: s.name,
        initials: s.initials,
        imageKey: s.imageKey,
        role: getTranslation(s.role, locale)
      }))
    },
    faq: {
      eyebrow: getTranslation(faq.eyebrow, locale),
      title: getTranslation(faq.title, locale),
      contactLead: getTranslation(faq.contactLead, locale),
      email: {
        label: getTranslation(faq.email.label, locale),
        href: getTranslation(faq.email.href, locale)
      },
      phone: {
        label: getTranslation(faq.phone.label, locale),
        href: getTranslation(faq.phone.href, locale)
      },
      items: faq.items.map((item) => ({
        question: getTranslation(item.question, locale),
        answer: getTranslation(item.answer, locale)
      }))
    },
    story: {
      titleLine1: getTranslation(story.titleLine1, locale),
      titleLine2: getTranslation(story.titleLine2, locale),
      lede: getTranslation(story.lede, locale),
      poweredBy: getTranslation(story.poweredBy, locale),
      videoAriaLabel: getTranslation(story.videoAriaLabel, locale),
      sponsors: story.sponsors,
      items: story.items.map((item) => ({
        label: getTranslation(item.label, locale),
        body: getTranslation(item.body, locale)
      })),
      facts: story.facts.map((f) => ({
        label: getTranslation(f.label, locale),
        value: getTranslation(f.value, locale)
      }))
    },
    team: {
      eyebrow: getTranslation(team.eyebrow, locale),
      title: getTranslation(team.title, locale),
      copy: getTranslation(team.copy, locale),
      members: team.members.map((m) => ({
        initials: m.initials,
        name: m.name,
        imageKey: m.imageKey,
        role: getTranslation(m.role, locale),
        bio: getTranslation(m.bio, locale)
      }))
    },
    dayInLife: {
      titleLine1: getTranslation(dayInLife.titleLine1, locale),
      titleLine2: getTranslation(dayInLife.titleLine2, locale),
      titleMobile: getTranslation(dayInLife.titleMobile, locale),
      intro: getTranslation(dayInLife.intro, locale),
      slots: dayInLife.slots.map((s) => ({
        time: getTranslation(s.time, locale),
        title: getTranslation(s.title, locale),
        description: getTranslation(s.description, locale)
      }))
    },
    testimonials: {
      title: getTranslation(testimonials.title, locale),
      portraitAltPrefix: getTranslation(testimonials.portraitAltPrefix, locale),
      prevAriaLabel: getTranslation(testimonials.prevAriaLabel, locale),
      nextAriaLabel: getTranslation(testimonials.nextAriaLabel, locale),
      prevLabel: getTranslation(testimonials.prevLabel, locale),
      nextLabel: getTranslation(testimonials.nextLabel, locale),
      taglineLine1: getTranslation(testimonials.taglineLine1, locale),
      taglineLine2: getTranslation(testimonials.taglineLine2, locale),
      items: testimonials.items.map((t) => ({
        imageKey: t.imageKey,
        name: t.name,
        quote: getTranslation(t.quote, locale),
        role: getTranslation(t.role, locale),
        context: getTranslation(t.context, locale)
      }))
    },
    activities: {
      eyebrow: getTranslation(activities.eyebrow, locale),
      title: getTranslation(activities.title, locale),
      intro: getTranslation(activities.intro, locale),
      dayLabel: getTranslation(activities.dayLabel, locale),
      prevAriaLabel: getTranslation(activities.prevAriaLabel, locale),
      nextAriaLabel: getTranslation(activities.nextAriaLabel, locale),
      cardTapHint: getTranslation(activities.cardTapHint, locale),
      items: activities.items.map((a) => ({
        day: a.day,
        title: getTranslation(a.title, locale),
        description: getTranslation(a.description, locale)
      }))
    }
  };
}

export type { Language } from '../types';
export { LANGUAGES } from '../types';
