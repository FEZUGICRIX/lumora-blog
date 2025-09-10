'use client'

import * as React from 'react'
import {
	EditorContent,
	EditorContext,
	useEditor,
	type JSONContent,
} from '@tiptap/react'

// --- UI Primitives ---
import { Button } from '@/features/editor/ui/tiptap/tiptap-ui-primitive/button'
import { Spacer } from '@/features/editor/ui/tiptap/tiptap-ui-primitive/spacer'
import {
	Toolbar,
	ToolbarGroup,
	ToolbarSeparator,
} from '@/features/editor/ui/tiptap/tiptap-ui-primitive/toolbar'

// --- Tiptap Node ---
import '@/features/editor/ui/tiptap/tiptap-node/blockquote-node/blockquote-node.scss'
import '@/features/editor/ui/tiptap/tiptap-node/code-block-node/code-block-node.scss'
import '@/features/editor/ui/tiptap/tiptap-node/horizontal-rule-node/horizontal-rule-node.scss'
import '@/features/editor/ui/tiptap/tiptap-node/list-node/list-node.scss'
import '@/features/editor/ui/tiptap/tiptap-node/image-node/image-node.scss'
import '@/features/editor/ui/tiptap/tiptap-node/heading-node/heading-node.scss'
import '@/features/editor/ui/tiptap/tiptap-node/paragraph-node/paragraph-node.scss'

// --- Tiptap UI ---
import { HeadingDropdownMenu } from '@/features/editor/ui/tiptap/tiptap-ui/heading-dropdown-menu'
import { ImageUploadButton } from '@/features/editor/ui/tiptap/tiptap-ui/image-upload-button'
import { ListDropdownMenu } from '@/features/editor/ui/tiptap/tiptap-ui/list-dropdown-menu'
import { BlockquoteButton } from '@/features/editor/ui/tiptap/tiptap-ui/blockquote-button'
import { CodeBlockButton } from '@/features/editor/ui/tiptap/tiptap-ui/code-block-button'
import {
	ColorHighlightPopover,
	ColorHighlightPopoverContent,
	ColorHighlightPopoverButton,
} from '@/features/editor/ui/tiptap/tiptap-ui/color-highlight-popover'
import {
	LinkPopover,
	LinkContent,
	LinkButton,
} from '@/features/editor/ui/tiptap/tiptap-ui/link-popover'
import { MarkButton } from '@/features/editor/ui/tiptap/tiptap-ui/mark-button'
import { TextAlignButton } from '@/features/editor/ui/tiptap/tiptap-ui/text-align-button'
import { UndoRedoButton } from '@/features/editor/ui/tiptap/tiptap-ui/undo-redo-button'

// --- Icons ---
import { ArrowLeftIcon } from '@/features/editor/ui/tiptap/tiptap-icons/arrow-left-icon'
import { HighlighterIcon } from '@/features/editor/ui/tiptap/tiptap-icons/highlighter-icon'
import { LinkIcon } from '@/features/editor/ui/tiptap/tiptap-icons/link-icon'

// --- Hooks ---
import { useIsMobile } from '@/shared/hooks/shadcn/use-mobile'
import { useWindowSize } from '@/shared/hooks/shadcn/use-window-size'
import { useCursorVisibility } from '@/shared/hooks/shadcn/use-cursor-visibility'

// -- Config --
import { extensions } from '../config/extensions'

// --- Styles ---
import '@/shared/ui/ui-kit/tiptap-templates/simple/simple-editor.scss'

