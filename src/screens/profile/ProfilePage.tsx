'use client'

import { useState } from 'react'

import { ProfileHeader, ProfileReadme } from '@/widgets/profile/ui'

import type { UserPublicProfile } from '@/shared/api/graphql/__generated__/documents'

const mockReadmeContent = {
	type: 'doc',
	content: [
		{
			type: 'heading',
			attrs: { level: 2 },
			content: [{ type: 'text', text: "Hi there, I'm Delia 👋" }],
		},
		{
			type: 'paragraph',
			content: [
				{ type: 'text', text: "I'm a passionate " },
				{ type: 'text', marks: [{ type: 'bold' }], text: 'Frontend Engineer' },
				{
					type: 'text',
					text: " specializing in building exceptional digital experiences. Currently, I'm focused on accessible design systems and high-performance React applications.",
				},
			],
		},
		{
			type: 'paragraph',
			content: [],
		},
		{
			type: 'heading',
			attrs: { level: 4 },
			content: [{ type: 'text', text: 'Current Focus' }],
		},
		{
			type: 'paragraph',
			content: [{ type: 'text', text: 'Building Lumora UI Kit' }],
		},
		{
			type: 'heading',
			attrs: { level: 4 },
			content: [{ type: 'text', text: 'Learning' }],
		},
		{
			type: 'paragraph',
			content: [{ type: 'text', text: 'Rust & WebAssembly' }],
		},
	],
}

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
		<section className=''>
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
					<ProfileReadme username={user.username} content={mockReadmeContent} />
				</div>
			</div>
		</section>
	)
}
