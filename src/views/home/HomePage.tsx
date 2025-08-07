'use client'

import { ArticleList } from '@/widgets/article-list'
import { PageHero } from '@/shared/ui/PageHero'
import { BackgroundImage } from '@/shared/assets/images'
import { useTranslations } from 'next-intl'

const HomePage = ({ articles }: any) => { // TODO: поставить нормальную типизацию
	const t = useTranslations('HomePage')

	return (
		<div>
			<PageHero
				title={t('title')}
				subtitle={t('subtitle')}
				image={BackgroundImage}
				isCenter
			/>

			<ArticleList articles={articles} withFilters />
		</div>
	)
}

export default HomePage
