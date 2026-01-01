import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'

import type { UploadFileMutationVariables } from '@/shared/api/graphql/__generated__/documents'
import { toastErrorHandler, toastMessage } from '@/shared/lib'

import { uploadFileService } from '../services/upload-file.service'

export const useUploadFile = () => {
	const t = useTranslations('common.toasts')

	const { mutateAsync: uploadFile, isPending: isLoadingUpload } = useMutation({
		mutationKey: ['upload file'],
		mutationFn: (file: UploadFileMutationVariables) => uploadFileService(file),

		onSuccess() {
			toastMessage({
				message: t('fileUploaded'),
				type: 'success',
			})
		},

		onError(error) {
			toastErrorHandler(error)
		},
	})

	return { uploadFile, isLoadingUpload }
}
