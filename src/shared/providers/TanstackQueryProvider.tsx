'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

interface TanstackQueryProviderProps {
	children: React.ReactNode
}

export const TanstackQueryProvider = ({
	children,
}: TanstackQueryProviderProps) => {
	const [client] = useState(
		new QueryClient({ 
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
				},
			},
		}),
	)

	return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
