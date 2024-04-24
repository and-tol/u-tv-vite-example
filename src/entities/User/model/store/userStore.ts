import {USER_LOCALSTORAGE_KEY} from 'shared/config/constants/constants';
import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';
import {User, UserAuth} from '../types/user';
import {shallow} from '@tanstack/react-router';
import {useShallow} from 'zustand/react/shallow';

const initialStateAuth: UserAuth = {
	authData: {
		id: '',
		username: '',
	},
};

const useUserStore = create<UserAuth>()(
	devtools(
		persist(
			(set) => ({
				...initialStateAuth,
				actions: {
					addUser: () =>
						set(
							(/*state*/) => ({
								authData: {id: '', username: ''},
							}),
							false,
							'addUser'
						),
				},
			}),
			{
				name: USER_LOCALSTORAGE_KEY,
				partialize: (state) =>
					Object.fromEntries(Object.entries(state).filter(([key]) => key !== 'actions')),
				// storage: createJSONStorage(() => sessionStorage),
			}
		),
		{name: 'UserStore'}
	)
);

export default useUserStore;

export const setAuthData = (user: User): void => {
	useUserStore.setState(
		(prevState) => ({
			...prevState,
			authData: user,
			shallow,
		}),
		false,
		'setAuthData'
	);
};

/**
 * Initializes the authentication data by retrieving the serialized user from local storage,
 * parsing it, setting the authentication data, and returning the user's authentication data.
 *
 * @return {User | null} The user's authentication data if available, otherwise null.
 */
export const initializeAuthData = (): User | null => {
	const serializedUser = localStorage.getItem(USER_LOCALSTORAGE_KEY);
	if (serializedUser) {
		const parsedUser = JSON.parse(serializedUser);
		setAuthData(parsedUser);
		return useUserStore.getState().authData;
	}
	return null;
};

export const getUserAuthData = (): User => {
	const {authData} = useUserStore(
		useShallow((state: UserAuth) => ({
			authData: state.authData,
		}))
	);

	return authData;
};

export const logoutUser = (): void => {
	// localStorage.removeItem(USER_LOCALSTORAGE_KEY);
	setAuthData(initialStateAuth.authData); // ? undefined = initial state
};
