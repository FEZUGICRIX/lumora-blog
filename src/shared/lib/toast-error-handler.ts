import { toast } from 'sonner'

type GraphQLErrorLike = {
	response?: { errors?: { message: string }[] }
}

export const toastErrorHandler = (error: unknown) => {
	let message = 'Server error'

	// GraphQL Error
	if ((error as GraphQLErrorLike)?.response?.errors?.length) {
		message = (error as GraphQLErrorLike).response!.errors![0].message
	}
	// JS Error
	else if (error instanceof Error && typeof error.message === 'string') {
		message = error.message
	}

	// Разбираем "заголовок. описание" только если это обычная строка
	const firstDotIndex = message.indexOf('.')
	const title = firstDotIndex !== -1 ? message.slice(0, firstDotIndex) : message
	const description =
		firstDotIndex !== -1 ? message.slice(firstDotIndex + 1).trim() : undefined

	toast.error(title, description ? { description } : undefined)
	console.error(error)
}
