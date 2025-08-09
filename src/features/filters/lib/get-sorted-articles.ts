import type { FullArticle } from '@/entities/article'
import type { SortOption } from '../model/types'

export function getSortedArticles(
	articles: FullArticle[],
	sort: SortOption,
): FullArticle[] {
	return [...articles].sort((a, b) => {
		switch (sort) {
			case 'views':
				return b.views - a.views
			case 'likes':
				return b.likes - a.likes
			// case 'comments':
			// 	return b.comments - a.comments
			case 'date':
			default:
				return (
					new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
				)
		}
	})
}
