import type { FieldValues, Path, UseFormReturn } from 'react-hook-form'
import type { ZodError } from 'zod'

type Params<T extends FieldValues> = {
	error: ZodError<T>
	form: UseFormReturn<T>
	t: (key: string) => string
	namespace?: string
}

export const mapZodErrorsToForm = <T extends FieldValues>({
	error,
	form,
	t,
	namespace = 'errors',
}: Params<T>) => {
	error.issues.forEach(issue => {
		const field = issue.path.length
			? (issue.path.join('.') as Path<T>)
			: ('root' as Path<T>)

		form.setError(field, {
			type: 'manual',
			message: t(`${namespace}.${issue.message}`),
		})
	})
}
