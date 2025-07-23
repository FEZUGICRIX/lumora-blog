import { mockArticles } from '@/widgets/article-list'
import type { ArticleCardProps } from '@/entities/article'

export async function getArticleBySlug(
	slug: string,
): Promise<ArticleCardProps | undefined> {
	const article = mockArticles.find((article) => article.slug === slug)
	return article ?? undefined
}
