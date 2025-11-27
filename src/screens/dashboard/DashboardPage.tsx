import { SettingsFrom } from '@/features/user/user-settings'

export const DashboardPage = () => {
	return (
		<section className='container mx-auto flex h-[100vh] justify-center'>
			<div className='flex items-center justify-center'>
				<SettingsFrom />
			</div>
		</section>
	)
}
