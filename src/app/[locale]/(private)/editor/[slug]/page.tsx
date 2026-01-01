import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { EditorPage } from '@/screens/editor'

import type { Locale } from '@/features/locale-switcher'

import { getArticleBySlugService } from '@/entities/article'

import { generateArticleMetadata } from '@/shared/lib/seo'

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
	const article = await getArticleBySlugService({ slug })
	return await generateArticleMetadata(article, locale)
}

export default async function Editor({ params }: { params: Params }) {
	const { slug } = await params
	const article = await getArticleBySlugService({ slug })

	if (!article) notFound()

	return <EditorPage article={article} isNew={false} />
}
