import { configureStore } from '@reduxjs/toolkit'
import { articleApi } from '@/entities/article/api/article-api' // TODO: Настроить грамотный реэкспорт

export const store = configureStore({
	reducer: {
		[articleApi.reducerPath]: articleApi.reducer,
		// Добавляй сюда другие reducers по мере роста проекта
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(articleApi.middleware),
	devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
