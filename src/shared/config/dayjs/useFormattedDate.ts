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
		dayjs.locale(locale)
		return dayjs(date).format(format)
	}, [date, format, locale])

	return formatted
}
