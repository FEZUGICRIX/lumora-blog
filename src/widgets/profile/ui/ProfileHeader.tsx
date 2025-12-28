'use client'

import { UserSettingsButton } from '@/entities/user/ui'
import { UserAvatar } from '@/entities/user/ui'
import { UserRoleBadge } from '@/entities/user/ui'

import type { UserPublicProfile } from '@/shared/api/graphql/__generated__/documents'
import { useFormattedDate } from '@/shared/config/dayjs'
import { Link } from '@/shared/config/i18n'
import { routes } from '@/shared/config/routes'
import { PageHero } from '@/shared/ui/custom'
import { Button } from '@/shared/ui/ui-kit'

import { ProfileMeta } from './ProfileMeta'
import { ProfileStats } from './ProfileStats'

const mockStats = {
	followers: '3.4K',
	following: '128',
	likes: '12.5K',
	views: '45.2K',
}

interface ProfileHeaderProps {
	user: UserPublicProfile
	isOwnProfile?: boolean
	isFollowing?: boolean
	onFollow?: () => void
}

export const ProfileHeader = ({
	user,
	isOwnProfile = false,
	isFollowing = false,
	onFollow,
}: ProfileHeaderProps) => {
	const formattedDate = useFormattedDate(user.createdAt)

	return (
		<div className='relative'>
			{/* Cover Image */}
			<div className='relative w-full overflow-hidden'>
				<PageHero image={user.coverUrl} />
			</div>

			{/* Profile Info - Desktop: row, Mobile: column */}
			<div className='relative z-4 container mx-auto flex flex-col px-4 pt-4 md:flex-row md:gap-6 md:px-0'>
				{/* Avatar - overlapping cover */}
				<div className='-mt-16 shrink-0 self-center md:-mt-20 md:ml-6 md:self-start'>
					<div className='border-background bg-background size-24 overflow-hidden rounded-full border-4 md:size-32'>
						<UserAvatar
							avatarUrl={user.avatarUrl}
							displayName={user.displayName}
							className='size-full object-cover'
						/>
					</div>
				</div>

				{/* Info */}
				<div className='mt-4 flex flex-1 flex-col md:mt-0 md:justify-center md:pt-2 dark:text-white'>
					{/* Name & Actions */}
					<div className='flex flex-col items-center gap-3 md:flex-row md:items-start md:justify-between'>
						<div className='text-center md:text-left'>
							<h1 className='mb-1 flex items-center gap-4 text-2xl font-bold transition-all md:text-3xl'>
								{user.displayName}
								<UserRoleBadge role={user.role} />
							</h1>
							<p className='font-medium text-gray-400'>@{user.username}</p>
						</div>

						{/* Actions */}
						<div className='flex gap-2'>
							{isOwnProfile ? (
								<>
									<Button
										variant='outline'
										className='rounded-full px-4 text-sm md:px-5'
									>
										<Link href={routes.profileEdit}>Редактировать</Link>
									</Button>

									<UserSettingsButton user={user} />
								</>
							) : (
								<Button
									variant={isFollowing ? 'outline' : 'default'}
									className='rounded-full px-4 text-sm md:px-5'
									onClick={onFollow}
								>
									{isFollowing ? 'Отписаться' : 'Подписаться'}
								</Button>
							)}
						</div>
					</div>

					{/* Bio */}
					<p className='text-foreground/80 mt-4 text-center text-sm md:mt-5 md:max-w-xl md:text-left md:text-base dark:text-white'>
						{user.bio}
					</p>

					{/* Meta & Stats */}
					<div className='mt-4 flex flex-col gap-3 md:mt-5'>
						<ProfileMeta
							location={user.location}
							websiteUrl={user.websiteUrl}
							joinedDate={formattedDate}
						/>
						<ProfileStats stats={mockStats} />
					</div>
				</div>
			</div>
		</div>
	)
}
