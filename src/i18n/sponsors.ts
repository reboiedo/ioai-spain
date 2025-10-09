import { createTranslation } from "./types";

export const sponsors = {
  eyebrow: createTranslation({
    en: "Collaborate",
    es: "Colabora",
  }),
  sectionTitle: createTranslation({
    en: "Collaborate with us",
    es: "Colabora con nosotros",
  }),
  intro: createTranslation({
    en: "We invite sponsors and partners to support students representing Spain at the IOAI. If you are interested in becoming a sponsor, please contact us at",
    es: "Invitamos a patrocinadores y socios a apoyar a los estudiantes que representan a España en la IOAI. Si estás interesado en convertirte en patrocinador, contáctanos en",
  }),
  contactEmail: createTranslation({
    en: "ioai.spain@harbour.space",
    es: "ioai.spain@harbour.space",
  }),
} as const;
