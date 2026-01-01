import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { RegisterPage } from '@/screens/auth/register'

import type { LocalizedPageProps } from '@/shared/types'

export async function generateMetadata({
	params,
}: LocalizedPageProps): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'features.auth.register.metadata',
	})

	return {
		title: t('title'),
		description: t('description'),
	}
}

export default async function Register() {
	return <RegisterPage />
}
