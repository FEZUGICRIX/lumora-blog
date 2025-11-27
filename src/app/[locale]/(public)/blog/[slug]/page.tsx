import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ArticlePage } from '@/screens/article'

import type { Locale } from '@/features/locale-switcher'

import { getArticleBySlugService } from '@/entities/article/api'

import { generateArticleMetadata } from '@/shared/lib/seo/generate-article-metadata'

type Params = Promise<{
	slug: string
	locale: Locale
}>

export async function generateMetadata({
	params,
}: {
	params: Params
}): Promise<Metadata> {
	const { slug } = await params
	const article = await getArticleBySlugService({ slug })
	return generateArticleMetadata(article)
}

export default async function Article({ params }: { params: Params }) {
	const { slug } = await params
	const article = await getArticleBySlugService({ slug })

	if (!article) {
		notFound()
	}

	return <ArticlePage article={article} />
}
