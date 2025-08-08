import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	// TODO: вместо localhost вставить константу url backend'а
	schema:
		process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
		'http://localhost:5000/graphql',

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
				importBaseApiFrom: '@/shared/api/baseApi',
				exportBaseApi: 'baseApi',
			},
		},
	},
	ignoreNoDocuments: true,
}

export default config
