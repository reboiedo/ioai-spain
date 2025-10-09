export const LANGUAGES = ['en', 'es'] as const;
export type Language = typeof LANGUAGES[number];

export type TranslationKey<T> = {
  [K in Language]: T;
};

export function createTranslation<T>(translations: TranslationKey<T>) {
  return translations;
}

export function getTranslation<T>(
  translations: TranslationKey<T>,
  locale: Language | undefined
): T {
  return translations[locale || 'en'];
}