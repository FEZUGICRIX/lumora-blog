import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { LoginPage } from '@/screens/auth/login'

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('Meta.Auth.Login')

	return {
		title: t('title'),
		description: t('subtitle'),
	}
}

export default async function Login() {
	return <LoginPage />
}
