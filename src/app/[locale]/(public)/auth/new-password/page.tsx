import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { NewPasswordPage } from '@/screens/auth/new-password'

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('Meta.Auth.NewPassword')

	return {
		title: t('title'),
		description: t('subtitle'),
	}
}

export default function NewPassword() {
	return <NewPasswordPage />
}
