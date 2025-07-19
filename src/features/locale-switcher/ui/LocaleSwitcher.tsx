'use client'

import { CustomSelect } from '@/shared/ui/CustomSelect'
import { availableLocales, type Locale } from '../model/locales'
import { useLocale } from '../lib/use-locale'

export const LocaleSwitcher = () => {
	const { locale, setLocale } = useLocale()

	return (
		<CustomSelect
			value={locale}
			onChange={(val) => setLocale(val as Locale)}
			options={availableLocales}
		/>
	)
}
