export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  github?: string;
  website?: string;
}

export interface Instructor {
  id: string;
  name: string; // Name is the same in both languages
  title: {
    en: string;
    es: string;
  };
  bio: {
    en: string;
    es: string;
  };
  image: string; // Path to instructor image
  socialLinks?: SocialLinks;
  expertise?: {
    en: string[];
    es: string[];
  };
}

// Instructor data for summer camp
export const CAMP_INSTRUCTORS: Instructor[] = [
  // Example instructor - populate with actual data
  {
    id: 'john-doe',
    name: 'John Doe',
    title: {
      en: 'AI Research Scientist',
      es: 'Científico de Investigación en IA'
    },
    bio: {
      en: 'John is a leading researcher in machine learning with over 10 years of experience in the field.',
      es: 'John es un investigador líder en aprendizaje automático con más de 10 años de experiencia en el campo.'
    },
    image: '/images/instructors/john-doe.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe'
    },
    expertise: {
      en: ['Machine Learning', 'Neural Networks', 'Computer Vision'],
      es: ['Aprendizaje Automático', 'Redes Neuronales', 'Visión por Computadora']
    }
  }
  // Add more instructors here
];

// Helper function to get instructors for a specific locale
export function getInstructorsForLocale(locale: 'en' | 'es') {
  return CAMP_INSTRUCTORS.map(instructor => ({
    id: instructor.id,
    name: instructor.name,
    title: instructor.title[locale],
    bio: instructor.bio[locale],
    image: instructor.image,
    socialLinks: instructor.socialLinks,
    expertise: instructor.expertise?.[locale]
  }));
}
