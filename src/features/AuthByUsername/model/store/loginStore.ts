import axios from 'axios';
import {setAuthData} from 'entities/User';
import {User} from 'entities/User/model/types/user.types';
import {URL_LOGIN} from 'shared/config/constants/constants';
import i18n from 'shared/config/i18n/i18n';
import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {LoginSchema} from '../types/LoginSchema';

interface LoginByUsernameProps {
	username: string;
	password: string;
}

const initialState: LoginSchema = {
	username: '',
	password: '',
	isLoading: false,
	error: '',
};

const useLoginStore = create<LoginSchema>()(
	devtools((set) => ({...initialState}), {
		name: 'LoginStore',
		// store: 'loginStore'
	}
));

export default useLoginStore;

// экспортируем пользовательский хук - не даем доступ ко всему содержимому хранилища
export const useLogin = () => useLoginStore((state) => state);

// экспортируем методЫ для работы с хранилищем
export const setUsername = (username: string): void => {
	const state = useLoginStore.getState();
	useLoginStore.setState({...state, username}, false, 'login/username');
};
export const setPassword = (password: string) => {
	const state = useLoginStore.getState();
	useLoginStore.setState({...state, password}, false, 'login/password');
};

export const loginByUsername = async (authData: LoginByUsernameProps) => {
	const state = useLoginStore.getState();

	try {
		// pending
		useLoginStore.setState({...state, isLoading: true, error: ''}, false, 'login/pending');
		const response = await axios.post<User>(URL_LOGIN, {...authData});
console.log(6,response)
		if (!response.data) {
			// rejected
			useLoginStore.setState(
				{...state, isLoading: false, error: i18n.t('No data to login')},
				false,
				'login/error'
			);
			throw new Error('No data to login');
		}

		// fullfilled
		useLoginStore.setState(
			{
				password: authData.password, // ? password
				username: response.data.username,
				isLoading: false,
				error: '',
			},
			false,
			'login/fullfilled'
		);

		// useUserStore.setState({id: response.data.id, username: response.data.username})
		await setAuthData({id:response.data.id, username:response.data.username});

		return response.data;
	} catch (error) {
		console.error(error);
		// FIXME: нужно логгировать ошибки с помощью axios
		// FIXME: must make logins with axios
		// const errorMessage = axios.
		useLoginStore.setState(
			{
				...state,
				isLoading: false,
				// error: error.message
				error: i18n.t('Incorrect login or password'),
			},
			false,
			'login/error'
		);
		throw new Error(`Error login : ${error.message}}`);
	}
	// finally {
	// 	// useLoginStore.setState({...state, isLoading: false}, true, 'login/start');
	// 	useLoginStore.setState({...initialState}, true, 'login/start');
	// 	// send some notification to the user	about the login
	// }
};
