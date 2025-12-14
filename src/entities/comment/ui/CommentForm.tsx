import { UserAvatar } from '@/entities/user/ui'

import type { UserProfile } from '@/shared/api/graphql/__generated__/documents'
import { Button } from '@/shared/ui/ui-kit'

interface CommentFormProps {
	user?: UserProfile | null
	isAuthenticated: boolean
	onSubmit: () => void
	commentsCount: number
}

export const CommentForm = ({
	user,
	isAuthenticated,
	onSubmit,
	commentsCount,
}: CommentFormProps) => {
	return (
		<div className='mx-auto w-full space-y-4 dark:text-white'>
			{/* Comments header */}
			<h3 className='mb-4 text-xl font-semibold'>{commentsCount} Comments</h3>

			<div className='flex items-center gap-4'>
				{user && (
					<UserAvatar
						avatarUrl={user.avatarUrl}
						displayName={user.displayName}
						className='h-12 w-12'
					/>
				)}

				{/* New comment */}
				<div className='w-full rounded-2xl shadow-sm dark:bg-zinc-900/80'>
					<textarea
						placeholder='Join the discussion…'
						className='w-full resize-none px-3 pt-4 text-sm outline-none placeholder:text-zinc-400'
					/>
				</div>
			</div>

			<div className='flex w-full gap-2'>
				<Button
					onClick={onSubmit}
					disabled={!isAuthenticated}
					type='submit'
					className='ml-auto'
				>
					Send a comment
				</Button>
			</div>
		</div>
	)
}
