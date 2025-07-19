import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/shared/ui/ui-kit/sheet'
import type { ReactNode } from 'react'
import { cn } from '../lib/shadcn/utils'
import { Divider } from './Divider'

interface CustomSheetProps {
	trigger: ReactNode
	title?: string | ReactNode
	description?: string
	children: ReactNode
	footer?: ReactNode
	side?: 'top' | 'bottom' | 'left' | 'right'
	contentClassName?: string
}

export const CustomSheet = ({
	trigger,
	title,
	description,
	children,
	footer,
	contentClassName,
	side = 'right',
}: CustomSheetProps) => {
	return (
		<Sheet>
			<SheetTrigger asChild>{trigger}</SheetTrigger>
			<SheetContent
				side={side}
				className={cn(
					'glass dark:glass-dark',
					side === 'right' ? 'rounded-l-xl' : 'rounded-r-xl',
					contentClassName,
				)}
			>
				{(title || description) && (
					<SheetHeader className='flex items-center'>
						{title && <SheetTitle>{title}</SheetTitle>}
						{description && (
							<SheetDescription>{description}</SheetDescription>
						)}
						<Divider />
					</SheetHeader>
				)}
				<div className='flex-1 px-5'>{children}</div>
				{footer && <SheetFooter>{footer}</SheetFooter>}
			</SheetContent>
		</Sheet>
	)
}
