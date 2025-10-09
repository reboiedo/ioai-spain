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

export const collections = {
  faq,
  rounds
};
