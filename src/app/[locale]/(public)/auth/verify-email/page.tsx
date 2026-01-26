import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { VerifyEmailPage } from '@/screens/auth/verify-email'

import type { LocalizedPageProps } from '@/shared/types'

export async function generateMetadata({
	params,
}: LocalizedPageProps): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'screens.auth.verifyEmail.metadata',
	})

	return {
		title: t('title'),
		description: t('description'),
	}
}

export default function VerifyEmail() {
	return <VerifyEmailPage />
}
