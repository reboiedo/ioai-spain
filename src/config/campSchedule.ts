export interface TimeSlot {
  time: string; // e.g., "09:00 - 10:30"
  activity: {
    en: string;
    es: string;
  };
  type?: 'lecture' | 'workshop' | 'break' | 'activity' | 'other';
  instructor?: string; // Instructor name or ID
  location?: {
    en: string;
    es: string;
  };
}

export interface DaySchedule {
  day: {
    en: string;
    es: string;
  };
  date?: string; // Optional specific date
  timeSlots: TimeSlot[];
}

export interface WeekSchedule {
  weekNumber: number;
  title: {
    en: string;
    es: string;
  };
  days: DaySchedule[];
}

// Schedule data for summer camp
export const CAMP_SCHEDULE: WeekSchedule[] = [
  // Example week - populate with actual data
  {
    weekNumber: 1,
    title: {
      en: 'Week 1: Introduction to AI',
      es: 'Semana 1: Introducción a la IA'
    },
    days: [
      {
        day: {
          en: 'Monday',
          es: 'Lunes'
        },
        date: '2025-07-01',
        timeSlots: [
          {
            time: '09:00 - 10:30',
            activity: {
              en: 'Welcome & Camp Orientation',
              es: 'Bienvenida y Orientación del Campamento'
            },
            type: 'lecture',
            location: {
              en: 'Main Hall',
              es: 'Salón Principal'
            }
          },
          {
            time: '10:30 - 11:00',
            activity: {
              en: 'Coffee Break',
              es: 'Pausa para Café'
            },
            type: 'break'
          },
          {
            time: '11:00 - 13:00',
            activity: {
              en: 'Introduction to Python Programming',
              es: 'Introducción a la Programación en Python'
            },
            type: 'workshop',
            instructor: 'John Doe',
            location: {
              en: 'Computer Lab A',
              es: 'Laboratorio de Computación A'
            }
          }
        ]
      }
      // Add more days here
    ]
  }
  // Add more weeks here
];

// Helper function to get schedule for a specific locale
export function getScheduleForLocale(locale: 'en' | 'es') {
  return CAMP_SCHEDULE.map(week => ({
    weekNumber: week.weekNumber,
    title: week.title[locale],
    days: week.days.map(day => ({
      day: day.day[locale],
      date: day.date,
      timeSlots: day.timeSlots.map(slot => ({
        time: slot.time,
        activity: slot.activity[locale],
        type: slot.type,
        instructor: slot.instructor,
        location: slot.location?.[locale]
      }))
    }))
  }));
}

// Helper function to get a flat list of all time slots (useful for timeline views)
export function getFlatScheduleForLocale(locale: 'en' | 'es') {
  const flatSchedule: Array<{
    weekNumber: number;
    weekTitle: string;
    day: string;
    date?: string;
    time: string;
    activity: string;
    type?: string;
    instructor?: string;
    location?: string;
  }> = [];

  CAMP_SCHEDULE.forEach(week => {
    week.days.forEach(day => {
      day.timeSlots.forEach(slot => {
        flatSchedule.push({
          weekNumber: week.weekNumber,
          weekTitle: week.title[locale],
          day: day.day[locale],
          date: day.date,
          time: slot.time,
          activity: slot.activity[locale],
          type: slot.type,
          instructor: slot.instructor,
          location: slot.location?.[locale]
        });
      });
    });
  });

  return flatSchedule;
}
