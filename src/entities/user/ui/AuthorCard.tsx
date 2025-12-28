import type { FullArticle } from '@/entities/article'

import { useFormattedDate } from '@/shared/config/dayjs'
import { Link } from '@/shared/config/i18n'
import { routes } from '@/shared/config/routes'

import { UserAvatar } from './UserAvatar'

interface AuthorCardProps {
	author: FullArticle['author']
	createdAt: string | Date
	className?: string
}

export const AuthorCard = ({
	author,
	createdAt,
	className,
}: AuthorCardProps) => {
	const formattedDate = useFormattedDate(createdAt)

	if (!author) {
		return null
	}

	return (
		<Link
			href={routes.profile(author.username)}
			className='flex items-center gap-2'
		>
			<UserAvatar
				displayName={author.displayName}
				avatarUrl={author.avatarUrl}
			/>
			<div className={className}>
				<p className='text-sm font-semibold'>{author.displayName}</p>
				<p className='text-xs'>{formattedDate}</p>
			</div>
		</Link>
	)
}
