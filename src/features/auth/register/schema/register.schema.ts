import z from 'zod'

export const RegisterSchema = z
	.object({
		username: z.string().regex(/^[a-zA-Z0-9_]{3,20}$/, 'invalidUsername'),
		displayName: z.string().min(1, { message: 'displayNameRequired' }),
		email: z.string().email({ message: 'invalidEmail' }),
		password: z
			.string()
			.min(8, { message: 'passwordMinLength' }),
		passwordRepeat: z
			.string()
			.min(8, { message: 'passwordRepeatMinLength' }),
	})
	.refine(data => data.password === data.passwordRepeat, {
		message: 'passwordsNotMatch',
		path: ['passwordRepeat'],
	})

export type TypeRegisterSchema = z.infer<typeof RegisterSchema>
