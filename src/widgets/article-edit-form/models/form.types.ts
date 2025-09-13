import type { z } from 'zod'
import { articleFormSchema } from '../lib/validations'
import type { FullArticle } from '@/entities/article'

// Тип для Tiptap контента с индексной сигнатурой
export interface TiptapContent extends Record<string, unknown> {
	type: string
	content?: unknown[]
	attrs?: Record<string, unknown>
	marks?: Array<{ type: string; attrs?: Record<string, unknown> }>
	text?: string
}

// Базовый тип для формы
export type ArticleFormValues = {
	title: string
	description: string
	tags: string
	coverImage: string | null
	categoryId: string
	content: Record<string, unknown> // ← Используем Record<string, unknown>
}

// Тип из Zod схемы
export type ArticleFormData = z.infer<typeof articleFormSchema>

// Пропсы для хука формы
export interface UseArticleFormProps {
	article?: FullArticle | null
	onSuccess?: () => void
}

// Пропсы для компонента формы
export interface ArticleEditFormProps {
	article?: FullArticle | null
	onSuccess?: () => void
	onCancel?: () => void
	isLoading?: boolean
}
