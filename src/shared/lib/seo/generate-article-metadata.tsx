import type { Metadata } from 'next'
import type { FullArticle } from '@/entities/article'
import { ARTICLE_NOT_FOUND_METADATA } from '@/shared/constants'

export function generateArticleMetadata(
	article?: FullArticle | null,
): Metadata {
	if (!article) return ARTICLE_NOT_FOUND_METADATA

	return {
		title: article.title,
		description: article.description,
	}
}
