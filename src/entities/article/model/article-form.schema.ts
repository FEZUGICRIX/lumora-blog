import { z } from 'zod'

import type { TiptapContent } from '@/widgets/article-edit-form/models/form.types'

import { ZodOptionalUrl } from '@/shared/lib/zod'

export const articleFormSchema = z.object({
	title: z
		.string()
		.min(1, 'Заголовок обязателен для заполнения')
		.max(85, 'Заголовок не должен превышать 85 символов')
		.trim(),
	description: z
		.string()
		.min(1, 'Описание обязательно для заполнения')
		.max(300, 'Описание не должно превышать 300 символов')
		.trim(),
	content: z
		.record(z.any(), z.unknown())
		.refine((data): data is TiptapContent => data?.type === 'doc', {
			message: 'Контент должен быть в формате Tiptap',
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
				message: 'Содержание статьи не может быть пустым',
			},
		),
	tags: z
		.string()
		.min(1, 'Теги обязательны для заполнения')
		.refine(
			value => {
				const tags = value
					.split(' ')
					.map(tag => tag.trim())
					.filter(tag => tag !== '')
				return tags.length > 0 // хотя бы один тег
			},
			{
				message: 'Добавьте хотя бы один тег',
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
				message: 'Не более 10 тегов',
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
				message: 'Каждый тег не должен превышать 20 символов',
			},
		),
	coverImage: ZodOptionalUrl.nullable(),
	categoryId: z
		.uuid('Неверный ID категории')
		.min(1, 'Категория обязательна для заполнения'),
})

export type ArticleFormData = z.infer<typeof articleFormSchema>
