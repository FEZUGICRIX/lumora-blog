'use client'

import { useState, type FormEvent } from 'react'
import {
	useCreateArticleMutation,
	useUpdateArticleMutation,
} from '@/entities/article/api'
import { toast } from 'sonner'
import { Input } from '@/shared/ui/ui-kit/input'
import { Button } from '@/shared/ui/ui-kit/button'
import type { FullArticle } from '@/entities/article'
import { CategorySelect } from '@/entities/category/ui/CategorySelect'
import { SimpleEditor } from '@/features/editor/ui/simple-editor'

interface RTKQueryError {
	data?: {
		message?: string
	}
	message?: string
	status?: number
}

interface ArticleEditFormProps {
	article?: FullArticle | null
}

export function ArticleEditForm({ article }: ArticleEditFormProps) {
	const [title, setTitle] = useState(article?.title ?? '')
	const [description, setDescription] = useState(
		article?.description ?? '',
	)
	const [tags, setTags] = useState(article?.tags.join(', ') ?? '')
	const [coverImage, setCoverImage] = useState(article?.coverImage ?? null)

	const [createArticle, { isLoading: isCreating }] =
		useCreateArticleMutation()
	const [updateArticle, { isLoading: isUpdating }] =
		useUpdateArticleMutation()

	const [categoryId, setCategoryId] = useState(
		article?.category?.id || null,
	)
	const [content, setContent] = useState(article?.contentJson || null)

	const isLoading = isCreating || isUpdating

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		// Валидация обязательных полей
		if (!title.trim()) {
			toast.error('Ошибка', {
				description: 'Заголовок статьи обязателен для заполнения',
			})
			return
		}

		if (!content) {
			toast.error('Ошибка', {
				description: 'Содержание статьи не может быть пустым',
			})
			return
		}

		if (!categoryId) {
			toast.error('Ошибка', {
				description: 'Необходимо выбрать категорию',
			})
			return
		}

		const payload = {
			title: title.trim(),
			description: description.trim(),
			content,
			tags: tags
				.split(' ')
				.map((tag) => tag.trim())
				.filter((tag) => tag !== ''),
			coverImage: coverImage?.length ? coverImage.trim() : null,
			categoryId,
			authorId: '19754a8e-6b8e-4496-b90a-cb90ff912098',
		}

		console.log('Отправляемые данные:', JSON.stringify(payload, null, 2))

		try {
			if (article) {
				// Обновление существующей статьи
				if (!article.slug) {
					toast.error('Ошибка', {
						description: 'Не удалось определить идентификатор статьи',
					})
					return
				}

				const response = await updateArticle({
					input: {
						slug: article.slug,
						...payload,
					},
				}).unwrap()

				console.log('Ответ от сервера:', response)

				toast.success('Успешно обновлено', {
					description: 'Статья обновлена',
				})
			} else {
				// Создание новой статьи
				const response = await createArticle({ input: payload }).unwrap()

				console.log('Ответ от сервера:', response)

				toast.success('Успешно создано', {
					description: 'Статья создана',
				})
			}
		} catch (error: unknown) {
			console.error('Полная ошибка:', error)

			// Безопасное извлечение сообщения об ошибке
			let errorMessage = 'Произошла неизвестная ошибка'

			if (typeof error === 'object' && error !== null) {
				const rtkError = error as RTKQueryError
				if (rtkError.data?.message) {
					errorMessage = rtkError.data.message
				} else if (rtkError.message) {
					errorMessage = rtkError.message
				}
			} else if (typeof error === 'string') {
				errorMessage = error
			}

			toast.error('Ошибка', {
				description: errorMessage,
			})
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='container mx-auto space-y-4 py-4 dark:text-amber-100'
		>
			<Input
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder='Заголовок'
				className='dark:white'
				required
			/>

			<Input
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				placeholder='Описание'
			/>

			<CategorySelect
				categoryId={categoryId}
				setCategoryId={setCategoryId}
			/>

			<div className='m-auto max-w-7xl'>
				<SimpleEditor content={content} setContent={setContent} />
			</div>

			<Input
				value={tags}
				onChange={(e) => setTags(e.target.value)}
				placeholder='Теги (через пробел!)'
			/>

			<Input
				value={coverImage ?? ''}
				onChange={(e) => setCoverImage(e.target.value)}
				placeholder='URL обложки (необязательно)'
			/>

			<Button type='submit' className='w-full' disabled={isLoading}>
				{isLoading
					? 'Загрузка...'
					: article
						? 'Сохранить изменения'
						: 'Создать статью'}
			</Button>
		</form>
	)
}
