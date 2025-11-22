import { api } from '@/shared/api/base-api';
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
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  author: User;
  category: Category;
  comments: Array<Comment>;
  commentsCount?: Maybe<Scalars['Int']['output']>;
  contentHtml: Scalars['String']['output'];
  contentJson: Scalars['JSON']['output'];
  contentText: Scalars['String']['output'];
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

export enum ArticleSortBy {
  Comments = 'COMMENTS',
  CreatedAt = 'CREATED_AT',
  Likes = 'LIKES',
  UpdatedAt = 'UPDATED_AT',
  Views = 'VIEWS'
}

/** Supported authentication methods */
export enum AuthMethod {
  Credentials = 'CREDENTIALS',
  Github = 'GITHUB',
  Google = 'GOOGLE'
}

export type Category = {
  __typename?: 'Category';
  articles: Array<Article>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
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

export type ConfirmationInput = {
  /** Email confirmation token */
  token: Scalars['String']['input'];
};

export type CreateArticleInput = {
  authorId: Scalars['String']['input'];
  categoryId?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['JSON']['input'];
  coverImage?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  likes?: Scalars['Int']['input'];
  published?: Scalars['Boolean']['input'];
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readingTime?: Scalars['Int']['input'];
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

export type LoginInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResult = MessageResponse | User;

export type MessageResponse = {
  __typename?: 'MessageResponse';
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle: Article;
  createCategory: Category;
  createComment: Comment;
  deleteFile: UploadResponse;
  login: LoginResult;
  logout: Scalars['Boolean']['output'];
  newPassword: Scalars['Boolean']['output'];
  newVerification: Scalars['Boolean']['output'];
  register: MessageResponse;
  removeArticle: Article;
  removeCategory: Category;
  removeComment: Comment;
  resetPassword: Scalars['Boolean']['output'];
  updateArticle: Article;
  updateCategory: Category;
  updateComment: Comment;
  updateProfile: User;
  uploadFile: UploadResponse;
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


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationNewPasswordArgs = {
  newPasswordInput: NewPasswordInput;
};


export type MutationNewVerificationArgs = {
  confirmationInput: ConfirmationInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationRemoveArticleArgs = {
  slug: Scalars['String']['input'];
};


export type MutationRemoveCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveCommentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationResetPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
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


export type MutationUpdateProfileArgs = {
  updateProfileInput: UpdateUserInput;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload']['input'];
};

export type NewPasswordInput = {
  password: Scalars['String']['input'];
  /** Reset password token */
  token: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  category: Category;
  comment: Comment;
  connect: UrlResponse;
  findProfile: User;
  getArticleBySlug: Article;
  getArticles: Array<Article>;
  getCategories: Array<Category>;
};


export type QueryCategoryArgs = {
  slug: Scalars['String']['input'];
};


export type QueryCommentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryConnectArgs = {
  provider: Scalars['String']['input'];
};


export type QueryGetArticleBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetArticlesArgs = {
  categorySlugs?: InputMaybe<Array<Scalars['String']['input']>>;
  dateFrom?: InputMaybe<Scalars['String']['input']>;
  dateTo?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<SortOrder>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ArticleSortBy>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type RegisterInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  displayName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordRepeat: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type ResetPasswordInput = {
  email: Scalars['String']['input'];
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type UpdateArticleInput = {
  authorId?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['JSON']['input']>;
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
  displayName: Scalars['String']['input'];
  isTwoFactorEnabled: Scalars['Boolean']['input'];
};

export type UploadResponse = {
  __typename?: 'UploadResponse';
  message: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type UrlResponse = {
  __typename?: 'UrlResponse';
  url: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isTwoFactorEnabled: Scalars['Boolean']['output'];
  method: AuthMethod;
  role: UserRole;
  username: Scalars['String']['output'];
};

/** Defines roles available in the system */
export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type CreateArticleMutationVariables = Exact<{
  input: CreateArticleInput;
}>;


export type CreateArticleMutation = { __typename?: 'Mutation', createArticle: { __typename?: 'Article', id: string, title: string, slug: string, description: string, contentJson: any, contentHtml: string, contentText: string, tags: Array<string>, coverImage?: string | null, published: boolean, publishedAt?: any | null, readingTime: number, views: number, likes: number, createdAt: any, updatedAt: any, author: { __typename?: 'User', id: string, displayName: string, avatar?: string | null }, category: { __typename?: 'Category', id: string, name: string }, comments: Array<{ __typename?: 'Comment', id: string, content: string, createdAt: any, updatedAt: any, author: { __typename?: 'User', id: string, displayName: string, avatar?: string | null } }> } };

export type GetArticleBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetArticleBySlugQuery = { __typename?: 'Query', getArticleBySlug: { __typename?: 'Article', id: string, title: string, slug: string, description: string, contentJson: any, contentHtml: string, contentText: string, tags: Array<string>, coverImage?: string | null, published: boolean, publishedAt?: any | null, readingTime: number, views: number, likes: number, commentsCount?: number | null, createdAt: any, updatedAt: any, author: { __typename?: 'User', id: string, displayName: string, avatar?: string | null }, category: { __typename?: 'Category', id: string, name: string, slug: string }, comments: Array<{ __typename?: 'Comment', id: string, content: string, createdAt: any, updatedAt: any, author: { __typename?: 'User', id: string, displayName: string, avatar?: string | null } }> } };

export type GetArticlesQueryVariables = Exact<{
  categorySlugs?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  dateFrom?: InputMaybe<Scalars['String']['input']>;
  dateTo?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<ArticleSortBy>;
  order?: InputMaybe<SortOrder>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetArticlesQuery = { __typename?: 'Query', getArticles: Array<{ __typename?: 'Article', id: string, title: string, slug: string, description: string, contentJson: any, contentHtml: string, contentText: string, tags: Array<string>, coverImage?: string | null, published: boolean, publishedAt?: any | null, readingTime: number, views: number, likes: number, commentsCount?: number | null, createdAt: any, updatedAt: any, author: { __typename?: 'User', id: string, displayName: string, avatar?: string | null }, category: { __typename?: 'Category', id: string, name: string, slug: string }, comments: Array<{ __typename?: 'Comment', id: string, content: string, createdAt: any, updatedAt: any, author: { __typename?: 'User', id: string, displayName: string, avatar?: string | null } }> }> };

export type UpdateArticleMutationVariables = Exact<{
  input: UpdateArticleInput;
}>;


export type UpdateArticleMutation = { __typename?: 'Mutation', updateArticle: { __typename?: 'Article', id: string, title: string, description: string, contentJson: any, contentHtml: string, contentText: string, tags: Array<string>, coverImage?: string | null, published: boolean, publishedAt?: any | null, readingTime: number, views: number, likes: number, createdAt: any, updatedAt: any, author: { __typename?: 'User', id: string, displayName: string, avatar?: string | null }, category: { __typename?: 'Category', id: string, name: string }, comments: Array<{ __typename?: 'Comment', id: string, createdAt: any, updatedAt: any, author: { __typename?: 'User', id: string, displayName: string, avatar?: string | null } }> } };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', getCategories: Array<{ __typename?: 'Category', id: string, name: string, slug: string }> };


export const CreateArticleDocument = `
    mutation CreateArticle($input: CreateArticleInput!) {
  createArticle(createArticleInput: $input) {
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
    createdAt
    updatedAt
    author {
      id
      displayName
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
        displayName
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
      displayName
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
        displayName
        avatar
      }
    }
  }
}
    `;
export const GetArticlesDocument = `
    query GetArticles($categorySlugs: [String!], $dateFrom: String, $dateTo: String, $sortBy: ArticleSortBy, $order: SortOrder, $take: Int, $skip: Int, $search: String) {
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
      displayName
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
        displayName
        avatar
      }
    }
  }
}
    `;
export const UpdateArticleDocument = `
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
      displayName
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
        displayName
        avatar
      }
    }
  }
}
    `;
export const GetCategoriesDocument = `
    query GetCategories {
  getCategories {
    id
    name
    slug
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    CreateArticle: build.mutation<CreateArticleMutation, CreateArticleMutationVariables>({
      query: (variables) => ({ document: CreateArticleDocument, variables })
    }),
    GetArticleBySlug: build.query<GetArticleBySlugQuery, GetArticleBySlugQueryVariables>({
      query: (variables) => ({ document: GetArticleBySlugDocument, variables })
    }),
    GetArticles: build.query<GetArticlesQuery, GetArticlesQueryVariables | void>({
      query: (variables) => ({ document: GetArticlesDocument, variables })
    }),
    UpdateArticle: build.mutation<UpdateArticleMutation, UpdateArticleMutationVariables>({
      query: (variables) => ({ document: UpdateArticleDocument, variables })
    }),
    GetCategories: build.query<GetCategoriesQuery, GetCategoriesQueryVariables | void>({
      query: (variables) => ({ document: GetCategoriesDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };


