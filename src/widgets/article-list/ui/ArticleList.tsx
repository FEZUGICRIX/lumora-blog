// widgets/article-list/ui/ArticleList.tsx

// import { useGetArticlesQuery, ArticleCard } from '@/entities/article'
import { ArticleCard } from '@/entities/article'
import { GridLayout } from '@/shared/ui/GridLayout' // если ты его вынес
import { mockArticles } from '../model/mock'
// import { SkeletonCard } from '@/shared/ui/SkeletonCard' // если есть

export const ArticleList = () => {
	// const { data, isLoading, isError } = useGetArticlesQuery()

	// if (isLoading)
	// 	return <GridLayout>{Array(4).fill(<SkeletonCard />)}</GridLayout>
	// if (isError || !data) return <div>Ошибка загрузки статей</div>

	return (
		<GridLayout>
			{mockArticles.map((article) => (
				<ArticleCard key={article.id} {...article} />
			))}
		</GridLayout>
	)
}
