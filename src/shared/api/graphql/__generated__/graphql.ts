import { api } from '@/shared/api/baseApi';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  author: User;
  category: Category;
  comments: Array<Comment>;
  content: Scalars['String']['output'];
  coverImage?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  likes: Scalars['Float']['output'];
  published: Scalars['Boolean']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readingTime: Scalars['Float']['output'];
  slug: Scalars['String']['output'];
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  views: Scalars['Float']['output'];
};

export type Category = {
  __typename?: 'Category';
  articles: Array<Article>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  article: Article;
  articleId: Scalars['ID']['output'];
  author: User;
  authorId: Scalars['ID']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateArticleInput = {
  authorId: Scalars['String']['input'];
  categoryId?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  coverImage?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  likes?: Scalars['Int']['input'];
  published?: Scalars['Boolean']['input'];
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readingTime?: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
  tags?: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  views?: Scalars['Int']['input'];
};

export type CreateCategoryInput = {
  name: Scalars['String']['input'];
};

export type CreateCommentInput = {
  articleId: Scalars['String']['input'];
  authorId: Scalars['String']['input'];
  content?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserInput = {
  avatar: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle: Article;
  createCategory: Category;
  createComment: Comment;
  createUser: User;
  removeArticle: Article;
  removeCategory: Category;
  removeComment: Comment;
  removeUser: User;
  updateArticle: Article;
  updateCategory: Category;
  updateComment: Comment;
  updateUser: User;
};


export type MutationCreateArticleArgs = {
  createArticleInput: CreateArticleInput;
};


export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};


export type MutationCreateCommentArgs = {
  createCommentInput: CreateCommentInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveArticleArgs = {
  slug: Scalars['String']['input'];
};


export type MutationRemoveCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveCommentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateArticleArgs = {
  updateArticleInput: UpdateArticleInput;
};


export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};


export type MutationUpdateCommentArgs = {
  updateCommentInput: UpdateCommentInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  category: Category;
  comment: Comment;
  getAllArticles: Array<Article>;
  getAllUsers: Array<User>;
  getArticleBySlug: Article;
  getCategories: Array<Category>;
  getUserById?: Maybe<User>;
};


export type QueryCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCommentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetArticleBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ID']['input'];
};

export type UpdateArticleInput = {
  authorId?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  coverImage?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  likes?: InputMaybe<Scalars['Int']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readingTime?: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  views?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateCategoryInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCommentInput = {
  articleId?: InputMaybe<Scalars['String']['input']>;
  authorId?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type UpdateUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  avatar: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
};

export type CreateArticleMutationVariables = Exact<{
  input: CreateArticleInput;
}>;


export type CreateArticleMutation = { __typename?: 'Mutation', createArticle: { __typename?: 'Article', id: string, title: string, slug: string, description: string, content: string, tags: Array<string>, coverImage?: string | null, published: boolean, publishedAt?: any | null, readingTime: number, views: number, likes: number, createdAt: any, updatedAt: any, author: { __typename?: 'User', id: string, firstName: string, lastName: string, avatar: string }, category: { __typename?: 'Category', id: string, name: string }, comments: Array<{ __typename?: 'Comment', id: string, content: string, createdAt: any, updatedAt: any, author: { __typename?: 'User', id: string, firstName: string, lastName: string, avatar: string } }> } };

export type GetAllArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllArticlesQuery = { __typename?: 'Query', getAllArticles: Array<{ __typename?: 'Article', id: string, title: string, slug: string, description: string, content: string, tags: Array<string>, coverImage?: string | null, published: boolean, publishedAt?: any | null, readingTime: number, views: number, likes: number, createdAt: any, updatedAt: any, author: { __typename?: 'User', id: string, firstName: string, lastName: string, avatar: string }, category: { __typename?: 'Category', id: string, name: string }, comments: Array<{ __typename?: 'Comment', id: string, content: string, createdAt: any, updatedAt: any, author: { __typename?: 'User', id: string, firstName: string, lastName: string, avatar: string } }> }> };

export type GetArticleBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetArticleBySlugQuery = { __typename?: 'Query', getArticleBySlug: { __typename?: 'Article', id: string, title: string, slug: string, description: string, content: string, tags: Array<string>, coverImage?: string | null, published: boolean, publishedAt?: any | null, readingTime: number, views: number, likes: number, createdAt: any, updatedAt: any, author: { __typename?: 'User', id: string, firstName: string, lastName: string, avatar: string }, category: { __typename?: 'Category', id: string, name: string }, comments: Array<{ __typename?: 'Comment', id: string, content: string, createdAt: any, updatedAt: any, author: { __typename?: 'User', id: string, firstName: string, lastName: string, avatar: string } }> } };


export const CreateArticleDocument = `
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
    `;
export const GetAllArticlesDocument = `
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
    `;
export const GetArticleBySlugDocument = `
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
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    CreateArticle: build.mutation<CreateArticleMutation, CreateArticleMutationVariables>({
      query: (variables) => ({ document: CreateArticleDocument, variables })
    }),
    GetAllArticles: build.query<GetAllArticlesQuery, GetAllArticlesQueryVariables | void>({
      query: (variables) => ({ document: GetAllArticlesDocument, variables })
    }),
    GetArticleBySlug: build.query<GetArticleBySlugQuery, GetArticleBySlugQueryVariables>({
      query: (variables) => ({ document: GetArticleBySlugDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };


