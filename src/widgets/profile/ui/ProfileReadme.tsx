'use client'

import { FileText } from 'lucide-react'
import type { JSONContent } from '@tiptap/react'

import { TipTapRenderer } from '@/features/editor'

interface ProfileReadmeProps {
	username: string
	content: JSONContent | null
	contentHtml?: string
}

export const ProfileReadme = ({ username, content, contentHtml }: ProfileReadmeProps) => {
	return (
		<div className="mx-4 rounded-xl border border-border/50 bg-card/30 dark:text-white md:mx-0">
			{/* Header */}
			<div className="flex items-center gap-2 border-b border-border/50 px-3 py-2.5 md:px-4 md:py-3">
				<FileText className="size-3.5 text-muted-foreground md:size-4" />
				<span className="text-xs text-muted-foreground md:text-sm">{username}</span>
				<span className="text-xs text-muted-foreground md:text-sm">/</span>
				<span className="text-xs font-medium md:text-sm">README.md</span>
			</div>

			{/* Content */}
			<div className="p-4 md:p-6">
				<TipTapRenderer
					contentJson={content}
					contentHtml={contentHtml}
					className="prose-headings:mt-4 prose-headings:mb-2 prose-p:my-2 prose-sm md:prose-base"
				/>
			</div>
		</div>
	)
}
