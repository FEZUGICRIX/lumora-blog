'use client'

import { ArticleList } from '@/widgets/article-list'
import { PageHero } from '@/shared/ui/PageHero'
import { BackgroundImage } from '@/shared/assets/images'
import { useTranslations } from 'next-intl'
import type { ArticlePreview } from '@/entities/article'

interface HomePageProps {
	articles: ArticlePreview[] | null
}

const HomePage = ({ articles }: HomePageProps) => {
	const t = useTranslations('HomePage')

	return (
		<div>
			<PageHero
				title={t('title')}
				subtitle={t('subtitle')}
				image={BackgroundImage}
				isCenter
			/>

			<ArticleList initialArticles={articles} withFilters />
		</div>
	)
}

export default HomePage
