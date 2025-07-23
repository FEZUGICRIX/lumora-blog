import ArticlePage from '@/views/article/ArticlePage'
import { getArticleBySlug } from '@/entities/article'
import { generateArticleMetadata } from '@/shared/lib/seo/generate-article-metadata'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { ArticlePageParams } from '@/shared/types/page-params'

export async function generateMetadata({
	params,
}: ArticlePageParams): Promise<Metadata> {
	// @ts-ignore TS80007 — params is async proxy in Next.js
	const { slug } = await params
	const article = await getArticleBySlug(slug)
	return generateArticleMetadata(article)
}

export default async function Article({ params }: ArticlePageParams) {
	// @ts-ignore TS80007 — params is async proxy in Next.js
	const { slug } = await params
	const article = await getArticleBySlug(slug)

	if (!article) {
		notFound()
	}

	return <ArticlePage {...article} />
}
