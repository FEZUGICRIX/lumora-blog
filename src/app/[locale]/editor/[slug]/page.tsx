import EditorPage from '@/views/editor/EditorPage'
import { generateArticleMetadata } from '@/shared/lib/seo/generate-article-metadata'
import { fetchArticle } from '@/entities/article/api/server'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { Locale } from '@/features/locale-switcher'

type Props = {
	params: {
		slug: string
		locale: Locale
	}
}

export async function generateMetadata({
	params,
}: Props): Promise<Metadata> {
	const { slug } = params
	const article = await fetchArticle(slug)
	return generateArticleMetadata(article)
}

export default async function Editor({ params }: Props) {
	const { slug } = params
	const article = await fetchArticle(slug)

	if (!article) notFound()

	return <EditorPage article={article} isNew={false} />
}
