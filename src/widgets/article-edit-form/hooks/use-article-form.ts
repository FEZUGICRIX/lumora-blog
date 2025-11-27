'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { useCreateArticle } from '@/features/article/create-article'
import { useUpdateArticle } from '@/features/article/update-article'

import type { CreateArticleInput } from '@/shared/api/graphql/__generated__/documents'

import { articleFormSchema } from '../lib/validations'
import {
	type ArticleFormValues,
	type UseArticleFormProps,
} from '../models/form.types'

export const useArticleForm = ({ article, user }: UseArticleFormProps) => {
	const { createArticle, isLoadingCreateArticle } = useCreateArticle()
	const { updateArticle, isLoadingUpdateArticle } = useUpdateArticle()

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

	const isLoading = isLoadingCreateArticle || isLoadingUpdateArticle

	const onSubmit = async (data: ArticleFormValues) => {
		try {
			if (!user) {
				console.error('Ошибка: Пользователь не авторизован для отправки формы.')
				// Здесь можно выбросить ошибку, чтобы React Hook Form ее поймал
				throw new Error('User not authenticated.')
			}

			const validatedData = articleFormSchema.parse(data)

			const tagsArray = validatedData.tags // TODO: на бэк передавать строку и там уже превращать в массив
				.split(' ')
				.map(tag => tag.trim())
				.filter(tag => tag !== '')

			const payload: CreateArticleInput = {
				title: validatedData.title,
				description: validatedData.description,
				content: validatedData.content,
				tags: tagsArray,
				coverImage: validatedData.coverImage,
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
