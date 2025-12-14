'use client'

import { useState } from 'react'

import { ProfileHeader, ProfileReadme } from '@/widgets/profile/ui'

import type { UserPublicProfile } from '@/shared/api/graphql/__generated__/documents'

interface ProfilePageProps {
	isOwnProfile?: boolean
	user: UserPublicProfile
}

export const ProfilePage = ({
	isOwnProfile = false,
	user,
}: ProfilePageProps) => {
	const [isFollowing, setIsFollowing] = useState(false)

	return (
		<section>
			<div className='space-y-4'>
				{/* Header with cover & avatar */}
				<ProfileHeader
					user={user}
					isOwnProfile={isOwnProfile}
					isFollowing={isFollowing}
					onFollow={() => setIsFollowing(!isFollowing)}
				/>

				<div className='container mx-auto flex flex-col gap-4 px-4'>
					{/* README */}
					<ProfileReadme
						username={user.username}
						isOwnProfile={isOwnProfile}
						contentJson={user.readmeContent}
					/>
				</div>
			</div>
		</section>
	)
}
