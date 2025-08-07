import EditorPage from '@/views/editor/EditorPage'
import type { Metadata } from 'next'
import { CREATE_NEW_ARTICLE_METADATA } from '@/shared/constants'

export async function generateMetadata(): Promise<Metadata> {
	return CREATE_NEW_ARTICLE_METADATA
}

export default async function Editor() {
	return <EditorPage isNew />
}
