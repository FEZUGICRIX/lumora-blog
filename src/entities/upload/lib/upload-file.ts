import { env } from '@/shared/config/env'

// TODO: Переделать
export const uploadFile = async (file: File): Promise<string> => {
	const formData = new FormData()
	formData.append(
		'operations',
		JSON.stringify({
			query: `mutation UploadFile($file: Upload!) { uploadFile(file: $file) { url } }`,
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
		},
	})

	const json = await res.json()
	if (json.errors) throw new Error(json.errors[0].message)
	return json.data.uploadFile.url
}
