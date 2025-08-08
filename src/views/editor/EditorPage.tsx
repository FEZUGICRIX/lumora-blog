import { ArticleEditForm } from '@/widgets/article-edit-form'
import { BackgroundImage } from '@/shared/assets/images'
import { PageHero } from '@/shared/ui/PageHero'
import type { FullArticle } from '@/entities/article'

type EditorPageProps =
	| { isNew: true; article?: null }
	| { isNew: false; article: FullArticle }

const EditorPage = ({ article, isNew = false }: EditorPageProps) => {
	const {
		title,
		// slug,
		description,
		coverImage,
		// readingTime,
		// category,
		// tags,
		// views,
		// comments,
		// likes,
		author,
		createdAt,
	} = article ?? {}

	return (
		<div>
			<PageHero
				title={title ?? 'Создать новую статью'}
				subtitle={description ?? 'Ниже заполните поля и нажмите сохранить'}
				image={coverImage ?? BackgroundImage}
				author={author}
				createdAt={createdAt}
			/>

			<div className='container mx-auto my-4'>
				<h1 className='mb-4 text-center text-2xl font-bold text-amber-100'>
					{isNew ? 'Новая статья' : 'Редактировать статью'}
				</h1>
			</div>

			<ArticleEditForm article={article} />
		</div>
	)
}

export default EditorPage
