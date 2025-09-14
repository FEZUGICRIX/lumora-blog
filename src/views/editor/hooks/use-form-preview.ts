import type { FullArticle } from '@/entities/article'
import type { ArticleFormValues } from '@/widgets/article-edit-form'
import type { UseFormReturn } from 'react-hook-form'

export const useFormPreview = (
	form: UseFormReturn<ArticleFormValues>,
	article?: FullArticle | null,
	isNew: boolean = false,
) => {
	const title = form.watch('title')
	const description = form.watch('description')

	const demoTitle =
		title ||
		(isNew ? 'Создать новую статью' : article?.title) ||
		'Без названия'

	const demoDescription =
		description ||
		(isNew
			? 'Ниже заполните поля и нажмите сохранить'
			: article?.description) ||
		'Описание отсутствует'

	return {
		demoTitle,
		demoDescription,
	}
}
