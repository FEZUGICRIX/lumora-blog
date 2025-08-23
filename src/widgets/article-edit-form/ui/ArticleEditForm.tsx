'use client'

import { useState, type FormEvent } from 'react'
import { useCreateArticleMutation } from '@/entities/article/api'
import { toast } from 'sonner'
import { Input } from '@/shared/ui/ui-kit/input'
import { Textarea } from '@/shared/ui/ui-kit/textarea'
import { Button } from '@/shared/ui/ui-kit/button'
import type { FullArticle } from '@/entities/article'
import { CategorySelect } from '@/entities/category/ui/CategorySelect' // TODO: НАстроить реэкспорт
import type { CategoryMinimal } from '@/entities/category'

interface ArticleEditFormProps {
	article?: FullArticle | null
}

export function ArticleEditForm({ article }: ArticleEditFormProps) {
	// TODO: Настроить react-hook-form для формы и zod validation
	const [title, setTitle] = useState(article?.title ?? '')
	const [description, setDescription] = useState(
		article?.description ?? '',
	)
	const [content, setContent] = useState(article?.content ?? '')
	const [tags, setTags] = useState(article?.tags.join(', ') ?? '')
	const [coverImage, setcoverImage] = useState(article?.coverImage ?? '')
	const [createArticle, { isLoading /* error */ }] =
		useCreateArticleMutation()
	const [categoryId, setCategoryId] = useState(article?.category?.id || null)

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		const payload = {
			title,
			description,
			content,
			tags: tags.split(',').map((tag) => tag.trim()),
			coverImage,
			categoryId,
			authorId: 'cd71a9d7-e347-4ca2-bb46-a2c6eeb39f88',
		}

		try {
			const response = await createArticle({ input: payload }).unwrap()
			toast.success('Успешно создано', {
				description: 'Статья создана',
				action: {
					label: 'Перейти на страницу',
					onClick: () => console.log(''), // TODO: Navigate to the article page
				},
			})
		} catch (error) {
			console.error(error)
			toast.error('Статья не создана', {
				description: 'При создании статьи произошла ошибка',
			})
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='container mx-auto max-w-2xl space-y-4 py-4 dark:text-amber-100'
		>
			<Input
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder='Title'
				className='dark:white'
			/>

			<Input
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				placeholder='description'
			/>

			<CategorySelect
				categoryId={categoryId}
				setCategoryId={setCategoryId}
			/>

			<Textarea
				value={content}
				onChange={(e) => setContent(e.target.value)}
				placeholder='Content'
				rows={8}
			/>

			<Input
				value={tags}
				onChange={(e) => setTags(e.target.value)}
				placeholder='Tags (comma separated)'
			/>

			<Input
				value={coverImage}
				onChange={(e) => setcoverImage(e.target.value)}
				placeholder='Cover image URL (optional)'
			/>

			<Button type='submit' className='w-full' disabled={isLoading}>
				{isLoading
					? 'Создание...'
					: article
						? 'Сохранить изменения'
						: 'Создать статью'}
			</Button>
		</form>
	)
}
