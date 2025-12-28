'use client'

import { Eye, MessageSquareText } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { TipTapRenderer } from '@/features/editor/ui'
import { useToggleReaction } from '@/features/reactions/toggle-reaction'

import { ArticleHero, type ArticlePageProps } from '@/entities/article'
import { ReactionList } from '@/entities/reaction/ui'
import { useGetProfile } from '@/entities/user/api'

import { Comments } from '@/widgets/comment/ui'

import {
	ReactionTargetType,
	type ToggleReactionInput,
} from '@/shared/api/graphql/__generated__/documents'
import { formatNumber, generateKey } from '@/shared/lib'
import { PageHero } from '@/shared/ui/custom'
import { Badge } from '@/shared/ui/ui-kit'

export const ArticlePage = ({ article }: ArticlePageProps) => {
	const { user, isAuthenticated } = useGetProfile()
	const { toggleReaction } = useToggleReaction()

	const router = useRouter()

	const {
		id,
		title,
		coverImage,
		readingTime,
		category,
		description,
		tags,
		views,
		comments,
		contentJson,
		contentHtml,
		commentsCount,
		author,
		createdAt,
		reactions,
		myReactions,
	} = article

	return (
		<div>
			<PageHero image={coverImage}>
				<ArticleHero
					title={title}
					hasImage={!!coverImage}
					description={description}
					category={category}
					readingTime={readingTime}
					author={author}
					createdAt={createdAt}
				/>
			</PageHero>

			<section className='container mx-auto px-4 py-12'>
				<div className='md:p-10" bg-gray/10 rounded-2xl p-6 shadow-xl backdrop-blur-md dark:bg-zinc-900/80'>
					{/* Article content */}
					<article className='prose prose-neutral dark:prose-invert max-w-none'>
						<TipTapRenderer
							contentJson={contentJson}
							contentHtml={contentHtml}
						/>
					</article>

					{/* Reactions for article */}
					<ReactionList
						reactions={reactions}
						myReactions={myReactions}
						isAuthenticated={isAuthenticated}
						onReactionToggle={(data: ToggleReactionInput) => {
							toggleReaction(data)
							router.refresh()
						}}
						targetId={id}
						targetType={ReactionTargetType.Article}
						className='mt-5 mb-4'
					/>

					<div className='flex flex-col gap-4 border-t border-zinc-200 pt-6 md:flex-row md:items-center md:justify-between dark:border-zinc-800'>
						<div className='flex flex-wrap gap-2'>
							{tags.map((tag: string) => (
								<Badge key={generateKey(tag)} variant='secondary'>
									#{tag}
								</Badge>
							))}
						</div>

						<div className='flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400'>
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

			{/* Comment section - comment form & comment items */}
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
