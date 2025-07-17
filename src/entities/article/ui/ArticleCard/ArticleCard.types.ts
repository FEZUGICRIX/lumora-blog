import type { Article } from '../../model/types'

export interface ArticleCardProps extends Article {
	onLike?: () => void
}
