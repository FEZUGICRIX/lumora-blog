import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { EditorPage } from '@/screens/editor'

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'screens.editor.metadata.createNew',
	})

	return {
		title: t('title'),
		description: t('description'),
	}
}

export default async function Editor() {
	return <EditorPage isNew />
}
