import { type Locale } from '../model/types'
import { availableLocales } from '../model/constants'

export const isLocale = (value: string): value is Locale =>
	availableLocales.some((locale) => locale.value === value)
