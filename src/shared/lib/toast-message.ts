import { toast } from 'sonner'

import type { ToastMessage } from '../types'

export const toastMessage = ({ message, type = 'success' }: ToastMessage) => {
	const firstDotIndex = message.indexOf('.')
	const title = firstDotIndex !== -1 ? message.slice(0, firstDotIndex) : message
	const description =
		firstDotIndex !== -1 ? message.slice(firstDotIndex + 1).trim() : undefined

	if (type === 'success') {
		toast.success(title, description ? { description } : undefined)
	} else {
		toast.error(title, description ? { description } : undefined)
	}
}
