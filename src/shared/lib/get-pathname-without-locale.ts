import { type Locale, routing } from '@/shared/config/i18n'

/**
 * Извлекает чистый pathname, удаляя префикс локали.
 * Гарантированно работает в Edge Runtime, используя только чистый JS.
 */
export const getPathnameWithoutLocale = (pathname: string): string => {
	const { locales } = routing
	// 1. Разбиваем путь и удаляем пустые строки (e.g. '/' или двойные слеши)
	const segments = pathname.split('/').filter(Boolean)

	// 2. Проверяем, является ли первый сегмент одной из наших локалей
	if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
		// 3. Удаляем сегмент локали (slice(1)) и собираем путь, добавляя ведущий '/'
		return '/' + segments.slice(1).join('/')
	}

	// 4. Если локаль не найдена (например, путь '/'), возвращаем исходный путь
	return pathname
}
