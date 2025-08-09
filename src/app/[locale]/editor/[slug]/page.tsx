import EditorPage from '@/views/editor/EditorPage'
import { generateArticleMetadata } from '@/shared/lib/seo'
import { fetchArticle } from '@/entities/article/api/server'
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
	const article = await fetchArticle(slug)
	return generateArticleMetadata(article)
}

export default async function Editor({ params }: { params: Params }) {
	const { slug } = await params
	const article = await fetchArticle(slug)

	if (!article) notFound()

	return <EditorPage article={article} isNew={false} />
}
