'use client'

import { useTranslations } from 'next-intl'

import type { ArticlePreview } from '@/entities/article'

import { ArticleList } from '@/widgets/article-list'

import { PageHero } from '@/shared/ui/custom'

interface HomePageProps {
	articles: ArticlePreview[] | null
}

export const HomePage = ({ articles }: HomePageProps) => {
	const t = useTranslations('HomePage')

	return (
		<div>
			<PageHero
				title={t('title')}
				subtitle={t('subtitle')}
				// TODO: поставить номральный мок
				image={
					'https://zastavki.gas-kvas.com/uploads/posts/2024-09/zastavki-gas-kvas-com-hno1-p-zastavki-na-rabochii-stol-bogataya-zhizn-2.jpg'
				}
				isCenter
			/>

			<ArticleList initialArticles={articles} withFilters />
		</div>
	)
}
