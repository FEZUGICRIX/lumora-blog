import { gql } from 'graphql-tag'

export const getAllArticlesQuery = gql`
	query GetAllArticles {
		getAllArticles {
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
