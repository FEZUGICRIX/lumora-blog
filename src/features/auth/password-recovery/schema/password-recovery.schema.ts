import z from 'zod'

export const PasswordRecoverySchema = z.object({
	email: z.email({ error: 'Некорректный email' }),
})

export type TypePasswordRecoverySchema = z.infer<typeof PasswordRecoverySchema>
