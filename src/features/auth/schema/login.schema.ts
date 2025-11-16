import z from 'zod'

export const LoginSchema = z.object({
	email: z.email({ error: 'Некорректный email' }),
	password: z
		.string()
		.min(8, { error: 'Пароль должен быть минимум 8 символов' }),
})

export type TypeLoginSchema = z.infer<typeof LoginSchema>
