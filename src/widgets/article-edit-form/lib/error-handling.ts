export interface RTKQueryError {
	data?: {
		message?: string
		code?: string
		errors?: Array<{ field: string; message: string }>
	}
	message?: string
	status?: number
}

export class AppError extends Error {
	constructor(
		public message: string,
		public code?: string,
		public details?: unknown,
	) {
		super(message)
		this.name = 'AppError'
	}
}

export const handleRTKError = (error: unknown): AppError => {
	console.error('RTK Error details:', error)

	if (typeof error === 'object' && error !== null) {
		const rtkError = error as RTKQueryError

		// Пытаемся извлечь сообщение об ошибке
		const message =
			rtkError.data?.message ||
			rtkError.message ||
			'Произошла неизвестная ошибка'

		return new AppError(
			message,
			rtkError.data?.code || 'UNKNOWN_ERROR',
			rtkError,
		)
	}

	if (typeof error === 'string') {
		return new AppError(error)
	}

	return new AppError('Произошла неизвестная ошибка')
}
