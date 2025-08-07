import { gql } from 'graphql-tag'

export const createArticleMutation = gql`
	mutation CreateArticle($input: CreateArticleInput!) {
		createArticle(createArticleInput: $input) {
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
