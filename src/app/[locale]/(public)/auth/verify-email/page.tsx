import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { VerifyEmailPage } from '@/screens/auth/verify-email'

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('Meta.Auth.VerifyEmail')

	return {
		title: t('title'),
		description: t('subtitle'),
	}
}

export default function VerifyEmail() {
	return <VerifyEmailPage />
}
