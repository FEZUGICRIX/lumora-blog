import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

import { env } from '../../config/env'

const config: CodegenConfig = {
	schema: env.apiUrl,
	generates: {
		// Tanstack Query (typed-document-node)
		'src/shared/api/graphql/__generated__/documents.ts': {
			documents: ['src/**/*.graphql'],
			plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
			config: {
				maybeValue: 'T | null',
				useTypeImports: true,

				scalars: {
					// Указываем, что скаляр 'DateTime' должен быть типом 'Date' в TypeScript
					DateTime: 'Date',
					// Часто также полезно явно сопоставить 'ID' со 'string'
					ID: 'string',
				},
			},
		},
	},
	ignoreNoDocuments: true,
}

export default config
