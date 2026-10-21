import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,json}', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    sku: z.string().optional().default(''),
    category: z.string().default('valves'),
    summary: z.string().optional().default(''),
    badge: z.string().optional().default('Custom OEM Available'),
    minOrderQty: z.string().optional().default('50 PCS'),
    leadTime: z.string().optional().default('7-15 Days'),
    image: z.string().optional().nullable(),
    specs: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        })
      )
      .optional()
      .default([]),
    features: z.array(z.string()).optional().default([]),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,json}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    publishedDate: z.string().or(z.date()).optional(),
    author: z.string().default('Technical Editorial Team'),
    summary: z.string().optional().default(''),
    coverImage: z.string().optional().nullable(),
  }),
});

export const collections = { products, posts };
