export const ProfileFormSkeleton = () => (
	<div className='container mx-auto mt-20 animate-pulse space-y-6 px-4 py-6'>
		<div className='h-12 w-1/3 rounded bg-gray-200 dark:bg-gray-700' />
		<div className='bg-card/30 border-border/50 h-32 rounded-2xl border' />
		<div className='bg-card/30 border-border/50 h-80 rounded-2xl border' />
		<div className='flex justify-end pt-4'>
			<div className='h-10 w-24 rounded bg-gray-200 dark:bg-gray-700' />
		</div>
	</div>
)
