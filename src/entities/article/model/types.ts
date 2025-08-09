import type {
	Article,
	GetAllArticlesQuery,
	GetArticleBySlugQuery,
} from '@/shared/api/graphql/__generated__/graphql'

// TODO: перевести комментарии на английский

/* ----------------------------------------
   TYPES FROM GRAPHQL QUERIES (API contract)
---------------------------------------- */

// Превью статьи из запроса getAllArticles (для списка статей, карточек, и т.п.)
export type ArticlePreview = NonNullable<
	GetAllArticlesQuery['getAllArticles'][number]
>

// Полная статья из запроса getArticleBySlug (для страницы статьи)
export type FullArticle = NonNullable<
	GetArticleBySlugQuery['getArticleBySlug']
>

// Сырые типы из схемы GraphQL (используются реже, например в форме редактирования)
export type RawArticle = Article

/* ----------------------------------------
   UI COMPONENT PROP TYPES
---------------------------------------- */

// Общие UI-пропсы для статьи (используются и в карточке, и на странице)
export interface ArticleUIProps {
	onLike?: () => void
	isNew?: boolean
	isLiked?: boolean
}

// Пропсы для карточки статьи
export interface ArticleCardProps extends ArticleUIProps {
	article: ArticlePreview
}

// Пропсы для страницы статьи
export interface ArticlePageProps extends ArticleUIProps {
	article: FullArticle
}
