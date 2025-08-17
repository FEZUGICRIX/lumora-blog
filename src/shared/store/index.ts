import { configureStore } from '@reduxjs/toolkit'
import { env } from '../config/env'

// TODO: Настроить грамотный реэкспорт
import { articleApi } from '@/entities/article/api/article-api'
import { categoryApi } from '@/entities/category/api/category-api'

export const store = configureStore({
	reducer: {
		[articleApi.reducerPath]: articleApi.reducer,
		[categoryApi.reducerPath]: categoryApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			articleApi.middleware,
			categoryApi.middleware,
		),
	devTools: env.nodeEnv !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
