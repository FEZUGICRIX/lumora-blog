import 'dotenv/config'
import { env } from '../../config/env'
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	schema: env.apiUrl,

	documents: ['src/**/*.{ts,tsx}'],
	generates: {
		'src/shared/api/graphql/__generated__/graphql.ts': {
			plugins: [
				'typescript',
				'typescript-operations',
				'typescript-rtk-query',
			],
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
