import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { PasswordRecoveryPage } from '@/screens/auth/password-recovery'

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('Meta.Auth.PasswordRecovery')

	return {
		title: t('title'),
		description: t('subtitle'),
	}
}

export default function PasswordRecovery() {
	return <PasswordRecoveryPage />
}
