import { createTranslation } from '../types';

export const schedule = {
  heading: createTranslation({
    en: 'A day in the life at Tenerife camp',
    es: 'Un día en la vida del campamento de Tenerife'
  }),
  items: [
    {
      time: createTranslation({
        en: '7:00am - 9:00am',
        es: '7:00am - 9:00am'
      }),
      title: createTranslation({
        en: 'Early Rise',
        es: 'Despertar Temprano'
      }),
      description: createTranslation({
        en: 'Kids will start their day off right with a morning workout, then clean up before diving into important announcements for the day. Afterwards, they will fuel up with a delicious breakfast to power through the day.',
        es: 'Los niños comenzarán bien su día con un entrenamiento matutino, luego se asearán antes de sumergirse en los anuncios importantes del día. Después, se recargarán con un delicioso desayuno para tener energía durante todo el día.'
      })
    },
    {
      time: createTranslation({
        en: '9:30am - 11:00am',
        es: '9:30am - 11:00am'
      }),
      title: createTranslation({
        en: '1st Period',
        es: '1er Período'
      }),
      description: createTranslation({
        en: 'Students will acquire the necessary coding skills to advance by attending lectures, practising and taking quizzes during the first part of class.',
        es: 'Los estudiantes adquirirán las habilidades de programación necesarias para avanzar asistiendo a clases, practicando y realizando cuestionarios durante la primera parte de la clase.'
      })
    },
    {
      time: createTranslation({
        en: '11:00am - 11:30am',
        es: '11:00am - 11:30am'
      }),
      title: createTranslation({
        en: 'Snack Time',
        es: 'Hora de Merienda'
      }),
      description: createTranslation({
        en: 'During the day, children are given a break to recharge with a nutritious snack. This helps to increase energy levels and keep the mind alert.',
        es: 'Durante el día, los niños reciben un descanso para recargarse con un refrigerio nutritivo. Esto ayuda a aumentar los niveles de energía y mantener la mente alerta.'
      })
    },
    {
      time: createTranslation({
        en: '11:30am - 1:00pm',
        es: '11:30am - 1:00pm'
      }),
      title: createTranslation({
        en: '2nd Period',
        es: '2do Período'
      }),
      description: createTranslation({
        en: 'The second part of the class focuses on individual practice, with the teacher guiding the students in creating their own projects.',
        es: 'La segunda parte de la clase se centra en la práctica individual, con el profesor guiando a los estudiantes en la creación de sus propios proyectos.'
      })
    },
    {
      time: createTranslation({
        en: '1:30pm - 4:00pm',
        es: '1:30pm - 4:00pm'
      }),
      title: createTranslation({
        en: 'Lunch',
        es: 'Almuerzo'
      }),
      description: createTranslation({
        en: 'During lunch break, children at the summer camp are provided with a nutritious and well-balanced meal to nourish their body and sustain them for the rest of the day\'s activities.',
        es: 'Durante el descanso del almuerzo, los niños del campamento de verano reciben una comida nutritiva y equilibrada para nutrir su cuerpo y sostenerlos para el resto de las actividades del día.'
      })
    },
    {
      time: createTranslation({
        en: '4:00pm - 7:00pm',
        es: '4:00pm - 7:00pm'
      }),
      title: createTranslation({
        en: 'Activities',
        es: 'Actividades'
      }),
      description: createTranslation({
        en: 'At the camp, children on Menorca can participate in a variety of activities such as swimming, kayaking, hiking and exploring the island\'s unique culture and history, providing them with an exciting and memorable experience.',
        es: 'En el campamento, los niños en Tenerife pueden participar en una variedad de actividades como natación, kayak, senderismo y explorar la cultura e historia única de la isla, brindándoles una experiencia emocionante e inolvidable.'
      })
    },
    {
      time: createTranslation({
        en: '7:00pm - 8:00pm',
        es: '7:00pm - 8:00pm'
      }),
      title: createTranslation({
        en: 'Dinner',
        es: 'Cena'
      }),
      description: createTranslation({
        en: 'Children are offered a variety of delicious and healthy options, such as fresh seafood, traditional Mediterranean dishes and locally sourced produce.',
        es: 'Los niños reciben una variedad de opciones deliciosas y saludables, como mariscos frescos, platos mediterráneos tradicionales y productos locales.'
      })
    },
    {
      time: createTranslation({
        en: '8:00pm - 10:00pm',
        es: '8:00pm - 10:00pm'
      }),
      title: createTranslation({
        en: 'Chill time/Movie/Quiz',
        es: 'Tiempo de Relajación/Película/Quiz'
      }),
      description: createTranslation({
        en: 'After a full day of activities, children at the camp have some chill time before dinner. Later, they have the option to watch a movie, participate in quizzes and other interactive activities, before getting a good night\'s sleep to prepare for the next day\'s adventure.',
        es: 'Después de un día completo de actividades, los niños del campamento tienen tiempo de relajación antes de la cena. Más tarde, tienen la opción de ver una película, participar en cuestionarios y otras actividades interactivas, antes de dormir bien para prepararse para la aventura del día siguiente.'
      })
    }
  ]
} as const;
