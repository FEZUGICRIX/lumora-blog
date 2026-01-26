import { createServerGraphqlClient } from '@/shared/api/graphql-server'
import {
	GetArticleBySlugDocument,
	type GetArticleBySlugQuery,
	type GetArticleBySlugQueryVariables,
} from '@/shared/api/graphql/__generated__/documents'

/**
 * Адаптер для Server Component: Преобразует 404 (Not Found Error) в null.
 * Все остальные ошибки выбрасываются.
 */
export const fetchArticleOrNull = async ({
	slug,
}: {
	slug: GetArticleBySlugQueryVariables
}): Promise<GetArticleBySlugQuery['getArticleBySlug'] | null> => {
	try {
		const client = await createServerGraphqlClient()

		// 💡 Вызываем чистый сервис
		const { getArticleBySlug: article } = await client.request<
			GetArticleBySlugQuery,
			GetArticleBySlugQueryVariables
		>(GetArticleBySlugDocument, slug)

		return article
	} catch (error) {
		// 💡 КЛЮЧЕВОЙ ШАГ: Ловим ошибку и проверяем код/сообщение
		const errorMessage = error instanceof Error ? error.message : String(error)

		// Проверяй конкретный код ошибки (если NestJS его отдает) или сообщение
		if (errorMessage) {
			console.log(
				`[RSC] Статья со slug ${slug} не найдена (404), возвращаем null.`,
			)
			return null
		}

		// Если это не 404, выбрасываем ошибку, чтобы Next.js ее отобразил (Internal Server Error)
		throw error
	}
}
