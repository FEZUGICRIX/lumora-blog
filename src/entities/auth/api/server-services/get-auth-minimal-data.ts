// src/entities/auth/api/server-services/get-auth-minimal-data.ts
import { cookies } from 'next/headers'

import { graphqlClient } from '@/shared/api/graphql-client'
// ⚠️ Ключевой импорт для RSC
import {
	CurrentAuthMinimalDocument,
	type CurrentAuthMinimalQuery,
} from '@/shared/api/graphql/__generated__/documents'

type AuthData = CurrentAuthMinimalQuery['currentAuthMinimal']

/**
 * Сервис для получения минимальных данных авторизованного пользователя в контексте RSC.
 * Выполняет запрос к легкому резолверу currentAuthMinimal, прокидывая куки.
 */
export const getAuthMinimalDataService = async (): Promise<AuthData | null> => {
	const cookiesStore = await cookies()
	const cookieHeader = cookiesStore.toString()

	// Если нет куки, нет смысла отправлять запрос
	if (!cookieHeader) {
		return null
	}

	// 💡 Адаптация: Передаем динамический заголовок 'Cookie'
	const headers = {
		Cookie: cookieHeader,
		// Другие заголовки, если нужны
	}

	try {
		const { currentAuthMinimal: result } =
			await graphqlClient.request<CurrentAuthMinimalQuery>(
				CurrentAuthMinimalDocument,
				{}, // Переменные запроса (нет)
				headers, // 💡 Заголовки, специфичные для этого запроса
			)

		return result
	} catch (error) {
		// 💡 Обработка ошибки 401/Unauthorized, выброшенной NestJS Guard'ом
		// Если Guard не авторизовал запрос, graphql-client кинет ошибку.
		console.error('AuthMinimal Fetch Error:', error)
		return null
	}
}
