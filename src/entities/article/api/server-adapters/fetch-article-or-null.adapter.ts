import type { GetArticleBySlugQuery } from '@/shared/api/graphql/__generated__/documents'

import { getArticleBySlugService } from '../services'

/**
 * Адаптер для Server Component: Преобразует 404 (Not Found Error) в null.
 * Все остальные ошибки выбрасываются.
 */
export const fetchArticleOrNull = async ({
	slug,
}: {
	slug: string
}): Promise<GetArticleBySlugQuery['getArticleBySlug'] | null> => {
	try {
		// 💡 Вызываем чистый сервис
		const article = await getArticleBySlugService({ slug })
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
