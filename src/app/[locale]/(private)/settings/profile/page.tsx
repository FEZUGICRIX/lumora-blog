import type { Metadata } from 'next'

import { ProfileEditPage } from '@/screens/settings/profile'

export const metadata: Metadata = {
	title: 'Редактирование профиля',
	description: 'Настройте свой публичный профиль',
}

export default function SettingsProfilePage() {
	return <ProfileEditPage />
}
