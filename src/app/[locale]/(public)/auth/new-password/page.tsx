import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { NewPasswordPage } from '@/screens/auth/new-password'

import type { LocalizedPageProps } from '@/shared/types'

export async function generateMetadata({
	params,
}: LocalizedPageProps): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'screens.auth.newPassword.metadata',
	})

	return {
		title: t('title'),
		description: t('description'),
	}
}

export default function NewPassword() {
	return <NewPasswordPage />
}
