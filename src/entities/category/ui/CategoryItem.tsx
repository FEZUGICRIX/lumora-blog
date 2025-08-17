import { Button } from '@/shared/ui/ui-kit/button'
import { cn } from '@/shared/lib/shadcn/utils'
import type { CategoryMinimal } from '../model/category.types'

interface CategoryItemProps {
	category: CategoryMinimal
	toggleCategory: (category: CategoryMinimal) => void
	isActive: boolean
}

export const CategoryItem = ({
	category,
	toggleCategory,
	isActive,
}: CategoryItemProps) => {
	return (
		<Button
			key={category.slug}
			onClick={() => toggleCategory(category)}
			aria-pressed={isActive}
			title={category.name}
			className={cn(
				'glass-icon rounded-full border px-3 py-1 text-sm transition-all',
				'border-border',
				isActive
					? 'bg-primary text-primary-foreground hover:bg-primary'
					: 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground',
			)}
		>
			{category.name}
		</Button>
	)
}
