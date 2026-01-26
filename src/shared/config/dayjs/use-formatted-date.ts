'use client'

import { useLocale } from 'next-intl'
import { useMemo } from 'react'

import { dayjs } from './index'

export function useFormattedDate(
	date: string | number | Date,
	format = 'D MMMM YYYY',
): string {
	const locale = useLocale()

	const formatted = useMemo(() => {
		if (!date) return '' // Обработка пустого значения

		return dayjs
			.utc(date) // 1. Парсим как UTC (как рендерит сервер)
			.locale(locale) // 2. Устанавливаем локаль для форматирования (en/ru)
			.local() // 3. Конвертируем в локальный часовой пояс пользователя (только на клиенте)
			.format(format) // 4. Форматируем
	}, [date, format, locale])

	return formatted
}
