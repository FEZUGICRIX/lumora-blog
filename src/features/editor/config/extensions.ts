// --- Tiptap Core Extensions ---
import { StarterKit } from '@tiptap/starter-kit'
import { Image } from '@tiptap/extension-image'
import { TaskItem, TaskList } from '@tiptap/extension-list'
import { TextAlign } from '@tiptap/extension-text-align'
import { Typography } from '@tiptap/extension-typography'
import { Highlight } from '@tiptap/extension-highlight'
import { Subscript } from '@tiptap/extension-subscript'
import { Superscript } from '@tiptap/extension-superscript'
import { Selection } from '@tiptap/extensions'

// --- Tiptap Node ---
import { ImageUploadNode } from '@/features/editor/ui/tiptap/tiptap-node/image-upload-node/image-upload-node-extension'
import { HorizontalRule } from '@/features/editor/ui/tiptap/tiptap-node/horizontal-rule-node/horizontal-rule-node-extension'

// --- Lib ---
import {
	handleImageUpload,
	MAX_FILE_SIZE,
} from '@/shared/lib/shadcn/utils/tiptap-utils'

export const extensions = [
	StarterKit.configure({
		horizontalRule: false,
		link: {
			openOnClick: false,
			enableClickSelection: true,
		},
	}),
	HorizontalRule,
	TextAlign.configure({ types: ['heading', 'paragraph'] }),
	TaskList,
	TaskItem.configure({ nested: true }),
	Highlight.configure({ multicolor: true }),
	Image,
	Typography,
	Superscript,
	Subscript,
	Selection,
	ImageUploadNode.configure({
		accept: 'image/*',
		maxSize: MAX_FILE_SIZE,
		limit: 10,
		upload: handleImageUpload,
		onError: (error) => console.error('Upload failed:', error),
	}),
]
