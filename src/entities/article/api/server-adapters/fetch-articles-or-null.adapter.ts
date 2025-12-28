import { createServerGraphqlClient } from '@/shared/api/graphql-server'
import {
	GetArticlesDocument,
	type GetArticlesQuery,
	type GetArticlesQueryVariables,
} from '@/shared/api/graphql/__generated__/documents'

/**
 * Адаптер для Server Component: Преобразует 404 (Not Found Error) в null.
 * Все остальные ошибки выбрасываются.
 */
export const fetchArticlesOrNull = async (
	params: GetArticlesQueryVariables,
): Promise<GetArticlesQuery['getArticles'] | null> => {
	try {
		const client = await createServerGraphqlClient()

		// 💡 Вызываем чистый сервис
		const { getArticles: articles } = await client.request<
			GetArticlesQuery,
			GetArticlesQueryVariables
		>(GetArticlesDocument, { ...params })

		return articles
	} catch (error) {
		// 💡 КЛЮЧЕВОЙ ШАГ: Ловим ошибку и проверяем код/сообщение
		const errorMessage = error instanceof Error ? error.message : String(error)

		// Проверяй конкретный код ошибки (если NestJS его отдает) или сообщение
		if (errorMessage) {
			console.log(`[RSC] Возникла ошибка при загрузке статей`)
			return null
		}

		// Если это не 404, выбрасываем ошибку, чтобы Next.js ее отобразил (Internal Server Error)
		throw error
	}
}
