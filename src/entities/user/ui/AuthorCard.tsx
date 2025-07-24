import Image from 'next/image'
import type { Article } from '@/entities/article'
import { useFormattedDate } from '@/shared/config/dayjs'

interface AuthorCardProps {
	author: Article['author']
	createdAt: number
}

export const AuthorCard = ({ author, createdAt }: AuthorCardProps) => {
	const formattedDate = useFormattedDate(createdAt)

	return (
		<div className='flex items-center gap-2'>
			<Image
				src={author.avatar}
				alt={author.name}
				className='rounded-full'
				width={32}
				height={32}
			/>
			<div className='text-gray-300'>
				<p className='text-sm font-semibold'>{author.name}</p>
				<p className='text-xs'>{formattedDate}</p>
			</div>
		</div>
	)
}
