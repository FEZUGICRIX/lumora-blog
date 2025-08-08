'use client'

import { useState, type FormEvent } from 'react'
import { useCreateArticleMutation } from '@/entities/article/api'
import { Input } from '@/shared/ui/ui-kit/input'
import { Textarea } from '@/shared/ui/ui-kit/textarea'
import { Button } from '@/shared/ui/ui-kit/button'
import type { Article } from '@/entities/article'
import { toast } from 'sonner'

type Props = {
	article?: Article | null
}

export function ArticleEditForm({ article }: Props) {
	const [title, setTitle] = useState(article?.title ?? '')
	const [description, setDescription] = useState(
		article?.description ?? '',
	)
	const [content, setContent] = useState(article?.content ?? '')
	const [tags, setTags] = useState(article?.tags.join(', ') ?? '')
	const [coverImage, setcoverImage] = useState(article?.coverImage ?? '')
	const [createArticle, { isLoading, error }] = useCreateArticleMutation()

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		const payload = {
			title,
			description,
			content,
			tags: tags.split(',').map((tag) => tag.trim()),
			coverImage:
				typeof coverImage === 'string' ? coverImage : coverImage?.src,
			authorId: 'cd71a9d7-e347-4ca2-bb46-a2c6eeb39f88',
			categoryId: '05f33432-ea73-40a2-9cf9-9fb4a595fec5',
		}

		console.log('Submitting:', payload)

		try {
			const response = await createArticle({ input: payload }).unwrap()
			toast('Успешно создано', {
				description: 'Статья создана',
				action: {
					label: 'Перейти на страницу статьи',
					onClick: () => console.log('') // TODO: Navigate to the article page
				},
			})
			console.log(response)
		} catch (error) {
			console.error(error)
			toast('Статья не создана', {
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
				value={
					typeof coverImage === 'string'
						? coverImage
						: (coverImage?.src ?? '')
				}
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
