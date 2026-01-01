import { z } from 'zod'

import type { TiptapContent } from '@/widgets/article-edit-form/models/form.types'

import { ZodOptionalUrl } from '@/shared/lib/zod'

export const articleFormSchema = z.object({
	title: z
		.string()
		.min(1, 'titleRequired')
		.max(85, 'titleTooLong')
		.trim(),
	description: z
		.string()
		.min(1, 'descriptionRequired')
		.max(300, 'descriptionTooLong')
		.trim(),
	content: z
		.record(z.any(), z.unknown())
		.refine((data): data is TiptapContent => data?.type === 'doc', {
			message: 'contentInvalidFormat',
		})
		.refine(
			data => {
				const content = data as TiptapContent
				return (
					(content.content &&
						Array.isArray(content.content) &&
						content.content.length > 0) ||
					(content.text && content.text.length > 0) ||
					Object.keys(content).length > 1
				)
			},
			{
				message: 'contentEmpty',
			},
		),
	tags: z
		.string()
		.min(1, 'tagsRequired')
		.refine(
			value => {
				const tags = value
					.split(' ')
					.map(tag => tag.trim())
					.filter(tag => tag !== '')
				return tags.length > 0 // хотя бы один тег
			},
			{
				message: 'tagsMinimum',
			},
		)
		.refine(
			value => {
				const tags = value
					.split(' ')
					.map(tag => tag.trim())
					.filter(tag => tag !== '')
				return tags.length <= 10 // не более 10 тегов
			},
			{
				message: 'tagsMaximum',
			},
		)
		.refine(
			value => {
				const tags = value
					.split(' ')
					.map(tag => tag.trim())
					.filter(tag => tag !== '')
				return tags.every(tag => tag.length <= 20) // каждый тег не более 20 символов
			},
			{
				message: 'tagTooLong',
			},
		),
	coverImage: ZodOptionalUrl.nullable(),
	categoryId: z
		.uuid('categoryInvalidId')
		.min(1, 'categoryRequired'),
})

export type ArticleFormData = z.infer<typeof articleFormSchema>
