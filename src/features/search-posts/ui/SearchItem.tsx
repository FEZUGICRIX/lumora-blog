import Image from 'next/image'
import { highlightMatch } from '@/shared/lib/utils/highlightMatch'
import { BackgroundImage } from '@/shared/assets/images'
import type { ArticlePreview } from '@/entities/article'

type SearchItemProps = Pick<
	ArticlePreview,
	'id' | 'title' | 'description' | 'coverImage' | 'createdAt' | 'author'
>

export const SearchItem = ({
	id,
	coverImage,
	title,
	description,
	author,
	createdAt,
	query,
}: SearchItemProps & { query: string }) => {
	return (
		<div
			key={id}
			className='glass dark:glass-dark hover:bg-card flex items-center gap-4 rounded-2xl p-3 shadow-sm backdrop-blur-lg transition'
		>
			{/* Изображение статьи */}
			<Image
				src={coverImage ?? BackgroundImage}
				alt={title}
				width={128}
				height={80}
				className='flex-shrink-0 rounded-xl object-cover'
			/>

			{/* Контент */}
			<div className='flex flex-col justify-between'>
				<h3 className='text-foreground line-clamp-2 text-base font-semibold hover:underline'>
					{highlightMatch(title, query)}
				</h3>
				<p className='text-muted-foreground line-clamp-2 text-sm'>
					{highlightMatch(description, query)}
				</p>
				<div className='text-muted-foreground mt-2 flex items-center gap-2 text-xs'>
					<img
						src={author.avatar}
						alt={author.firstName}
						className='h-5 w-5 rounded-full'
					/>
					<span>{highlightMatch(author.firstName, query)}</span>
					<span>•</span>
					<span>{createdAt}</span>
				</div>
			</div>
		</div>
	)
}
