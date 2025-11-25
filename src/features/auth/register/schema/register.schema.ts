import z from 'zod'

export const RegisterSchema = z
	.object({
		username: z.string().regex(/^[a-zA-Z0-9_]{3,20}$/, 'Invalid username'),
		displayName: z.string().min(1, { error: 'Введите имя' }),
		email: z.email({ error: 'Некорректный email' }),
		password: z
			.string()
			.min(8, { error: 'Пароль должен быть минимум 8 символов' }),
		passwordRepeat: z
			.string()
			.min(8, { error: 'Пароль подтверждения должен быть минимум 8 символов' }),
	})
	.refine(data => data.password === data.passwordRepeat, {
		error: 'Пароли не совпадают',
		path: ['passwordRepeat'],
	})

export type TypeRegisterSchema = z.infer<typeof RegisterSchema>
