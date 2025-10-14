export interface CourseLevel {
  en: 'Beginner' | 'Intermediate' | 'Advanced';
  es: 'Principiante' | 'Intermedio' | 'Avanzado';
}

export interface Course {
  id: string;
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  duration: {
    en: string;
    es: string;
  };
  level: CourseLevel;
  icon?: string; // Optional icon/emoji or image path
  color?: string; // Optional theme color for the course card
}

// Course data for summer camp
export const CAMP_COURSES: Course[] = [
  // Example course - populate with actual data
  {
    id: 'intro-ai',
    title: {
      en: 'Introduction to Artificial Intelligence',
      es: 'Introducción a la Inteligencia Artificial'
    },
    description: {
      en: 'Learn the fundamentals of AI and machine learning in this beginner-friendly course.',
      es: 'Aprende los fundamentos de la IA y el aprendizaje automático en este curso para principiantes.'
    },
    duration: {
      en: '2 weeks',
      es: '2 semanas'
    },
    level: {
      en: 'Beginner',
      es: 'Principiante'
    },
    icon: '🤖',
    color: '#3B82F6'
  }
  // Add more courses here
];

// Helper function to get courses for a specific locale
export function getCoursesForLocale(locale: 'en' | 'es') {
  return CAMP_COURSES.map(course => ({
    id: course.id,
    title: course.title[locale],
    description: course.description[locale],
    duration: course.duration[locale],
    level: course.level[locale],
    icon: course.icon,
    color: course.color
  }));
}
