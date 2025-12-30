import type { ArticleCardProps } from '@/entities/article/model/article.types'
import { AuthorCard } from '@/entities/user/ui'

import { BackgroundImage } from '@/shared/assets/images'
import { Link } from '@/shared/config/i18n'
import { routes } from '@/shared/config/routes'
import { formatNumber, generateKey } from '@/shared/lib'
import { ImageDarkOverlay } from '@/shared/ui/custom'
import { CommentIcon, ViewIcon } from '@/shared/ui/icon'

import { ArticleActions } from './ArticleActions'

export const ArticleCard = ({
	article,
	permissions,
	onDelete,
	isNew,
}: ArticleCardProps) => {
	const {
		title,
		slug,
		coverImage,
		readingTime,
		description,
		category,
		tags,
		views,
		commentsCount,
		author,
		createdAt,
	} = article

	return (
		<article className='group flex flex-col rounded-xl border border-zinc-200 bg-white text-zinc-800 shadow-md transition duration-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:text-white'>
			<Link
				href={routes.blog.post(slug)}
				className='relative min-h-48 w-full overflow-hidden rounded-t-xl'
			>
				<img
					src={coverImage ?? BackgroundImage.src}
					alt={title}
					className='h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:translate-y-1 group-hover:scale-105'
				/>

				<ImageDarkOverlay />

				{isNew && (
					<span className='absolute top-3 left-3 z-4 rounded-full bg-pink-600 px-2 py-0.5 text-xs font-semibold text-white shadow'>
						Новое
					</span>
				)}

				{permissions?.canManage && onDelete && (
					<div className='absolute top-2 right-2 z-10 shadow'>
						<ArticleActions
							variant='compact'
							articleSlug={article.slug}
							onDelete={(e: React.MouseEvent) => {
								e.preventDefault()
								e.stopPropagation()

								onDelete(slug)
							}}
						/>
					</div>
				)}
			</Link>

			<div className='flex h-full flex-col justify-between p-6'>
				<Link
					href={routes.blog.post(slug)}
					className='flex grow flex-col gap-4'
				>
					<div className='text-xs font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400'>
						{category?.name && (
							<span className='font-semibold text-pink-600 dark:text-pink-400'>
								{category.name}
							</span>
						)}
						<span className='px-1'>•</span> {readingTime} мин чтения
					</div>

					<h3 className='text-xl font-bold'>{title}</h3>
					<p className='mb-auto text-sm text-zinc-600 dark:text-zinc-300'>
						{description}
					</p>

					<div className='flex flex-wrap gap-2 pt-2'>
						{tags.map((tag: string) => (
							<span
								key={generateKey(tag)}
								className='rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'
							>
								#{tag}
							</span>
						))}
					</div>
				</Link>

				<div className='mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 pt-4 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400'>
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-1'>
							<ViewIcon className='h-4 w-4' />
							<span>{formatNumber(views)}</span>
						</div>

						<div className='flex items-center gap-1'>
							<CommentIcon className='h-4 w-4' />
							<span>{formatNumber(commentsCount ?? 0)}</span>
						</div>
					</div>

					<AuthorCard author={author} createdAt={createdAt} />
				</div>
			</div>
		</article>
	)
}
