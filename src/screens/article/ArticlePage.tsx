'use client'

import { Eye, MessageSquareText } from 'lucide-react'

import { TipTapRenderer } from '@/features/editor/ui'

import { type ArticlePageProps } from '@/entities/article'
import { useGetProfile } from '@/entities/user/api'

import { Comments } from '@/widgets/comment/ui'

import { formatNumber, generateKey } from '@/shared/lib'
import { PageHero } from '@/shared/ui/custom'
import { Badge } from '@/shared/ui/ui-kit'

export const ArticlePage = ({ article }: ArticlePageProps) => {
	const { user, isAuthenticated } = useGetProfile()

	console.log(article.comments)

	const {
		id,
		title,
		coverImage,
		// readingTime,
		// category,
		description,
		tags,
		views,
		comments,
		contentJson,
		contentHtml,
		commentsCount,
		// likes,
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
				// TODO: поставить номральный мок
				image={
					coverImage ??
					'https://zastavki.gas-kvas.com/uploads/posts/2024-09/zastavki-gas-kvas-com-hno1-p-zastavki-na-rabochii-stol-bogataya-zhizn-2.jpg'
				}
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
								<Badge key={generateKey(tag)} variant='secondary'>
									#{tag}
								</Badge>
							))}
						</div>

						<div className='flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400'>
							{/* <div className='flex items-center gap-1'>
								<HeartIcon />
								<span>{formatNumber(likes)}</span>
							</div> */}
							<div className='flex items-center gap-1'>
								<MessageSquareText />
								<span>{formatNumber(commentsCount ?? 0)}</span>
							</div>
							<div className='flex items-center gap-1'>
								<Eye />
								<span>{formatNumber(views)}</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Comments
				commentList={comments}
				articleId={id}
				user={user}
				isAuthenticated={isAuthenticated}
				commentsCount={commentsCount || 0}
			/>
		</div>
	)
}
