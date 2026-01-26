import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { ProfileEditPage } from '@/screens/settings/profile'

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'screens.settings.profile.metadata',
	})

	return {
		title: t('title'),
		description: t('description'),
	}
}

export default function SettingsProfilePage() {
	return <ProfileEditPage />
}
