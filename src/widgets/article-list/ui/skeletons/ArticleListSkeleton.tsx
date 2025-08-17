import { ArticleCardSkeleton } from '@/entities/article/ui'
import { GridLayout } from '@/shared/ui/GridLayout'

export const ArticleListSkeleton = () => {
	return (
		<div className='container m-auto px-4'>
			<GridLayout>
				{Array.from({ length: 9 }).map((_, index) => (
					<ArticleCardSkeleton key={index} />
				))}
			</GridLayout>
		</div>
	)
}
