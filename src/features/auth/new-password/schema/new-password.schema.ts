import z from 'zod'

export const NewPasswordSchema = z.object({
	password: z
		.string()
		.min(8, { error: 'Пароль должен быть минимум 8 символов' }),
})

export type TypeNewPasswordSchema = z.infer<typeof NewPasswordSchema>
