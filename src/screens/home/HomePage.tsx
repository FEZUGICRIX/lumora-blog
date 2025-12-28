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
			<PageHero title={t('title')} subtitle={t('subtitle')} isCenter />
			<ArticleList initialArticles={articles} withFilters />
		</div>
	)
}
