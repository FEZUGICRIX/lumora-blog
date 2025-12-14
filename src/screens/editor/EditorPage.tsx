'use client'

import type { FullArticle } from '@/entities/article'
import { useGetProfile } from '@/entities/user/api'

import { ArticleEditForm, useArticleForm } from '@/widgets/article-edit-form'

import { PageHero } from '@/shared/ui/custom'

import { useFormPreview } from './hooks/use-form-preview'

type EditorPageProps =
	| { isNew: true; article?: null }
	| { isNew: false; article: FullArticle }

export const EditorPage = ({ article, isNew = false }: EditorPageProps) => {
	const { coverImage, author, createdAt } = article ?? {}
	const { user } = useGetProfile()

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
				// TODO: поставить номральный мок
				image={
					coverImage ??
					'https://zastavki.gas-kvas.com/uploads/posts/2024-09/zastavki-gas-kvas-com-hno1-p-zastavki-na-rabochii-stol-bogataya-zhizn-2.jpg'
				}
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
