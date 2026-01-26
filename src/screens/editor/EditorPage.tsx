'use client'

import { useTranslations } from 'next-intl'

import { ArticleHero, type FullArticle } from '@/entities/article'
import { useGetCategories } from '@/entities/category/api'
import { useGetProfile } from '@/entities/user/api'

import { ArticleEditForm, useArticleForm } from '@/widgets/article-edit-form'

import { PageHero } from '@/shared/ui/custom'

import { useFormPreview } from './hooks/use-form-preview'

type EditorPageProps =
	| { isNew: true; article?: null }
	| { isNew: false; article: FullArticle }

export const EditorPage = ({ article, isNew = false }: EditorPageProps) => {
	const { coverImage, author } = article ?? {}
	const { user } = useGetProfile()
	const { categories } = useGetCategories()
	const t = useTranslations('screens.editor')

	const { form, onSubmit, isEdit } = useArticleForm({
		article,
		user,
	})

	const { demoTitle, demoDescription, demoCoverImage, demoCategory } =
		useFormPreview(form, article, categories, isNew)

	if (!user) return null

	return (
		<div>
			<PageHero image={demoCoverImage}>
				<ArticleHero
					title={demoTitle}
					hasImage={!!coverImage}
					description={demoDescription}
					category={demoCategory || article?.category}
					readingTime={article?.readingTime}
					createdAt={article?.createdAt ?? new Date()}
					author={
						author || {
							id: user.id,
							username: user.username,
							displayName: user.displayName,
							avatarUrl: user.avatarUrl,
						}
					}
				/>
			</PageHero>

			<div className='container mx-auto my-4'>
				<h1 className='mb-4 text-center text-2xl font-bold'>
					{isNew ? t('newArticle') : t('editArticle')}
				</h1>
			</div>

			<ArticleEditForm form={form} onSubmit={onSubmit} isEdit={isEdit} />
		</div>
	)
}
