'use client'

import {
	ProfileEditForm,
	ProfileImagesSection,
	ProfileSecuritySettings,
	PublicProfileForm,
} from '@/features/user/user-edit'

import { ProfileMetaInfo } from '@/entities/user/ui'

export const ProfileEditPage = () => {
	const initialData = {
		joinedDate: '16 апреля 2008',
	}

	return (
		<section className='container mx-auto mt-20 px-4 py-6'>
			<div className='space-y-6 dark:text-white'>
				<ProfileEditForm>
					<ProfileImagesSection />
					<PublicProfileForm />
					<ProfileSecuritySettings />

					<ProfileMetaInfo joinedDate={initialData.joinedDate} />
				</ProfileEditForm>
			</div>
		</section>
	)
}
