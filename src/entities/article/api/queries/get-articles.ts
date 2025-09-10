import { gql } from 'graphql-tag'

export const getArticlesQuery = gql`
	query GetArticles(
		$categorySlugs: [String!]
		$dateFrom: String
		$dateTo: String
		$sortBy: ArticleSortBy
		$order: SortOrder
		$take: Int
		$skip: Int
		$search: String
	) {
		getArticles(
			categorySlugs: $categorySlugs
			dateFrom: $dateFrom
			dateTo: $dateTo
			sortBy: $sortBy
			order: $order
			take: $take
			skip: $skip
			search: $search
		) {
			id
			title
			slug
			description
			contentJson
			contentHtml
			contentText
			tags
			coverImage
			published
			publishedAt
			readingTime
			views
			likes
			commentsCount
			createdAt
			updatedAt
			author {
				id
				firstName
				lastName
				avatar
			}
			category {
				id
				name
				slug
			}
			comments {
				id
				content
				createdAt
				updatedAt
				author {
					id
					firstName
					lastName
					avatar
				}
			}
		}
	}
`
