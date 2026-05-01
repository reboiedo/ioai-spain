import { createTranslation } from '../types';

interface PhotoSlot {
  /** Filename (no extension) inside `src/assets/tenerife/venue/`. */
  key?: string;
  /** Alt text — also used as the placeholder label when no photo. */
  alt: ReturnType<typeof createTranslation<string>>;
  /** Aspect ratio for the slot. Varied per slot for rhythm. */
  aspect: string;
}

export const venue = {
  title: createTranslation({
    en: 'VENUE',
    es: 'SEDE'
  }),
  copy: createTranslation({
    en: 'Campers stay at a 4-star property in Puerto de la Cruz, two minutes on foot from Martiánez beach. Rooms are shared between three campers, with all meals — breakfast, lunch and dinner — included on site. The northern coast keeps a mild climate even at the height of summer, so the hotel terrace becomes a second living room.',
    es: 'Los campistas se alojan en un establecimiento de 4 estrellas en Puerto de la Cruz, a dos minutos a pie de la playa de Martiánez. Las habitaciones son compartidas entre tres campistas, con todas las comidas — desayuno, almuerzo y cena — incluidas en el lugar. La costa norte mantiene un clima suave incluso en pleno verano, así que la terraza del hotel se convierte en un segundo salón.'
  }),
  mapTitle: createTranslation({
    en: 'Hotel Concordia on Google Maps',
    es: 'Hotel Concordia en Google Maps'
  }),
  photoSlots: [
    {
      key: 'hotel-1',
      alt: createTranslation({
        en: 'Hotel Concordia exterior',
        es: 'Exterior del Hotel Concordia'
      }),
      aspect: '4 / 3'
    },
    {
      key: 'hotel-2',
      alt: createTranslation({
        en: 'Hotel Concordia interior',
        es: 'Interior del Hotel Concordia'
      }),
      aspect: '5 / 3'
    }
  ] satisfies PhotoSlot[]
} as const;
