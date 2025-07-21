'use client'

import { availableLocales } from '../model/constants'
import { type Locale } from '../model/types'
import { CustomSelect } from '@/shared/ui/CustomSelect'
import { useLocale } from 'next-intl'
import {
	useRouter,
	usePathname,
	redirect,
} from '@/shared/config/i18n/navigation'
import { isLocale } from '../lib/is-locale'

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
