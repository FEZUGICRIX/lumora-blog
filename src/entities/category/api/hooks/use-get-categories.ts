import { useQuery } from '@tanstack/react-query'

import { getCategoriesService } from '../services/get-categories.service'

export const useGetCategories = () => {
	const { data: categories, isPending: isLoadingCategories } = useQuery({
		queryKey: ['get categories'],
		queryFn: () => getCategoriesService(),
	})

	return { categories: categories || [], isLoadingCategories }
}
