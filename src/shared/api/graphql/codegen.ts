import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

import { env } from '../../config/env'

const config: CodegenConfig = {
	schema: env.apiUrl,
	generates: {
		// ====== TANSTACK (typed-document-node) ======
		'src/shared/api/graphql/__generated__/documents.ts': {
			documents: ['src/**/*.graphql'],
			plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
			config: {
				maybeValue: 'T | null',
				useTypeImports: true,
			},
		},

		// ====== RTK QUERY (старый код) ======
		'src/shared/api/graphql/__generated__/rtk.ts': {
			documents: ['src/**/*.{ts,tsx}'],
			plugins: ['typescript', 'typescript-operations', 'typescript-rtk-query'],
			config: {
				maybeValue: 'T | null',
				importBaseApiFrom: '@/shared/api/base-api',
				exportBaseApi: 'base-api',
			},
		},
	},
	ignoreNoDocuments: true,
}

export default config
