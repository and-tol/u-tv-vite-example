import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { UserAuthSchema } from '../..';

const useUserStore = create<UserAuthSchema>()(
	devtools(
		(set) => ({
			authData: {
				id: '',
				username: '',
			},
			actions: {
				addUser: () => set((state) => ({
					authData: {
						id: '',
						username: ''
					}
				}), false, 'addUser'),
			},
		}),
		{name: 'UserStore', store: 'AuthUser'}
	)
);

export default useUserStore;
