// zod схема
// schema.ts
import { z } from 'zod'

export const articleSchema = z.object({
	title: z.string().min(5),
	content: z.string().min(10),
})

export type ArticleFormValues = z.infer<typeof articleSchema>
