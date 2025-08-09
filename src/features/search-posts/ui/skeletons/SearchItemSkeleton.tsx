import { Skeleton } from '@/shared/ui/ui-kit/skeleton'

/**
 * Skeleton placeholder for SearchItem component
 */
export const SearchItemSkeleton = () => {
	return (
		<div className='glass dark:glass-dark flex items-center gap-4 rounded-2xl p-3 shadow-sm backdrop-blur-lg'>
			{/* === Left: Article cover image placeholder === */}
			<Skeleton className='h-[88px] min-w-[100px] rounded-xl lg:min-w-[140px]' />

			{/* === Right: Content area === */}
			<div className='flex w-full flex-col gap-3'>
				{/* --- Title & description placeholders --- */}
				<div className='flex w-full flex-col justify-between'>
					{/* Article title */}
					<Skeleton className='h-4 w-3/4 rounded' />

					{/* Short description lines */}
					<Skeleton className='mt-3 h-3 w-full rounded' />
					<Skeleton className='mt-1.5 h-3 w-full rounded' />
				</div>

				{/* --- Author & meta info placeholders --- */}
				<div className='text-muted-foreground mt-2 flex w-full items-center gap-2 text-xs'>
					{/* Author avatar */}
					<Skeleton className='h-5 min-w-5 rounded-full' />

					<div className='gap-2 space-y-1 sm:flex w-full'>
						{/* Author name */}
						<Skeleton className='h-4 w-10 max-w-10 rounded' />

						<span className='hidden sm:block'>•</span>

						{/* Publish date */}
						<Skeleton className='h-4 w-1/2 rounded' />
					</div>
				</div>
			</div>
		</div>
	)
}
