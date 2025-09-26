'use client'

import {
	ArticleEditForm,
	useArticleForm,
} from '@/widgets/article-edit-form'
import type { FullArticle } from '@/entities/article'
import { useFormPreview } from './hooks/use-form-preview'
import { PageHero } from '@/shared/ui/PageHero'
import { toast } from 'sonner'
import { BackgroundImage } from '@/shared/assets/images'

type EditorPageProps =
	| { isNew: true; article?: null }
	| { isNew: false; article: FullArticle }

const EditorPage = ({ article, isNew = false }: EditorPageProps) => {
	const { coverImage, author, createdAt } = article ?? {}

	const { form, onSubmit, isEdit } = useArticleForm({
		article,
		onSuccess: () => {
			toast.success(isEdit ? 'Статья обновлена' : 'Статья создана')
		},
	})

	const { demoTitle, demoDescription } = useFormPreview(
		form,
		article,
		isNew,
	)

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

export default EditorPage
