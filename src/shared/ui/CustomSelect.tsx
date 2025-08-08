'use client'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui/ui-kit/select'
import { cn } from '@/shared/lib/shadcn/utils'

type Option<T extends string> = {
	label: string
	value: T
}

interface CustomSelectProps<T extends string> {
	value: T
	onChange: (value: T) => void
	options: readonly Option<T>[]
	className?: string
}

export const CustomSelect = <T extends string>({
	value,
	onChange,
	options,
	className,
}: CustomSelectProps<T>) => {
	return (
		<Select value={value} onValueChange={onChange}>
			<SelectTrigger
				className={cn(
					'glass-icon dark:glass-icon-dark all w-[120px] transition dark:text-white',
					className,
				)}
			>
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				{options.map(({ label, value }) => (
					<SelectItem key={value} value={value}>
						{label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
