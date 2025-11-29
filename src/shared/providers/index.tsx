'use client'

import { NextIntlClientProvider } from 'next-intl'
import type { AbstractIntlMessages } from 'next-intl'

import type { Locale } from '@/features/locale-switcher'

import { Toaster } from '../ui/ui-kit/sonner'
import { TanstackQueryProvider } from './TanstackQueryProvider'
import { ThemeProvider } from './theme-provider'

interface ProvidersProps {
	children: React.ReactNode
	locale: Locale
	messages: AbstractIntlMessages
	timeZone: string
}

export function Providers({
	children,
	locale,
	messages,
	timeZone,
}: ProvidersProps) {
	return (
		<NextIntlClientProvider
			locale={locale}
			messages={messages}
			timeZone={timeZone}
		>
			<ThemeProvider defaultTheme='dark'>
				<TanstackQueryProvider>
					{children}
					<Toaster richColors closeButton />
				</TanstackQueryProvider>
			</ThemeProvider>
		</NextIntlClientProvider>
	)
}
