import z from 'zod'

export const LoginSchema = z.object({
	email: z.string().email({ message: 'invalidEmail' }),
	password: z
		.string()
		.min(8, { message: 'passwordMinLength' }),
	code: z.optional(z.string()),
})

export type TypeLoginSchema = z.infer<typeof LoginSchema>
