import { z } from 'zod'

import { ZodOptionalString, ZodOptionalUrl } from '@/shared/lib/zod'

export const ProfileEditSchema = z.object({
	displayName: z.string().min(1, { message: 'Введите отображаемое имя' }),
	username: z
		.string()
		.regex(
			/^[a-zA-Z0-9_]{3,20}$/,
			'Имя пользователя должно быть 3-20 символов (A-z, 0-9, _)',
		),

	bio: ZodOptionalString,
	location: ZodOptionalString,
	websiteUrl: ZodOptionalUrl,

	isTwoFactorEnabled: z.boolean(),

	coverUrl: ZodOptionalUrl,
	avatarUrl: ZodOptionalUrl,
})

export type TypeProfileEditSchema = z.infer<typeof ProfileEditSchema>
