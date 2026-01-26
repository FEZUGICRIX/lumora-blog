import z from 'zod'

export const NewPasswordSchema = z.object({
	password: z
		.string()
		.min(8, { message: 'passwordMinLength' }),
})

export type TypeNewPasswordSchema = z.infer<typeof NewPasswordSchema>
