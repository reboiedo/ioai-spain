import { getFieldsForLocale, type FormFieldDefinition } from "./formFields";

export interface FormSubmitButton {
  default: string;
  loading: string;
}

export interface FieldOverride {
  required?: boolean;
  placeholder?: string | { en: string; es: string };
  label?: string | { en: string; es: string };
}

export interface FormTemplate {
  fields: string[]; // Field names from the field library
  fieldOverrides?: Record<string, FieldOverride>; // Override field properties
  submitButton: {
    en: FormSubmitButton;
    es: FormSubmitButton;
  };
  confirmationMessage: {
    en: string;
    es: string;
  };
  action: string;
}

export interface ResolvedFormTemplate {
  fields: FormFieldDefinition[];
  submitButton: FormSubmitButton;
  confirmationMessage?: string;
  action: string;
}

// Form template definitions
export const FORM_TEMPLATES: Record<string, FormTemplate> = {
  application: {
    fields: [
      "role",            // Step 1: What describes you? (everyone)
      "signUpFor",       // Step 2: Who's filling out the form? (conditional: only if role === 'parent')
      "participantAge",  // Step 3: Age check (conditional: shown based on role + signUpFor)
      "guardianName",    // Conditional: shown if under 14 or parent signing up child
      "guardianEmail",   // Conditional: shown if under 14 or parent signing up child
      "fullName",        // Participant name
      "email",           // Participant email
      "schoolName",      // School name
      "consent"          // Consent checkbox
    ],
    submitButton: {
      en: { default: "Submit", loading: "Submitting..." },
      es: { default: "Enviar", loading: "Enviando..." },
    },
    confirmationMessage: {
      en: "You will receive an email to confirm that you are on the waitlist.",
      es: "Recibirá un correo electrónico para confirmar que está en la lista de espera.",
    },
    action: "https://submit-form.com/p2kDhINPt",
  },

  download: {
    fields: ["fullName", "email", "schoolName", "role", "consent"],
    fieldOverrides: {
      consent: {
        label: {
          en: "I confirm that I am 14 years or older and consent to receiving emails",
          es: "Confirmo que tengo 14 años o más y acepto recibir correos electrónicos"
        }
      }
    },
    submitButton: {
      en: { default: "Download", loading: "Downloading..." },
      es: { default: "Descargar", loading: "Descargando..." },
    },
    confirmationMessage: {
      en: "You will receive an email with the download link shortly.",
      es: "Recibirá un correo electrónico con el enlace de descarga en breve.",
    },
    action: "https://submit-form.com/p2kDhINPt",
  },

  contact: {
    fields: ["fullName", "email", "message"],
    submitButton: {
      en: { default: "Send Message", loading: "Sending..." },
      es: { default: "Enviar Mensaje", loading: "Enviando..." },
    },
    confirmationMessage: {
      en: "Thank you for your message. We will get back to you shortly.",
      es: "Gracias por su mensaje. Nos pondremos en contacto con usted en breve.",
    },
    action: "https://submit-form.com/p2kDhINPt",
  },
};

// Helper function to resolve a template for a specific locale with optional field overrides
export function resolveFormTemplate(
  templateName: string,
  locale: "en" | "es"
): ResolvedFormTemplate {
  const template = FORM_TEMPLATES[templateName];
  if (!template) {
    throw new Error(`Form template "${templateName}" not found`);
  }

  // Get base fields from template
  let fields = getFieldsForLocale(template.fields, locale);

  // Apply template-level field overrides if defined
  if (template.fieldOverrides) {
    fields = fields.map((field) => {
      const override = template.fieldOverrides![field.name];
      if (override) {
        // Helper to resolve locale-aware or simple values
        const resolveValue = (value: string | { en: string; es: string } | undefined, defaultValue: string): string => {
          if (value === undefined) return defaultValue;
          if (typeof value === 'string') return value;
          return value[locale];
        };

        return {
          ...field,
          required:
            override.required !== undefined
              ? override.required
              : field.required,
          placeholder: field.placeholder ? resolveValue(override.placeholder, field.placeholder) : field.placeholder,
          label: resolveValue(override.label, field.label),
        };
      }
      return field;
    });
  }

  return {
    fields,
    submitButton: template.submitButton[locale],
    confirmationMessage: template.confirmationMessage[locale],
    action: template.action,
  };
}

// Helper to check if a template exists
export function isValidTemplate(templateName: string): boolean {
  return templateName in FORM_TEMPLATES;
}
