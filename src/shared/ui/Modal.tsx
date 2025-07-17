import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
	DialogClose,
} from '@/shared/ui/ui-kit/dialog'
import { Button } from '@/shared/ui/ui-kit/button'
import type { ReactNode } from 'react'

interface ModalProps {
	open: boolean
	onOpenChange: (open: boolean) => void
	title?: string
	description?: string
	children: ReactNode
	footer?: ReactNode
	showCloseButton?: boolean
}

export const Modal = ({
	open,
	onOpenChange,
	title,
	description,
	children,
	footer,
	showCloseButton = true,
}: ModalProps) => {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className='glass dark:glass-dark'>
				{(title || description) && (
					<DialogHeader>
						{title && <DialogTitle>{title}</DialogTitle>}
						{description && (
							<DialogDescription>
								<span className='text-gray-800 dark:text-gray-400'>
									{description}
								</span>
							</DialogDescription>
						)}
					</DialogHeader>
				)}

				<div>{children}</div>

				{footer && <DialogFooter>{footer}</DialogFooter>}

				{showCloseButton && (
					<DialogClose asChild>
						<Button variant='ghost' className='glass-icon mt-4'>
							Close
						</Button>
					</DialogClose>
				)}
			</DialogContent>
		</Dialog>
	)
}
