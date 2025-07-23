export function highlightMatch(text: string, match: string) {
	if (!match) return text

	const regex = new RegExp(`(${match})`, 'gi')
	return text.split(regex).map((part, i) =>
		part.toLowerCase() === match.toLowerCase() ? (
			<span
				key={i}
				className='rounded bg-yellow-300 px-[0.5px] dark:bg-yellow-500/30'
			>
				{part}
			</span>
		) : (
			part
		),
	)
}
