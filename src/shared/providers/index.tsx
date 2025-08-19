'use client'

import { Provider } from 'react-redux'
import { store } from '../store'
import { ThemeProvider } from './theme-provider'
import { NextIntlClientProvider } from 'next-intl'
import { Toaster } from '../ui/ui-kit/sonner'
import type { Locale } from '@/features/locale-switcher'
import type { AbstractIntlMessages } from 'next-intl'

interface ProvidersProps {
	children: React.ReactNode
	locale: Locale
	messages: AbstractIntlMessages
}

export function Providers({ children, locale, messages }: ProvidersProps) {
	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			<ThemeProvider defaultTheme='dark'>
				<Provider store={store}>
					{children}
					<Toaster richColors closeButton />
				</Provider>
			</ThemeProvider>
		</NextIntlClientProvider>
	)
}
