import type { AuthMethod } from '@/shared/api/graphql/__generated__/rtk'

export type OAuthProvider = Lowercase<
	Exclude<AuthMethod, AuthMethod.Credentials>
>
