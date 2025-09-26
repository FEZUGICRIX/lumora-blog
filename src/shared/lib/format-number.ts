import millify from 'millify'

export const formatNumber = (num: number) => {
	return millify(num, {
		locales: 'en', // фиксируем, чтобы и сервер, и клиент были одинаково
		precision: 2,
	})
}
