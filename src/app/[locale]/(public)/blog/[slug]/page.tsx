import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ArticlePage } from '@/screens/article'

import type { Locale } from '@/features/locale-switcher'

import { fetchArticleOrNull } from '@/entities/article/api/server-adapters'

import { generateArticleMetadata } from '@/shared/lib/seo/generate-article-metadata'

type Params = Promise<{
	slug: string
	locale: Locale
}>

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
	const { locale, slug } = await params
	const article = await fetchArticleOrNull({ slug: { slug } })
	return await generateArticleMetadata(article, locale)
}

export default async function Article({ params }: { params: Params }) {
	const { slug } = await params
	const article = await fetchArticleOrNull({ slug: { slug } })

	if (!article) {
		notFound()
	}

	return <ArticlePage article={article} />
}
