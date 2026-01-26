import type { UseFormReturn } from 'react-hook-form'
import { useTranslations } from 'next-intl'

import type { FullArticle } from '@/entities/article'
import type { CategoryMinimal } from '@/entities/category'

import type { ArticleFormValues } from '@/widgets/article-edit-form'

export const useFormPreview = (
	form: UseFormReturn<ArticleFormValues>,
	article?: FullArticle | null,
	categories?: CategoryMinimal[] | null,
	isNew: boolean = false,
) => {
	const t = useTranslations('screens.editor.preview')

	const title = form.watch('title')
	const description = form.watch('description')
	const coverImage = form.watch('coverImage')
	const categoryId = form.watch('categoryId')

	const demoTitle =
		title || (isNew ? t('createNewTitle') : article?.title) || t('untitled')

	const demoDescription =
		description ||
		(isNew
			? t('fillFieldsDescription')
			: article?.description) ||
		t('noDescription')

	const demoCoverImage = coverImage || null

	const demoCategory =
		(categories && categories.find(category => category.id == categoryId)) ||
		null

	return {
		demoTitle,
		demoDescription,
		demoCoverImage,
		demoCategory,
	}
}
