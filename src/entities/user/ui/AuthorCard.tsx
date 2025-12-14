import type { FullArticle } from '@/entities/article'

import { useFormattedDate } from '@/shared/config/dayjs'

import { UserAvatar } from './UserAvatar'

interface AuthorCardProps {
	author: FullArticle['author']
	createdAt: string | Date
}

export const AuthorCard = ({ author, createdAt }: AuthorCardProps) => {
	const formattedDate = useFormattedDate(createdAt)

	if (!author) {
		return null
	}

	return (
		<div className='flex items-center gap-2'>
			<UserAvatar
				displayName={author.displayName}
				avatarUrl={author.avatarUrl}
			/>
			<div className='text-gray-300'>
				<p className='text-sm font-semibold'>{author.displayName}</p>
				<p className='text-xs'>{formattedDate}</p>
			</div>
		</div>
	)
}
