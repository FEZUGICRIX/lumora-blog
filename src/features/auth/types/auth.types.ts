import type { AuthMethod } from '@/shared/api/graphql/__generated__/documents'

export type OAuthProvider = Lowercase<
	Exclude<AuthMethod, AuthMethod.Credentials>
>
