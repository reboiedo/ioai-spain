export interface Course {
  id: string;
  title: string;
  description: string;
  backgroundColor: string;
  titleColor: string;
  descriptionColor: string;
  badgeColor: string;
  icon: string;
}

// Beginner Level Courses
export const beginnerCourses: Course[] = [
  {
    id: 'beginner-math',
    title: 'Mathematics',
    description: 'In the exciting world of math at our summer camp you will learn how to distinguish truth from falsehood, make scientific predictions, and present convincing arguments. No previous mathematical experience is required, only a willingness to explore and discover new things. Join us and uncover the many hidden wonders of math!',
    backgroundColor: '#EFBD60',
    titleColor: '#000000',
    descriptionColor: '#000000',
    badgeColor: '#1E0FB5',
    icon: '🔢'
  },
  {
    id: 'game-dev',
    title: 'Game development',
    description: 'Learn game design fundamentals: storyboarding, and basic programming. Discover gameplay mechanics and user interaction to create your own games.',
    backgroundColor: '#EFBD60',
    titleColor: '#000000',
    descriptionColor: '#000000',
    badgeColor: '#1E0FB5',
    icon: '🎮'
  },
  {
    id: 'python-beginners',
    title: 'Python for Beginners',
    description: 'Learn Python programming basics: data types, control structures, functions, and libraries. Gain hands-on experience building simple applications and solving problems.',
    backgroundColor: '#EFBD60',
    titleColor: '#000000',
    descriptionColor: '#000000',
    badgeColor: '#1E0FB5',
    icon: '🐍'
  },
  {
    id: 'design-track',
    title: 'Design Track',
    description: 'Learn the basics of design, including colour theory and layout, to create attractive and functional designs. This course boosts creativity and teaches effective design principles.',
    backgroundColor: '#EFBD60',
    titleColor: '#000000',
    descriptionColor: '#000000',
    badgeColor: '#1E0FB5',
    icon: '🎨'
  },
  {
    id: 'beginner-ai',
    title: 'AI',
    description: 'The summer school program on AI provides a theoretical foundation and hands-on experience on recent advances in Machine Learning, Deep Learning, and Language modeling fields. It includes a crash course on AI, a robotics workshop, GPT-like solutions adaptation',
    backgroundColor: '#EFBD60',
    titleColor: '#000000',
    descriptionColor: '#000000',
    badgeColor: '#1E0FB5',
    icon: '🤖'
  }
];

// Advanced Level Courses
export const advancedCourses: Course[] = [
  {
    id: 'advanced-math',
    title: 'Mathematics',
    description: 'In the exhilarating world of advanced math at our summer camp, you will dive deep into problem-solving, abstraction, and creative reasoning. Explore topics from combinatorics, number theory, and geometry to modern applications in algorithms and artificial intelligence. You\'ll learn to construct rigorous proofs, tackle Olympiad-style challenges, and think like a true mathematician. A solid foundation and curiosity for deeper exploration are all you need. Join us and push the boundaries of what you thought possible in mathematics!',
    backgroundColor: '#EA5938',
    titleColor: '#FFFFFF',
    descriptionColor: '#FFFFFF',
    badgeColor: '#1E0FB5',
    icon: '∑'
  },
  {
    id: 'algorithms',
    title: 'Introduction to Algorithms',
    description: 'Learn the basics of algorithms to solve problems more efficiently. Discover simple methods to organize, analyze, and execute tasks step-by-step.',
    backgroundColor: '#EA5938',
    titleColor: '#FFFFFF',
    descriptionColor: '#FFFFFF',
    badgeColor: '#1E0FB5',
    icon: '⚡'
  },
  {
    id: 'advanced-ai',
    title: 'AI',
    description: 'The summer school program on AI provides a theoretical foundation and hands-on experience on recent advances in Machine Learning, Deep Learning, and Language modeling fields. It includes a crash course on AI, a robotics workshop, GPT-like solutions adaptation',
    backgroundColor: '#EA5938',
    titleColor: '#FFFFFF',
    descriptionColor: '#FFFFFF',
    badgeColor: '#1E0FB5',
    icon: '🤖'
  }
];

// IOAI Training Track
export const ioaiTraining: Course = {
  id: 'ioai-training',
  title: 'IOAI Training',
  description: 'IOAI Spain - A dedicated track will focus on training the national team for the International Olympiad in Artificial Intelligence (IOAI) — a key milestone in the country\'s preparation for the global stage.',
  backgroundColor: '#32C5FF',
  titleColor: '#000000',
  descriptionColor: '#000000',
  badgeColor: '#1E0FB5',
  icon: '🏆'
};

// Legacy export for backward compatibility (if needed elsewhere)
export const courses: Course[] = [
  ...beginnerCourses,
  ...advancedCourses,
  ioaiTraining
];
