import { createTranslation } from './types';

export const registration = {
  sectionTitle: createTranslation({
    en: "Registration Form",
    es: "Formulario de Registro"
  }),
  fields: {
    fullName: {
      label: createTranslation({
        en: "Full Name",
        es: "Nombre Completo"
      }),
      placeholder: createTranslation({
        en: "Enter your full name",
        es: "Ingrese su nombre completo"
      })
    },
    schoolName: {
      label: createTranslation({
        en: "School Name",
        es: "Nombre de la Escuela"
      }),
      placeholder: createTranslation({
        en: "Enter your school name",
        es: "Ingrese el nombre de su escuela"
      })
    },
    role: {
      label: createTranslation({
        en: "I am a...",
        es: "Soy..."
      }),
      placeholder: createTranslation({
        en: "Select your role",
        es: "Seleccione su rol"
      }),
      options: {
        student: createTranslation({
          en: "Student",
          es: "Estudiante"
        }),
        teacher: createTranslation({
          en: "Teacher",
          es: "Profesor/a"
        }),
        parent: createTranslation({
          en: "Parent",
          es: "Padre/Madre"
        }),
        other: createTranslation({
          en: "Other",
          es: "Otro"
        })
      }
    },
    email: {
      label: createTranslation({
        en: "Email",
        es: "Correo Electrónico"
      }),
      placeholder: createTranslation({
        en: "Enter your email",
        es: "Ingrese su correo electrónico"
      })
    },
    consent: {
      label: createTranslation({
        en: "I consent to receiving emails",
        es: "Acepto recibir correos electrónicos"
      })
    }
  },
  submitButton: createTranslation({
    en: "Submit",
    es: "Enviar"
  }),
  confirmationMessage: createTranslation({
    en: "You will receive an email to confirm that you are on the waitlist.",
    es: "Recibirá un correo electrónico para confirmar que está en la lista de espera."
  }),
  successMessage: createTranslation({
    en: "Thank you! Your registration has been submitted.",
    es: "¡Gracias! Su registro ha sido enviado."
  }),
  errorMessage: createTranslation({
    en: "There was an error submitting the form. Please try again.",
    es: "Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo."
  })
} as const;