import { createTranslation } from '../types';

export const safety = {
  heading: createTranslation({
    en: 'Safety for your child is our first priority',
    es: 'La seguridad de tu hijo es nuestra primera prioridad'
  }),
  paragraph: createTranslation({
    en: 'Rest assured that your child\'s hygiene and well-being are our top priority at Tenerife Summer Camp. Our certified camp counselors report directly to the Camp Director and Camp Manager, and closely monitor each camper to ensure they have a safe and enjoyable summer. To ensure a seamless experience for everyone, our counselors have daily meetings to review events and address any concerns about the children.',
    es: 'Ten la seguridad de que la higiene y el bienestar de tu hijo son nuestra máxima prioridad en el Campamento de Verano de Tenerife. Nuestros consejeros certificados del campamento reportan directamente al Director y Gerente del Campamento, y monitorean de cerca a cada campista para asegurar que tengan un verano seguro y agradable. Para garantizar una experiencia perfecta para todos, nuestros consejeros tienen reuniones diarias para revisar eventos y abordar cualquier inquietud sobre los niños.'
  })
} as const;
