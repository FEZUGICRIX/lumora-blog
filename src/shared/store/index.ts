import { configureStore } from '@reduxjs/toolkit'
import { api } from '@/shared/api/base-api'
import { env } from '@/shared/config/env'

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
	devTools: env.nodeEnv !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
