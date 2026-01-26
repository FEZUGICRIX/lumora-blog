'use client'

import { useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'

import { useCreateArticle } from '@/features/article/create-article'
import { useUpdateArticle } from '@/features/article/update-article'

import type { CreateArticleInput } from '@/shared/api/graphql/__generated__/documents'
import { mapZodErrorsToForm } from '@/shared/lib/zod'

import { articleFormSchema } from '../models'
import {
	type ArticleFormValues,
	type UseArticleFormProps,
} from '../models/form.types'

export const useArticleForm = ({ article, user }: UseArticleFormProps) => {
	const { createArticle, isLoadingCreateArticle } = useCreateArticle()
	const { updateArticle, isLoadingUpdateArticle } = useUpdateArticle()
	const t = useTranslations('widgets.articleEditForm')

	const form = useForm<ArticleFormValues>({
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

	const isLoading = isLoadingCreateArticle || isLoadingUpdateArticle

	const onSubmit = async (data: ArticleFormValues) => {
		try {
			if (!user) {
				console.error('Ошибка: Пользователь не авторизован для отправки формы.')
				// Здесь можно выбросить ошибку, чтобы React Hook Form ее поймал
				throw new Error('User not authenticated.')
			}

			const result = articleFormSchema.safeParse(data)

			if (!result.success) {
				// Set translated errors
				mapZodErrorsToForm({
					error: result.error,
					form,
					t,
				})
				return
			}

			const validatedData = result.data

			const tagsArray = data.tags // TODO: на бэк передавать строку и там уже превращать в массив
				.split(' ')
				.map(tag => tag.trim())
				.filter(tag => tag !== '')

			const payload: CreateArticleInput = {
				title: validatedData.title,
				description: validatedData.description,
				content: validatedData.content,
				tags: tagsArray,
				coverImage: validatedData.coverImage || null,
				categoryId: validatedData.categoryId,
				authorId: article?.author.id || user.id,
			}

			if (article) {
				updateArticle({
					slug: article.slug,
					...payload,
				})
			} else {
				createArticle(payload)
			}
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
