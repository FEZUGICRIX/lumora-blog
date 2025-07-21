'use client'

import Image from 'next/image'
import { BackgroundImage } from '@/shared/assets/images'
import { ArticleList } from '@/widgets/article-list'
import { useTranslations } from 'next-intl'

const HomePage = () => {
	const t = useTranslations('HomePage')

	return (
		<div>
			<section className='relative h-[35vh] w-full pt-20'>
				<Image
					src={BackgroundImage}
					alt='Banner'
					fill
					className='object-cover object-center'
					priority
				/>

				<p>{t('text')}</p>

				<div className='absolute inset-0 flex items-center justify-center bg-black/10 text-center dark:bg-black/40'>
					<div className='mt-[50px] px-4'>
						<h1 className='text-4xl font-extrabold text-white'>
							{t('title')}
						</h1>
						<p className='mt-2 text-base text-zinc-300'>{t('subtitle')}</p>
					</div>
				</div>
			</section>

			<ArticleList />
		</div>
	)
}

export default HomePage
