'use client'

import { NextIntlClientProvider } from 'next-intl'
import type { AbstractIntlMessages } from 'next-intl'
import { Provider } from 'react-redux'

import type { Locale } from '@/features/locale-switcher'

import { store } from '../store'
import { Toaster } from '../ui/ui-kit/sonner'
import { TanstackQueryProvider } from './TanstackQueryProvider'
import { ThemeProvider } from './theme-provider'

interface ProvidersProps {
	children: React.ReactNode
	locale: Locale
	messages: AbstractIntlMessages
}

export function Providers({ children, locale, messages }: ProvidersProps) {
	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			<ThemeProvider defaultTheme='dark'>
				<TanstackQueryProvider>
					<Provider store={store}>
						{children}
						<Toaster richColors closeButton />
					</Provider>
				</TanstackQueryProvider>
			</ThemeProvider>
		</NextIntlClientProvider>
	)
}
