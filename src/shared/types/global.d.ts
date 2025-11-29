// 1. Декларация для обычных SCSS/CSS файлов
declare module '*.scss'
declare module '*.css'

// 2. Декларация для SCSS/CSS Modules
// Это необходимо, чтобы TypeScript знал, что импорт возвращает объект с именами классов.
declare module '*.module.scss' {
	const classes: { [key: string]: string }
	export default classes
}

declare module '*.module.css' {
	const classes: { [key: string]: string }
	export default classes
}
