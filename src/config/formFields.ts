import { getOptionLabel } from '../data/campPricingConfig';

export type FormFieldType = 'text' | 'email' | 'select' | 'textarea' | 'checkbox' | 'radio' | 'date';

export interface FormFieldOption {
  value: string;
  label: string;
}

export interface FormFieldDefinition {
  type: FormFieldType;
  name: string;
  label: string;
  placeholder?: string;
  required: boolean;
  options?: FormFieldOption[];
}

// Localized field definitions
export interface LocalizedFormField {
  en: FormFieldDefinition;
  es: FormFieldDefinition;
}

// Standard field library
export const FORM_FIELDS: Record<string, LocalizedFormField> = {
  fullName: {
    en: {
      type: 'text',
      name: 'fullName',
      label: 'Full Name',
      placeholder: 'Enter student\'s full name',
      required: true
    },
    es: {
      type: 'text',
      name: 'fullName',
      label: 'Nombre Completo',
      placeholder: 'Ingrese el nombre completo del estudiante',
      required: true
    }
  },

  email: {
    en: {
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'Enter student\'s email',
      required: true
    },
    es: {
      type: 'email',
      name: 'email',
      label: 'Correo Electrónico',
      placeholder: 'Ingrese el email del estudiante',
      required: true
    }
  },

  schoolName: {
    en: {
      type: 'text',
      name: 'schoolName',
      label: 'School Name',
      placeholder: 'Enter student\'s school name',
      required: true
    },
    es: {
      type: 'text',
      name: 'schoolName',
      label: 'Nombre de la Escuela',
      placeholder: 'Ingrese el nombre de la escuela del estudiante',
      required: true
    }
  },

  organization: {
    en: {
      type: 'text',
      name: 'organization',
      label: 'Organization',
      placeholder: 'Enter your organization (optional)',
      required: false
    },
    es: {
      type: 'text',
      name: 'organization',
      label: 'Organización',
      placeholder: 'Ingrese su organización (opcional)',
      required: false
    }
  },

  role: {
    en: {
      type: 'select',
      name: 'role',
      label: 'I am a...',
      placeholder: 'Select your role',
      required: true,
      options: [
        { value: 'student', label: 'Student' },
        { value: 'teacher', label: 'Teacher' },
        { value: 'parent', label: 'Parent' },
        { value: 'other', label: 'Other' }
      ]
    },
    es: {
      type: 'select',
      name: 'role',
      label: 'Soy...',
      placeholder: 'Seleccione su rol',
      required: true,
      options: [
        { value: 'student', label: 'Estudiante' },
        { value: 'teacher', label: 'Profesor/a' },
        { value: 'parent', label: 'Padre/Madre' },
        { value: 'other', label: 'Otro' }
      ]
    }
  },

  campRole: {
    en: {
      type: 'select',
      name: 'role',
      label: 'I am a...',
      placeholder: 'Select your role',
      required: true,
      options: [
        { value: 'student', label: 'Student' },
        { value: 'parent', label: 'Parent' }
      ]
    },
    es: {
      type: 'select',
      name: 'role',
      label: 'Soy...',
      placeholder: 'Seleccione su rol',
      required: true,
      options: [
        { value: 'student', label: 'Estudiante' },
        { value: 'parent', label: 'Padre/Madre' }
      ]
    }
  },

  consent: {
    en: {
      type: 'checkbox',
      name: 'consent',
      label: 'I consent to receiving emails',
      required: true
    },
    es: {
      type: 'checkbox',
      name: 'consent',
      label: 'Acepto recibir correos electrónicos',
      required: true
    }
  },

  message: {
    en: {
      type: 'textarea',
      name: 'message',
      label: 'Message',
      placeholder: 'Enter your message',
      required: true
    },
    es: {
      type: 'textarea',
      name: 'message',
      label: 'Mensaje',
      placeholder: 'Ingrese su mensaje',
      required: true
    }
  },

  signUpFor: {
    en: {
      type: 'radio',
      name: 'signUpFor',
      label: 'Are you signing up yourself or your child?',
      required: true,
      options: [
        { value: 'myself', label: 'I want to participate myself' },
        { value: 'my-child', label: "I'm signing up my child" }
      ]
    },
    es: {
      type: 'radio',
      name: 'signUpFor',
      label: '¿Te inscribes tú mismo o a tu hijo/a?',
      required: true,
      options: [
        { value: 'myself', label: 'Quiero participar yo mismo/a' },
        { value: 'my-child', label: 'Estoy inscribiendo a mi hijo/a' }
      ]
    }
  },

  participantAge: {
    en: {
      type: 'radio',
      name: 'participantAge',
      label: 'Are you 14 years old or older?',
      required: true,
      options: [
        { value: 'over14', label: 'Yes (14 or older)' },
        { value: 'under14', label: 'No (under 14)' }
      ]
    },
    es: {
      type: 'radio',
      name: 'participantAge',
      label: '¿Tienes 14 años o más?',
      required: true,
      options: [
        { value: 'over14', label: 'Sí (14 años o más)' },
        { value: 'under14', label: 'No (menor de 14)' }
      ]
    }
  },

  guardianName: {
    en: {
      type: 'text',
      name: 'guardianName',
      label: 'Guardian Full Name',
      placeholder: 'Enter guardian\'s full name',
      required: false
    },
    es: {
      type: 'text',
      name: 'guardianName',
      label: 'Nombre Completo del Tutor',
      placeholder: 'Ingrese el nombre completo del tutor',
      required: false
    }
  },

  guardianEmail: {
    en: {
      type: 'email',
      name: 'guardianEmail',
      label: 'Guardian Email',
      placeholder: 'Enter guardian\'s email',
      required: false
    },
    es: {
      type: 'email',
      name: 'guardianEmail',
      label: 'Email del Tutor',
      placeholder: 'Ingrese el email del tutor',
      required: false
    }
  },

  birthdate: {
    en: {
      type: 'date',
      name: 'birthdate',
      label: 'Date of Birth',
      placeholder: '',
      required: true
    },
    es: {
      type: 'date',
      name: 'birthdate',
      label: 'Fecha de Nacimiento',
      placeholder: '',
      required: true
    }
  },

  gender: {
    en: {
      type: 'select',
      name: 'gender',
      label: 'Gender',
      placeholder: 'Select gender',
      required: true,
      options: [
        { value: 'female', label: 'Female' },
        { value: 'male', label: 'Male' },
        { value: 'non-binary', label: 'Non-binary' }
      ]
    },
    es: {
      type: 'select',
      name: 'gender',
      label: 'Género',
      placeholder: 'Seleccione género',
      required: true,
      options: [
        { value: 'female', label: 'Femenino' },
        { value: 'male', label: 'Masculino' },
        { value: 'non-binary', label: 'No binario' }
      ]
    }
  },

  tshirtSize: {
    en: {
      type: 'select',
      name: 'tshirtSize',
      label: 'T-Shirt Size',
      placeholder: 'Select size',
      required: true,
      options: [
        { value: 'xs', label: 'XS' },
        { value: 's', label: 'S' },
        { value: 'm', label: 'M' },
        { value: 'l', label: 'L' },
        { value: 'xl', label: 'XL' },
        { value: 'xxl', label: 'XXL' }
      ]
    },
    es: {
      type: 'select',
      name: 'tshirtSize',
      label: 'Talla de Camiseta',
      placeholder: 'Seleccione talla',
      required: true,
      options: [
        { value: 'xs', label: 'XS' },
        { value: 's', label: 'S' },
        { value: 'm', label: 'M' },
        { value: 'l', label: 'L' },
        { value: 'xl', label: 'XL' },
        { value: 'xxl', label: 'XXL' }
      ]
    }
  },

  campPricing: {
    en: {
      type: 'radio',
      name: 'campPricing',
      label: 'Select Accommodation Option',
      required: true,
      options: [
        { value: 'withoutAccommodation', label: getOptionLabel('withoutAccommodation', 'en') },
        { value: 'withAccommodation', label: getOptionLabel('withAccommodation', 'en') }
      ]
    },
    es: {
      type: 'radio',
      name: 'campPricing',
      label: 'Seleccionar Opción de Alojamiento',
      required: true,
      options: [
        { value: 'withoutAccommodation', label: getOptionLabel('withoutAccommodation', 'es') },
        { value: 'withAccommodation', label: getOptionLabel('withAccommodation', 'es') }
      ]
    }
  }
};

// Helper function to get fields for a specific locale
export function getFieldsForLocale(fieldNames: string[], locale: 'en' | 'es'): FormFieldDefinition[] {
  return fieldNames.map(name => {
    const field = FORM_FIELDS[name];
    if (!field) {
      throw new Error(`Field "${name}" not found in form fields library`);
    }
    return field[locale];
  });
}