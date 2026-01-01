'use client'

import { Edit, Eye, MessageSquareText } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'

import { useDeleteArticle } from '@/features/article/delete-article'
import { useTrackArticleView } from '@/features/article/track-article-view'
import { TipTapRenderer } from '@/features/editor/ui'
import { useToggleReaction } from '@/features/reactions/toggle-reaction'

import {
	ArticleActions,
	ArticleHero,
	type ArticlePageProps,
} from '@/entities/article'
import { ReactionList } from '@/entities/reaction/ui'
import { useGetProfile } from '@/entities/user/api'

import { Comments } from '@/widgets/comment/ui'

import {
	ReactionTargetType,
	type ToggleReactionInput,
	UserRole,
} from '@/shared/api/graphql/__generated__/documents'
import { routes } from '@/shared/config/routes'
import { formatNumber, generateKey } from '@/shared/lib'
import { PageHero, ScrollProgress } from '@/shared/ui/custom'
import { Badge } from '@/shared/ui/ui-kit'

export const ArticlePage = ({ article }: ArticlePageProps) => {
	const { user, isAuthenticated } = useGetProfile()
	const { toggleReaction } = useToggleReaction()
	const { trackArticleView } = useTrackArticleView()
	const { deleteArticle } = useDeleteArticle()
	const router = useRouter()
	const t = useTranslations('screens.article')

	const {
		id,
		slug,
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

	const articleRef = useRef<HTMLElement>(null)

	const isAuthor = user?.id === author?.id
	const isAdmin = user?.role === UserRole.Admin
	const canEdit = isAuthor

	useEffect(() => {
		// Отслеживаем просмотр статьи:
		// Чтобы не учитывать случайные клики и минимизировать фейковые просмотры,
		// отправляем запрос на увеличение счетчика просмотров только после того,
		// как пользователь пробыл на странице хотя бы 10 секунд.
		const timer = setTimeout(() => {
			trackArticleView(id)
		}, 10000)

		return () => clearTimeout(timer)
	}, [id, trackArticleView])

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

			<ScrollProgress target={articleRef} />

			{/* Author actions */}
			{canEdit && (
				<section className='container m-auto mt-5'>
					<div className='bg-card/50 border-border/50 flex w-full flex-col items-center justify-between gap-4 rounded-xl border p-4 shadow-md sm:flex-row'>
						<div className='flex items-center gap-3'>
							<div className='bg-primary/10 flex size-10 items-center justify-center rounded-lg'>
								<Edit className='text-primary size-5' />
							</div>
							<div>
								<p className='text-sm font-medium'>
									{isAdmin ? (
										<span>{t('adminMessage')}</span>
									) : (
										<span>{t('authorMessage')}</span>
									)}
								</p>
								<p className='text-muted-foreground text-xs'>
									{t('canEditDescription')}
								</p>
							</div>
						</div>

						<ArticleActions
							articleSlug={slug}
							onDelete={() => {
								deleteArticle(article.slug)
								router.push(routes.home)
							}}
						/>
					</div>
				</section>
			)}
			<section className='container mx-auto mt-5 mb-5 px-4'>
				<div className='md:p-10" bg-gray/10 rounded-2xl p-6 shadow-md backdrop-blur-md dark:bg-zinc-900/80'>
					{/* Article content */}
					<article
						ref={articleRef}
						className='prose prose-neutral dark:prose-invert max-w-none'
					>
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
