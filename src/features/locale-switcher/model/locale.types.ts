import type { availableLocales } from './constants'

export type Locale = (typeof availableLocales)[number]['value']
