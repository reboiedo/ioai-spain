import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    category: z.enum(['eligibility', 'process', 'requirements', 'contact', 'general']),
    order: z.number(),
  })
});

const rounds = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/rounds' }),
  schema: z.object({
    roundNumber: z.number(),
    title: z.string(),
    date: z.string(),
    introSentence: z.string(),
    phase: z.enum(['basic', 'preparatory', 'team']),
    qualification: z.string().optional(),
  })
});

const forms = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/forms',
    generateId: ({ entry, base }) => {
      // Keep the directory structure: en/apply.md -> en/apply
      const relativePath = entry.replace(base + '/', '');
      return relativePath.replace(/\.md$/, '');
    }
  }),
  schema: z.object({
    slug: z.string(),
    enabled: z.boolean().default(true),

    // Either use a form template OR provide full form configuration
    formTemplate: z.enum(['application', 'download', 'contact']).optional(),


    // Full form configuration (used when formTemplate is not provided)
    form: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      action: z.string().optional(), // Optional when using template
      fields: z.array(z.object({
        type: z.enum(['text', 'email', 'select', 'textarea', 'checkbox']),
        name: z.string(),
        label: z.string(),
        placeholder: z.string().optional(),
        required: z.boolean().default(false),
        options: z.array(z.object({
          value: z.string(),
          label: z.string()
        })).optional() // For select fields
      })).optional(), // Optional when using template
      submitButton: z.object({
        default: z.string(),
        loading: z.string()
      }).optional(), // Optional when using template
      confirmationMessage: z.string().optional()
    }),

    // Self-contained thank you configuration
    thankYou: z.object({
      title: z.string(),
      message: z.string(),
      buttons: z.object({
        primary: z.object({
          text: z.string(),
          url: z.string(),
          openInNewTab: z.boolean().default(false)
        }),
        secondary: z.object({
          text: z.string(),
          url: z.string(),
          openInNewTab: z.boolean().default(false)
        }).optional()
      })
    }),

    // Page metadata
    meta: z.object({
      title: z.string(),
      description: z.string()
    })
  })
});

const privacy = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/privacy' }),
  schema: z.object({
    title: z.string(),
    lastUpdated: z.string(),
    locale: z.enum(['en', 'es']),
    description: z.string()
  })
});

const campFaq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/camp-faq' }),
  schema: z.object({
    question: z.string(),
    category: z.string().optional(),
    order: z.number(),
  })
});

export const collections = {
  faq,
  rounds,
  forms,
  privacy,
  campFaq
};
