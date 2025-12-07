import { useMutation } from '@tanstack/react-query'

import type { UploadFileMutationVariables } from '@/shared/api/graphql/__generated__/documents'
import { toastErrorHandler, toastMessage } from '@/shared/lib'

import { uploadFileService } from '../services/upload-file.service'

export const useUploadFile = () => {
	const { mutateAsync: uploadFile, isPending: isLoadingUpload } = useMutation({
		mutationKey: ['upload file'],
		mutationFn: (file: UploadFileMutationVariables) => uploadFileService(file),

		onSuccess() {
			toastMessage({
				message: 'The file was uploaded successfully!',
				type: 'success',
			})
		},

		onError(error) {
			toastErrorHandler(error)
		},
	})

	return { uploadFile, isLoadingUpload }
}
