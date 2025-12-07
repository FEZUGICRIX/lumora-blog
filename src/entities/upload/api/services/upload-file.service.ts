import { print } from 'graphql'

import {
	UploadFileDocument,
	type UploadFileMutationVariables,
} from '@/shared/api/graphql/__generated__/documents'
import { env } from '@/shared/config/env'

export const uploadFileService = async (
	variables: UploadFileMutationVariables,
): Promise<string> => {
	const file = variables.file as File
	const formData = new FormData()

	// 1. Используем print для преобразования AST в строку
	const queryAsString = print(UploadFileDocument)

	formData.append(
		'operations',
		JSON.stringify({
			// 🚨 ИСПРАВЛЕНИЕ: Используем преобразованную строку
			query: queryAsString,
			variables: { file: null },
		}),
	)

	formData.append('map', JSON.stringify({ '0': ['variables.file'] }))
	formData.append('0', file)

	const res = await fetch(`${env.apiUrl}/graphql`, {
		method: 'POST',
		body: formData,
		headers: {
			'x-apollo-operation-name': 'UploadFile',
			// TODO: Добавить заголовки авторизации (например, Bearer Token)
		},
	})

	// ... остальная обработка ответа
	const json = await res.json()
	if (json.errors) throw new Error(json.errors[0].message)
	return json.data.uploadFile.url
}
