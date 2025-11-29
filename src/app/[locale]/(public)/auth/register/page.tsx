import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { RegisterPage } from '@/screens/auth/register'

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('Meta.Auth.Register')

	return {
		title: t('title'),
		description: t('subtitle'),
	}
}

export default async function Register() {
	return <RegisterPage />
}
