import type { Metadata } from 'next'
import type { Article } from '@/entities/article'
import { ARTICLE_NOT_FOUND_METADATA } from '@/shared/constants'

export function generateArticleMetadata(
	article?: Article | null,
): Metadata {
	if (!article) return ARTICLE_NOT_FOUND_METADATA

	return {
		title: article.title,
		description: article.excerpt,
	}
}
