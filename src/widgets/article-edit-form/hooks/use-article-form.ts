'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { articleFormSchema } from '../lib/validations'
import {
	useCreateArticleMutation,
	useUpdateArticleMutation,
} from '@/entities/article/api'
import {
	type ArticleFormValues,
	type UseArticleFormProps,
} from '../models/form.types'

export const useArticleForm = ({
	article,
	onSuccess,
}: UseArticleFormProps) => {
	const [createArticle, { isLoading: isCreating }] =
		useCreateArticleMutation()
	const [updateArticle, { isLoading: isUpdating }] =
		useUpdateArticleMutation()

	const form = useForm<ArticleFormValues>({
		resolver: zodResolver(articleFormSchema),
		defaultValues: {
			title: article?.title || '',
			description: article?.description || '',
			tags: Array.isArray(article?.tags) ? article.tags.join(' ') : '',
			coverImage: article?.coverImage || null,
			categoryId: article?.category?.id || '',
			content: article?.contentJson || { type: 'doc', content: [] },
		},
		mode: 'onChange',
	})

	const isLoading = isCreating || isUpdating

	const onSubmit = async (data: ArticleFormValues) => {
		try {
			const validatedData = articleFormSchema.parse(data)

			const tagsArray = validatedData.tags
				.split(' ')
				.map((tag) => tag.trim())
				.filter((tag) => tag !== '')

			const payload = {
				title: validatedData.title,
				description: validatedData.description,
				content: validatedData.content,
				tags: tagsArray,
				coverImage: validatedData.coverImage,
				categoryId: validatedData.categoryId,
				authorId:
					article?.author.id ?? '34c07b17-9398-44ce-af50-4a0b241afef7',
			}

			if (article) {
				await updateArticle({
					input: {
						slug: article.slug,
						...payload,
					},
				}).unwrap()
			} else {
				await createArticle({ input: payload }).unwrap()
			}

			onSuccess?.()
		} catch (error) {
			console.error('Ошибка при отправке формы:', error)
			throw error
		}
	}

	return {
		form,
		onSubmit,
		isLoading,
		isEdit: !!article,
	}
}
