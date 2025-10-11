export type FormFieldType = 'text' | 'email' | 'select' | 'textarea' | 'checkbox';

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
      placeholder: 'Enter your full name',
      required: true
    },
    es: {
      type: 'text',
      name: 'fullName',
      label: 'Nombre Completo',
      placeholder: 'Ingrese su nombre completo',
      required: true
    }
  },

  email: {
    en: {
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      required: true
    },
    es: {
      type: 'email',
      name: 'email',
      label: 'Correo Electrónico',
      placeholder: 'Ingrese su correo electrónico',
      required: true
    }
  },

  schoolName: {
    en: {
      type: 'text',
      name: 'schoolName',
      label: 'School Name',
      placeholder: 'Enter your school name',
      required: true
    },
    es: {
      type: 'text',
      name: 'schoolName',
      label: 'Nombre de la Escuela',
      placeholder: 'Ingrese el nombre de su escuela',
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