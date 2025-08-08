import Image from 'next/image'
import type { FullArticle } from '@/entities/article'
import { useFormattedDate } from '@/shared/config/dayjs'

interface AuthorCardProps {
	author: FullArticle['author']
	createdAt: string
}

export const AuthorCard = ({ author, createdAt }: AuthorCardProps) => {
	const formattedDate = useFormattedDate(createdAt)

	if (!author) {
		return null
	}

	return (
		<div className='flex items-center gap-2'>
			<Image
				src={author.avatar ?? '/default-cover.jpg'}
				alt={`${author.firstName} ${author.lastName || ''}`}
				className='rounded-full'
				width={32}
				height={32}
			/>
			<div className='text-gray-300'>
				<p className='text-sm font-semibold'>
					{author.firstName} {author.lastName || ''}
				</p>
				<p className='text-xs'>{formattedDate}</p>
			</div>
		</div>
	)
}