const MainToolbarContent = ({
	onHighlighterClick,
	onLinkClick,
	isMobile,
}: {
	onHighlighterClick: () => void
	onLinkClick: () => void
	isMobile: boolean
}) => {
	return (
		<>
			<Spacer />

			<ToolbarGroup>
				<UndoRedoButton action='undo' />
				<UndoRedoButton action='redo' />
			</ToolbarGroup>

			<ToolbarSeparator />

			<ToolbarGroup>
				<HeadingDropdownMenu levels={[1, 2, 3, 4]} portal={isMobile} />
				<ListDropdownMenu
					types={['bulletList', 'orderedList', 'taskList']}
					portal={isMobile}
				/>
				<BlockquoteButton />
				<CodeBlockButton />
			</ToolbarGroup>

			<ToolbarSeparator />

			<ToolbarGroup>
				<MarkButton type='bold' />
				<MarkButton type='italic' />
				<MarkButton type='strike' />
				<MarkButton type='code' />
				<MarkButton type='underline' />
				{!isMobile ? (
					<ColorHighlightPopover />
				) : (
					<ColorHighlightPopoverButton onClick={onHighlighterClick} />
				)}
				{!isMobile ? (
					<LinkPopover />
				) : (
					<LinkButton onClick={onLinkClick} />
				)}
			</ToolbarGroup>

			<ToolbarSeparator />

			<ToolbarGroup>
				<MarkButton type='superscript' />
				<MarkButton type='subscript' />
			</ToolbarGroup>

			<ToolbarSeparator />

			<ToolbarGroup>
				<TextAlignButton align='left' />
				<TextAlignButton align='center' />
				<TextAlignButton align='right' />
				<TextAlignButton align='justify' />
			</ToolbarGroup>

			<ToolbarSeparator />

			<ToolbarGroup>
				<ImageUploadButton text='Add' />
			</ToolbarGroup>

			<Spacer />

			{isMobile && <ToolbarSeparator />}
		</>
	)
}

const MobileToolbarContent = ({
	type,
	onBack,
}: {
	type: 'highlighter' | 'link'
	onBack: () => void
}) => (
	<>
		<ToolbarGroup>
			<Button data-style='ghost' onClick={onBack}>
				<ArrowLeftIcon className='tiptap-button-icon' />
				{type === 'highlighter' ? (
					<HighlighterIcon className='tiptap-button-icon' />
				) : (
					<LinkIcon className='tiptap-button-icon' />
				)}
			</Button>
		</ToolbarGroup>

		<ToolbarSeparator />

		{type === 'highlighter' ? (
			<ColorHighlightPopoverContent />
		) : (
			<LinkContent />
		)}
	</>
)

interface SimpleEditorProps {
	content: JSONContent | null
	setContent: (content: JSONContent) => void
}

export function SimpleEditor({ content, setContent }: SimpleEditorProps) {
	const isMobile = useIsMobile()
	const { height } = useWindowSize()
	const [mobileView, setMobileView] = React.useState<
		'main' | 'highlighter' | 'link'
	>('main')
	const toolbarRef = React.useRef<HTMLDivElement>(null)

	const editor = useEditor({
		immediatelyRender: false,
		shouldRerenderOnTransaction: false,
		editorProps: {
			attributes: {
				autocomplete: 'off',
				autocorrect: 'off',
				autocapitalize: 'off',
				'aria-label': 'Main content area, start typing to enter text.',
				class: 'simple-editor',
			},
		},
		extensions: extensions,
		content,
		onUpdate: ({ editor }) => {
			const content = editor.getJSON() // или editor.getJSON() для JSON
			setContent(content)
		},
	})

	const rect = useCursorVisibility({
		editor,
		overlayHeight: toolbarRef.current?.getBoundingClientRect().height ?? 0,
	})

	React.useEffect(() => {
		if (!isMobile && mobileView !== 'main') {
			setMobileView('main')
		}
	}, [isMobile, mobileView])

	return (
		<div className='simple-editor-wrapper'>
			<EditorContext.Provider value={{ editor }}>
				<Toolbar
					ref={toolbarRef}
					style={{
						...(isMobile
							? {
									bottom: `calc(100% - ${height - rect.y}px)`,
								}
							: {}),
					}}
				>
					{mobileView === 'main' ? (
						<MainToolbarContent
							onHighlighterClick={() => setMobileView('highlighter')}
							onLinkClick={() => setMobileView('link')}
							isMobile={isMobile}
						/>
					) : (
						<MobileToolbarContent
							type={mobileView === 'highlighter' ? 'highlighter' : 'link'}
							onBack={() => setMobileView('main')}
						/>
					)}
				</Toolbar>

				<EditorContent
					editor={editor}
					role='presentation'
					className='simple-editor-content'
				/>
			</EditorContext.Provider>
		</div>
	)
}
