'use client'

import { Skeleton } from '@/shared/ui/ui-kit/skeleton'

export const ArticleCardSkeleton = () => {
	return (
		<article className='group flex flex-col rounded-xl border border-zinc-200 bg-white shadow-md dark:border-zinc-800 dark:bg-zinc-900 w-full'>
			{/* Обложка */}
			<div className='relative min-h-48 w-full overflow-hidden rounded-t-xl'>
				<Skeleton className='h-48 w-full rounded-t-xl' />
			</div>

			{/* Контент */}
			<div className='flex h-full flex-col justify-between p-6'>
				<div className='flex flex-col gap-4'>
					{/* Категория + время чтения */}
					<Skeleton className='h-3 w-32 rounded' />

					{/* Заголовок */}
					<Skeleton className='h-5 w-3/4 rounded' />

					{/* Описание */}
					<Skeleton className='h-4 w-full rounded' />
					<Skeleton className='h-4 w-5/6 rounded' />

					{/* Теги */}
					<div className='flex flex-wrap gap-2 pt-2'>
						<Skeleton className='h-5 w-12 rounded-full' />
						<Skeleton className='h-5 w-16 rounded-full' />
						<Skeleton className='h-5 w-10 rounded-full' />
					</div>
				</div>

				{/* Нижняя панель (views, comments, likes, author) */}
				<div className='mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 pt-4 dark:border-zinc-800'>
					<div className='flex items-center gap-4'>
						<Skeleton className='h-4 w-10 rounded' />
						<Skeleton className='h-4 w-10 rounded' />
						<Skeleton className='h-4 w-10 rounded' />
					</div>
					<div className='flex items-center gap-2'>
						<Skeleton className='h-8 w-8 rounded-full' />
						<Skeleton className='h-4 w-20 rounded' />
					</div>
				</div>
			</div>
		</article>
	)
}
