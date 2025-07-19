export const availableLocales = [
	{ label: 'English', value: 'en' },
	{ label: 'Русский', value: 'ru' },
] as const

export type Locale = (typeof availableLocales)[number]['value']

export const defaultLocale: Locale = 'en'
