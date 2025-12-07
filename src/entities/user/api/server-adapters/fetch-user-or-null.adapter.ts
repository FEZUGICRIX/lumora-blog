import { type UserPublicProfile } from '@/shared/api/graphql/__generated__/documents'

import { getUserPublicService } from '../services/get-user-public.service'

/**
 * Адаптер для Server Component: Преобразует 404 (Not Found Error) в null.
 * Все остальные ошибки выбрасываются.
 */
export const fetchUserPublicOrNull = async ({
	username,
}: {
	username: string
}): Promise<UserPublicProfile | null> => {
	try {
		// 💡 Вызываем чистый сервис
		const user = await getUserPublicService({ username })
		return user
	} catch (error) {
		// 💡 КЛЮЧЕВОЙ ШАГ: Ловим ошибку и проверяем код/сообщение
		const errorMessage = error instanceof Error ? error.message : String(error)

		// Проверяй конкретный код ошибки (если NestJS его отдает) или сообщение
		if (errorMessage) {
			console.log(
				`[RSC] Пользователь ${username} не найден (404), возвращаем null.`,
			)
			return null
		}

		// Если это не 404, выбрасываем ошибку, чтобы Next.js ее отобразил (Internal Server Error)
		throw error
	}
}
