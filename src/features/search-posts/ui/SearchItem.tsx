import type { Article } from '@/entities/article'
import { highlightMatch } from '@/shared/lib/utils/highlightMatch'

type SearchItemProps = Pick<
	Article,
	'id' | 'title' | 'excerpt' | 'image' | 'createdAt' | 'author'
>

export const SearchItem = ({
	id,
	image,
	title,
	excerpt,
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
			<img
				src={image}
				alt={title}
				className='h-20 w-32 flex-shrink-0 rounded-xl object-cover'
			/>

			{/* Контент */}
			<div className='flex flex-col justify-between'>
				<h3 className='text-foreground line-clamp-2 text-base font-semibold hover:underline'>
					{highlightMatch(title, query)}
				</h3>
				<p className='text-muted-foreground line-clamp-2 text-sm'>
					{highlightMatch(excerpt, query)}
				</p>
				<div className='text-muted-foreground mt-2 flex items-center gap-2 text-xs'>
					<img
						src={author.avatar}
						alt={author.name}
						className='h-5 w-5 rounded-full'
					/>
					<span>{highlightMatch(author.name, query)}</span>
					<span>•</span>
					<span>{createdAt}</span>
				</div>
			</div>
		</div>
	)
}
