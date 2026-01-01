'use client'

import { Clock } from 'lucide-react'
import { useTranslations } from 'next-intl'

import type { FullArticle } from '@/entities/article'
import { isNewArticle } from '@/entities/article'
import { AuthorCard } from '@/entities/user/ui'

import { Badge } from '@/shared/ui/ui-kit'

interface ArticleHeroProps {
	title: string
	description?: string | null
	category?: FullArticle['category']
	readingTime?: number | null
	author?: FullArticle['author']
	createdAt: string | Date
	hasImage: boolean
}

export const ArticleHero = ({
	title,
	description,
	category,
	readingTime,
	author,
	createdAt,
	hasImage,
}: ArticleHeroProps) => {
	const t = useTranslations('entities.article')
	const isNew = isNewArticle(createdAt)

	const mixBlendDifferenceStyle = !hasImage && 'mix-blend-difference'

	return (
		<div
			className={`mt-15 flex h-full flex-col justify-end px-2 text-white sm:mt-8`}
		>
			<div className='max-w-6xl space-y-2'>
				{/* Meta row: isNew badge, category, reading time */}
				<div className='flex flex-wrap items-center gap-3'>
					{isNew && <Badge className='bg-pink-600 text-white'>{t('meta.new')}</Badge>}

					{category?.name && (
						<Badge
							variant='secondary'
							className={`bg-white/10 text-white backdrop-blur-sm ${!hasImage && 'bg-gray-300 text-black dark:bg-white/20 dark:text-white'}`}
						>
							{category.name}
						</Badge>
					)}

					{readingTime && (
						<div
							className={`flex items-center gap-1.5 text-sm text-white/80 ${mixBlendDifferenceStyle}`}
						>
							<Clock className='size-3.5' />
							<span>{readingTime} {t('meta.readingTime')}</span>
						</div>
					)}
				</div>

				{/* Title */}
				<h1
					className={`text-2xl leading-7 font-bold text-white sm:leading-8.5 md:text-3xl ${mixBlendDifferenceStyle}`}
				>
					{title}
				</h1>

				{/* Description */}
				{description && (
					<p
						className={`text-sm leading-4.5 text-white/80 sm:leading-normal ${mixBlendDifferenceStyle}`}
					>
						{description}
					</p>
				)}

				{/* Author */}
				{author && createdAt && (
					<div className={`w-fit pt-1`}>
						<AuthorCard
							author={author}
							createdAt={createdAt}
							className={!hasImage ? 'mix-blend-difference' : 'text-white'}
						/>
					</div>
				)}
			</div>
		</div>
	)
}
