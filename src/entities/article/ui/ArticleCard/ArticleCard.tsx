import type { ArticleCardProps } from './ArticleCard.types'
import { CommentIcon, HeartIcon, ViewIcon } from '@/shared/ui/icon'
import { ImageOverlay } from '@/shared/ui/ImageOverlay'

export const ArticleCard = ({
	title,
	excerpt,
	image,
	isNew,
	readingTime,
	category,
	tags,
	views,
	comments,
	likes,
	author,
	createdAt,
	onLike,
	isLiked,
}: ArticleCardProps) => {
	return (
		<article className='flex flex-col rounded-xl border border-zinc-200 bg-white text-zinc-800 shadow-md transition duration-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:text-white'>
			<div className='relative'>
				<ImageOverlay>
					<img
						src={image}
						alt={title}
						className='h-48 w-full rounded-t-xl object-cover transition-transform duration-300'
					/>
				</ImageOverlay>

				{isNew && (
					<span className='absolute top-3 left-3 rounded-full bg-pink-600 px-2 py-0.5 text-xs font-semibold text-white shadow'>
						Новое
					</span>
				)}
				<button
					onClick={onLike}
					className='absolute top-3 right-3 rounded-full bg-white p-1.5 text-zinc-600 shadow transition hover:bg-pink-500 hover:text-white dark:bg-zinc-800 dark:text-zinc-300'
				>
					<HeartIcon
						className={isLiked ? 'fill-pink-500 text-pink-500' : ''}
					/>
				</button>
			</div>

			<div className='flex h-full flex-col justify-between p-6'>
				<div className='flex flex-grow flex-col gap-4'>
					<div className='text-xs font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400'>
						<span className='font-semibold text-pink-600 dark:text-pink-400'>
							{category}
						</span>
						<span className='px-1'>•</span> {readingTime} мин чтения
					</div>

					<h3 className='text-xl font-bold'>{title}</h3>
					<p className='mb-auto text-sm text-zinc-600 dark:text-zinc-300'>
						{excerpt}
					</p>

					<div className='flex flex-wrap gap-2 pt-2'>
						{tags.map((tag) => (
							<span
								key={tag}
								className='rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'
							>
								#{tag}
							</span>
						))}
					</div>
				</div>

				<div className='mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 pt-4 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400'>
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-1'>
							<ViewIcon className='h-4 w-4' />
							<span>{views}</span>
						</div>

						<div className='flex items-center gap-1'>
							<CommentIcon className='h-4 w-4' />
							<span>{comments}</span>
						</div>

						<div className='flex items-center gap-1'>
							<HeartIcon
								className={`${isLiked && 'fill-pink-500 text-pink-500'} h-4 w-4`}
							/>
							<span>{likes}</span>
						</div>
					</div>

					<div className='flex items-center gap-2'>
						<img
							src={author.avatar}
							alt={author.name}
							className='h-8 w-8 rounded-full'
						/>
						<div>
							<p className='text-sm font-semibold'>{author.name}</p>
							<p className='text-xs'>{createdAt}</p>
						</div>
					</div>
				</div>
			</div>
		</article>
	)
}
