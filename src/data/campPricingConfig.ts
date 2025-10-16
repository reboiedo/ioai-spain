/**
 * Centralized pricing configuration for Tenerife Summer Camp
 * Single source of truth for all camp pricing, discounts, and payment links
 */

export const campPricingConfig = {
  withAccommodation: {
    original: 2550,
    discounted: null, // Set to a number (e.g., 2300) to enable early bird discount
  },
  withoutAccommodation: {
    original: 1530,
    discounted: null, // Set to a number to enable discount
  },
  currency: 'EUR'
} as const;

/**
 * Get the active price for an accommodation option
 * Returns discounted price if available, otherwise returns original price
 */
export function getActivePrice(option: 'withAccommodation' | 'withoutAccommodation'): number {
  const pricing = campPricingConfig[option];
  return pricing.discounted ?? pricing.original;
}

/**
 * Generate Flywire payment URL for a given accommodation option
 * Amount is automatically converted to cents as required by Flywire
 */
export function getFlywireUrl(option: 'withAccommodation' | 'withoutAccommodation'): string {
  const amount = getActivePrice(option) * 100; // Convert to cents
  return `https://payment.flywire.com/pay/payment?recipient=HUO&amount=${amount}&currency=${campPricingConfig.currency}`;
}

/**
 * Format price label for form display with discount information
 * Shows strikethrough pricing when discount is active
 */
export function getPriceLabel(option: 'withAccommodation' | 'withoutAccommodation', locale: 'en' | 'es'): string {
  const pricing = campPricingConfig[option];
  const hasDiscount = pricing.discounted !== null && pricing.discounted !== undefined;

  if (hasDiscount) {
    return locale === 'en'
      ? `€${pricing.discounted} (was €${pricing.original})`
      : `€${pricing.discounted} (antes €${pricing.original})`;
  }

  return `€${pricing.original}`;
}

/**
 * Get full option label including accommodation description and price
 */
export function getOptionLabel(option: 'withAccommodation' | 'withoutAccommodation', locale: 'en' | 'es'): string {
  const priceLabel = getPriceLabel(option, locale);

  if (option === 'withAccommodation') {
    return locale === 'en'
      ? `With Accommodation - ${priceLabel}`
      : `Con Alojamiento - ${priceLabel}`;
  } else {
    return locale === 'en'
      ? `Without Accommodation - ${priceLabel}`
      : `Sin Alojamiento - ${priceLabel}`;
  }
}
