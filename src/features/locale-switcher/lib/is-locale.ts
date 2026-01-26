import { availableLocales } from '../model/constants'
import { type Locale } from '../model/locale.types'

export const isLocale = (value: string): value is Locale =>
	availableLocales.some(locale => locale.value === value)
