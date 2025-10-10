import { createTranslation } from './types';

export const banner = {
  title: createTranslation({
    en: "Spanish AI Olympiad Brochure",
    es: "Folleto de la Olimpiada Española de IA"
  }),
  description: createTranslation({
    en: "Download our Brochure and help promote the 1st Spanish AI Olympiad",
    es: "Descarga nuestro folleto y ayuda a promocionar la 1ª Olimpiada Española de IA"
  }),
  downloadButton: createTranslation({
    en: "Download Brochure",
    es: "Descargar Folleto"
  }),
  downloadUrl: createTranslation({
    en: "https://drive.google.com/file/d/1mjPIas7ib3Pt_ps2erV9FFxFUWlqAMpp/view?usp=drive_link",
    es: "https://drive.google.com/file/d/16xmZtRJaj5BqwMmyAIn1FNBU_js5f_9d/view?usp=drive_link"
  })
} as const;