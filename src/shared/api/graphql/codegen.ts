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
			},
		},
	},
	ignoreNoDocuments: true,
}

export default config
