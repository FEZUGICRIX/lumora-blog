import ArticlePage from '@/views/article/ArticlePage'
import { getArticleBySlug } from '@/entities/article'
import { generateArticleMetadata } from '@/shared/lib/seo/generate-article-metadata'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { Locale } from '@/features/locale-switcher'

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
	const article = await getArticleBySlug(slug)
	return generateArticleMetadata(article)
}

export default async function Article({ params }: { params: Params }) {
	const { slug } = await params
	const article = await getArticleBySlug(slug)

	if (!article) {
		notFound()
	}

	return <ArticlePage {...article} />
}
