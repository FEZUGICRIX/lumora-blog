import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { LoginPage } from '@/screens/auth/login'

import type { LocalizedPageProps } from '@/shared/types'

export async function generateMetadata({
	params,
}: LocalizedPageProps): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'features.auth.login.metadata',
	})

	return {
		title: t('title'),
		description: t('description'),
	}
}

export default async function Login() {
	return <LoginPage />
}
