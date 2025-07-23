import type { ArticleCardProps } from '@/entities/article'
import React from 'react'

const ArticlePage = ({
	title,
	slug,
	excerpt,
	image,
	isNew,
	readingTime,
	category,
	tags,
	views,
	comments,
	likes,
	author,
	createdAt,
	onLike,
	isLiked,
}: ArticleCardProps) => {
	return <div>ArticlePage</div>
}

export default ArticlePage
