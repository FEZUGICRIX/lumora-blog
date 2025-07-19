'use client'

import { useState } from 'react'
import { defaultLocale, type Locale } from '../model/locales'

export const useLocale = () => {
	const [locale, setLocale] = useState<Locale>(defaultLocale)
	return { locale, setLocale }
}
