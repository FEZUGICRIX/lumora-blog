import { gql } from 'graphql-tag'

export const getArticleBySlugQuery = gql`
	query GetArticleBySlug($slug: String!) {
		getArticleBySlug(slug: $slug) {
			id
			title
			slug
			description
			content
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
