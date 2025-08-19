import type { SortOption } from './types'
import { ArticleSortBy } from '@/shared/api/graphql/__generated__/graphql'

// TODO: Редактировать типизацию и значения сортировки
export const sortOptions: { value: SortOption; label: string }[] = [
	{ value: ArticleSortBy.CreatedAt, label: 'Новые' },
	{ value: ArticleSortBy.Views, label: 'Популярные' },
	{ value: ArticleSortBy.Likes, label: 'По лайкам' },
	{ value: ArticleSortBy.Comments, label: 'Обсуждаемые' },
]
