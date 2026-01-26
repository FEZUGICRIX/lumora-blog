'use client'

import {
	ProfileEditForm,
	ProfileImagesSection,
	ProfileSecuritySettings,
	PublicProfileForm,
} from '@/features/user/user-edit'

import { useGetProfile } from '@/entities/user/api'
import { ProfileMetaInfo } from '@/entities/user/ui'

export const ProfileEditPage = () => {
	const { user } = useGetProfile()

	if (!user) return null

	return (
		<section className='container mx-auto mt-20 px-4 py-6'>
			<div className='space-y-6 dark:text-white'>
				<ProfileEditForm>
					<ProfileImagesSection />
					<PublicProfileForm />
					<ProfileSecuritySettings />

					<ProfileMetaInfo joinedDate={user?.createdAt} />
				</ProfileEditForm>
			</div>
		</section>
	)
}
