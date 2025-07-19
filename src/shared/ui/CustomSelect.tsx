'use client'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui/ui-kit/select'
import { cn } from '@/shared/lib/shadcn/utils'

type Option = {
	label: string
	value: string
}

interface CustomSelectProps {
	value: string
	onChange: (value: string) => void
	options: readonly Option[]
	className?: string
}

export const CustomSelect = ({
	value,
	onChange,
	options,
	className,
}: CustomSelectProps) => {
	return (
		<Select value={value} onValueChange={onChange}>
			<SelectTrigger
				className={cn(
					'glass-icon dark:glass-icon-dark w-[120px] transition all ',
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
