import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import LoginPage from '@/views/auth/login/LoginPage'

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('Auth.Login')

	return {
		title: t('title'),
		description: t('subtitle'),
	}
}
export default async function Login() {
	return <LoginPage />
}
