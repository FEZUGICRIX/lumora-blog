import { z } from 'zod'

import { ZodOptionalString, createZodOptionalUrl } from '@/shared/lib/zod'

export const ProfileEditSchema = z.object({
	displayName: z.string().min(1, { message: 'displayNameRequired' }),
	username: z
		.string()
		.regex(
			/^[a-zA-Z0-9_]{3,20}$/,
			'usernameInvalid',
		),

	bio: ZodOptionalString,
	location: ZodOptionalString,
	websiteUrl: createZodOptionalUrl('invalidUrl'),

	isTwoFactorEnabled: z.boolean(),

	coverUrl: createZodOptionalUrl('invalidUrl'),
	avatarUrl: createZodOptionalUrl('invalidUrl'),
})

export type TypeProfileEditSchema = z.infer<typeof ProfileEditSchema>
