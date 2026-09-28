import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    projectId: z.string(),
    locale: z.enum(['en', 'pt-BR']),
    slug: z.string(),
    title: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    year: z.string(),
    role: z.string(),
    contribution: z.string(),
    disciplines: z.array(z.string()),
    tools: z.array(z.string()),
    traits: z.array(z.enum(['Sound', 'Systems', 'Code', 'Visuals', 'Interaction', 'Performance'])),
    cost: z.number().int().min(1).max(4),
    featured: z.boolean(),
    detailed: z.boolean(),
    repository: z.url().optional(),
    liveUrl: z.url().optional(),
    accent: z.enum(['cyan', 'yellow', 'coral', 'violet', 'lime', 'blue']),
    order: z.number().int(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
