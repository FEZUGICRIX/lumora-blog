import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ProfilePage } from '@/screens/profile'

import { getAuthMinimalDataService } from '@/entities/auth/api'
import { fetchUserPublicOrNull } from '@/entities/user/api/server-adapters/fetch-user-or-null.adapter'

interface ProfilePageParams {
	params: Promise<{
		username: string
		locale: string
	}>
}

export async function generateMetadata({
	params,
}: ProfilePageParams): Promise<Metadata> {
	const { username } = await params

	return {
		title: `@${username}`,
		description: `${username}'s profile`,
	}
}

export default async function UserProfilePage({ params }: ProfilePageParams) {
	const { username: targetUsername } = await params

	// 💡 Оптимизация: Параллельный запрос
	const [targetUser, authData] = await Promise.all([
		fetchUserPublicOrNull({ username: targetUsername }), // 1. Публичный профиль (тяжелый запрос)
		getAuthMinimalDataService(), // 2. Минимальные данные авторизованного (легкий запрос)
	])

	if (!targetUser) notFound()

	const isOwnProfile = !!authData && targetUser.id === authData.id

	return <ProfilePage user={targetUser} isOwnProfile={isOwnProfile} />
}
