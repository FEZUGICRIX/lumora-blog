import { gql } from 'graphql-tag'

export const updateArticleMutation = gql`
  mutation UpdateArticle($input: UpdateArticleInput!) {
    updateArticle(updateArticleInput: $input) {
      id
      title
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
