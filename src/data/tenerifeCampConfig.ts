/**
 * Configuration for Tenerife Summer Camp
 * Non-translated values that apply to both EN and ES versions
 */
export const tenerifeCampConfig = {
  /**
   * Main registration/application URL
   * Used by navigation CTA and other camp CTAs throughout the site
   */
  registrationUrl: {
    en: '/form/camp-signup',
    es: '/es/form/camp-signup'
  },

  // Add other camp-wide configuration here as needed
  // Examples:
  // - startDate: '2025-07-01'
  // - endDate: '2025-07-15'
  // - capacity: 50
  // - pricingSheetUrl: '...'
} as const;
