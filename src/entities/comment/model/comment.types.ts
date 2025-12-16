import type {
	Comment,
	UserPublicProfile,
} from '@/shared/api/graphql/__generated__/documents'

export type AuthorPublic = Pick<
	UserPublicProfile,
	'__typename' | 'id' | 'username' | 'displayName' | 'avatarUrl' | 'role'
>

export type CommentPublic = Pick<
	Comment,
	'__typename' | 'id' | 'content' | 'createdAt' | 'updatedAt'
> & {
	author: AuthorPublic
}
