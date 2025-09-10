'use client'

import { TipTapRenderer } from '@/features/editor'
import { PageHero } from '@/shared/ui/PageHero'
import { Badge } from '@/shared/ui/ui-kit/badge'
import { BackgroundImage } from '@/shared/assets/images'
import { Eye, HeartIcon, MessageSquareText } from 'lucide-react'
import type { ArticlePageProps } from '@/entities/article'
import millify from 'millify'

const ArticlePage = ({ article }: ArticlePageProps) => {
	const {
		title,
		coverImage,
		// readingTime,
		// category,
		description,
		tags,
		views,
		contentJson,
		contentHtml,
		commentsCount,
		likes,
		author,
		createdAt,
		// isNew,
		// onLike,
		// isLiked,
	} = article

	return (
		<div>
			<PageHero
				title={title}
				subtitle={description}
				image={coverImage ?? BackgroundImage}
				author={author}
				createdAt={createdAt}
			/>

			<section className='container mx-auto px-4 py-12'>
				<div className='md:p-10" bg-gray/10 rounded-2xl p-6 shadow-xl backdrop-blur-md dark:bg-zinc-900/80'>
					<article className='prose prose-neutral dark:prose-invert max-w-none'>
						<TipTapRenderer
							contentJson={contentJson}
							contentHtml={contentHtml}
						/>
					</article>

					<div className='mt-10 flex flex-col gap-4 border-t border-zinc-200 pt-6 md:flex-row md:items-center md:justify-between dark:border-zinc-800'>
						<div className='flex flex-wrap gap-2'>
							{tags.map((tag: string) => (
								<Badge key={tag} variant='secondary'>
									#{tag}
								</Badge>
							))}
						</div>

						<div className='flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400'>
							<div className='flex items-center gap-1'>
								<HeartIcon />
								<span>{millify(likes)}</span>
							</div>
							<div className='flex items-center gap-1'>
								<MessageSquareText />
								<span>{millify(commentsCount ?? 0)}</span>
							</div>
							<div className='flex items-center gap-1'>
								<Eye />
								<span>{millify(views)}</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ArticlePage
