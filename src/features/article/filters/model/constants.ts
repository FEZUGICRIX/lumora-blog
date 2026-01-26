import { useTranslations } from 'next-intl'

import { ArticleSortBy } from '@/shared/api/graphql/__generated__/documents'

import type { SortOption } from './types'

// TODO: Редактировать типизацию и значения сортировки
export const useSortOptions = () => {
	const t = useTranslations('entities.article.filters.sort')

	return [
		{ value: ArticleSortBy.CreatedAt as SortOption, label: t('newest') },
		{ value: ArticleSortBy.Views as SortOption, label: t('popular') },
		{ value: ArticleSortBy.Comments as SortOption, label: t('discussed') },
	]
}
