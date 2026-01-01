import merge from 'lodash/merge'
import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'

import { routing } from './routing'

const slices = [
	'features/auth/register',
	'features/auth/login',
	'features/auth/new-password',
	'features/auth/password-recovery',
	'features/auth/verify-email',
]

export default getRequestConfig(async ({ requestLocale }) => {
	const requested = await requestLocale
	const locale = hasLocale(routing.locales, requested)
		? requested
		: routing.defaultLocale
	const messages = {}

	await Promise.all(
		slices.map(async path => {
			try {
				const mod = await import(`../../../${path}/locales/${locale}.json`)
				merge(messages, mod.default) // Deep-merge nested
			} catch {
				console.warn(`Missing translations for ${path} in ${locale}`)
			}
		}),
	)

	// Global merge
	try {
		const globalMod = await import(`./locales/global/${locale}.json`)
		merge(messages, globalMod.default)
	} catch {}

	return { locale, timeZone: 'UTC', messages }
})
