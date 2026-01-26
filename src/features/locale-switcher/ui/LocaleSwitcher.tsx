'use client'

import { useLocale } from 'next-intl'

import {
	redirect,
	usePathname,
	useRouter,
} from '@/shared/config/i18n/navigation'
import { CustomSelect } from '@/shared/ui/custom'

import { isLocale } from '../lib'
import { availableLocales, type Locale } from '../model'

export const LocaleSwitcher = () => {
	const rawLocale = useLocale()
	const router = useRouter()
	const pathname = usePathname()

	const locale: Locale = isLocale(rawLocale) ? rawLocale : 'en'

	const changeLanguage = (newLocale: Locale) => {
		router.replace(
			redirect({
				href: pathname,
				locale: newLocale,
			}),
		)
	}

	return (
		<CustomSelect<Locale>
			value={locale}
			onChange={changeLanguage}
			options={availableLocales}
		/>
	)
}
