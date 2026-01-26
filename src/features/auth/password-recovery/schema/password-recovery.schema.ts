import z from 'zod'

export const PasswordRecoverySchema = z.object({
	email: z.string().email({ message: 'invalidEmail' }),
})

export type TypePasswordRecoverySchema = z.infer<typeof PasswordRecoverySchema>
