import { z } from 'zod'
import type { TiptapContent } from '../models/form.types'

export const articleFormSchema = z.object({
	title: z
		.string()
		.min(1, 'Заголовок обязателен для заполнения')
		.max(200, 'Заголовок не должен превышать 200 символов')
		.trim(),
	description: z
		.string()
		.min(1, 'Описание обязательно для заполнения')
		.max(500, 'Описание не должно превышать 500 символов')
		.trim(),
	content: z
		.record(z.any(), z.unknown())
		.refine((data): data is TiptapContent => data?.type === 'doc', {
			message: 'Контент должен быть в формате Tiptap',
		})
		.refine(
			(data) => {
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
			(value) => {
				const tags = value
					.split(' ')
					.map((tag) => tag.trim())
					.filter((tag) => tag !== '')
				return tags.length > 0 // хотя бы один тег
			},
			{
				message: 'Добавьте хотя бы один тег',
			},
		)
		.refine(
			(value) => {
				const tags = value
					.split(' ')
					.map((tag) => tag.trim())
					.filter((tag) => tag !== '')
				return tags.length <= 10 // не более 10 тегов
			},
			{
				message: 'Не более 10 тегов',
			},
		)
		.refine(
			(value) => {
				const tags = value
					.split(' ')
					.map((tag) => tag.trim())
					.filter((tag) => tag !== '')
				return tags.every((tag) => tag.length <= 20) // каждый тег не более 20 символов
			},
			{
				message: 'Каждый тег не должен превышать 20 символов',
			},
		),
	coverImage: z
		.string()
		.url('Неверный URL изображения')
		.nullable()
		.transform((value) => value || null),
	categoryId: z
		.string()
		.uuid('Неверный ID категории')
		.min(1, 'Категория обязательна для заполнения'),
})

export type ArticleFormData = z.infer<typeof articleFormSchema>
