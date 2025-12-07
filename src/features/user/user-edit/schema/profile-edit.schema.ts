import { z } from 'zod'

// 1. Переиспользуемый опциональный URL-тип
// Принимает: Валидный URL, Пустую строку (''), или undefined
const ZodOptionalUrl = z
	.union([
		z.literal(''),
		z.url('URL-адрес должен быть валидным (например, https://lumora.dev)'),
	])
	.optional()

// 2. Переиспользуемый опциональный строковый тип
// Принимает: любую строку, Пустую строку (''), или undefined
const ZodOptionalString = z.string().optional().or(z.literal(''))

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
