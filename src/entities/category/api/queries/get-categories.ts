import { gql } from 'graphql-tag'

export const getCategories = gql`
	query GetCategories {
		getCategories {
			id
			name
			slug
		}
	}
`
