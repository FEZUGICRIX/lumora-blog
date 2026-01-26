'use client'

import * as React from 'react'
import { cn } from '@/shared/lib/shadcn/utils'
import { Input } from './input'

interface InputWithCounterProps extends React.ComponentProps<'input'> {
	maxLength: number
	value?: string
	showCounter?: boolean
	error?: boolean
}

const InputWithCounter = React.forwardRef<HTMLInputElement, InputWithCounterProps>(
	({ className, maxLength, value = '', showCounter = true, error, onChange, ...props }, ref) => {
		const currentLength = value?.length || 0
		const isNearLimit = currentLength >= maxLength * 0.9
		const isAtLimit = currentLength >= maxLength

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			if (e.target.value.length <= maxLength) {
				onChange?.(e)
			}
		}

		return (
			<div className="relative">
				<Input
					ref={ref}
					className={cn(
						showCounter && 'pr-16',
						className
					)}
					value={value}
					onChange={handleChange}
					maxLength={maxLength}
					error={error}
					{...props}
				/>
				{showCounter && (
					<span
						className={cn(
							'absolute right-3 top-1/2 -translate-y-1/2 text-xs tabular-nums transition-colors',
							isAtLimit
								? 'text-destructive font-medium'
								: isNearLimit
									? 'text-amber-500'
									: 'text-muted-foreground'
						)}
					>
						{currentLength}/{maxLength}
					</span>
				)}
			</div>
		)
	}
)

InputWithCounter.displayName = 'InputWithCounter'

export { InputWithCounter }
