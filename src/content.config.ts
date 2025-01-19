import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const vesti = defineCollection({
	// Load Markdown and MDX files in the `src/content/vesti/` directory.
	loader: glob({ base: './src/content/vesti', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const akcije = defineCollection({
	// Load Markdown and MDX files in the `src/content/vesti/` directory.
	loader: glob({ base: './src/content/akcije', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});


export const collections = { vesti, akcije };
