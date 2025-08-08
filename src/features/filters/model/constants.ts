import type { Category, SortOption } from './types'

export const categories: Category[] = [
	'frontend',
	'backend',
	'design',
	'career',
	'fullstack',
]

export const sortOptions: { value: SortOption; label: string }[] = [
	{ value: 'date', label: 'По дате' },
	{ value: 'views', label: 'Популярные' },
	{ value: 'likes', label: 'По лайкам' },
	{ value: 'comments', label: 'Обсуждаемые' },
]
