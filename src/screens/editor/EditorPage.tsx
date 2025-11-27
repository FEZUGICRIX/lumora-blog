'use client'

import type { FullArticle } from '@/entities/article'
import { useGetUser } from '@/entities/user/api/hooks'

import { ArticleEditForm, useArticleForm } from '@/widgets/article-edit-form'

import { BackgroundImage } from '@/shared/assets/images'
import { PageHero } from '@/shared/ui/custom'

import { useFormPreview } from './hooks/use-form-preview'

type EditorPageProps =
	| { isNew: true; article?: null }
	| { isNew: false; article: FullArticle }

export const EditorPage = ({ article, isNew = false }: EditorPageProps) => {
	const { coverImage, author, createdAt } = article ?? {}
	const { user } = useGetUser()

	const { form, onSubmit, isEdit } = useArticleForm({
		article,
		user,
	})

	const { demoTitle, demoDescription } = useFormPreview(form, article, isNew)

	if (!user) return null

	return (
		<div>
			<PageHero
				title={demoTitle}
				subtitle={demoDescription}
				image={coverImage ?? BackgroundImage}
				author={author}
				createdAt={createdAt}
			/>
			<div className='container mx-auto my-4'>
				<h1 className='mb-4 text-center text-2xl font-bold'>
					{isNew ? 'Новая статья' : 'Редактировать статью'}
				</h1>
			</div>

			<ArticleEditForm form={form} onSubmit={onSubmit} isEdit={isEdit} />
		</div>
	)
}
