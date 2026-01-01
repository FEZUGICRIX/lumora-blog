import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { PasswordRecoveryPage } from '@/screens/auth/password-recovery'

import type { LocalizedPageProps } from '@/shared/types'

export async function generateMetadata({
	params,
}: LocalizedPageProps): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'features.auth.passwordRecovery.metadata',
	})

	return {
		title: t('title'),
		description: t('description'),
	}
}

export default function PasswordRecovery() {
	return <PasswordRecoveryPage />
}
