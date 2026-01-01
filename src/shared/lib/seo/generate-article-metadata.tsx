import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import type { FullArticle } from '@/entities/article'

export async function generateArticleMetadata(
	article?: FullArticle | null,
	locale?: string,
): Promise<Metadata> {
	if (!article) {
		if (locale) {
			const t = await getTranslations({
				locale,
				namespace: 'screens.editor.metadata.notFound',
			})
			return {
				title: t('title'),
				description: t('description'),
			}
		}
	}

	return {
		title: article && article.title,
		description: article && article.description,
	}
}
