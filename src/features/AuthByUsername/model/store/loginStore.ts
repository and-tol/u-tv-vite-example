import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';
import {LoginSchema, LoginStore} from '../types/LoginSchema';
import axios from 'axios';
import {URL_LOGIN} from 'shared/config/constants/constants';
import {User} from 'entities/User';

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
	})
);

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
		useLoginStore.setState({...state, isLoading: true, error: ''});
		const response = await axios.post<User>(URL_LOGIN, {authData});

		if (!response.data) {
			// rejected
			useLoginStore.setState({...state, isLoading: false, error: 'No data to login'});
			throw new Error('No data to login');
		}

		// fullfilled
		useLoginStore.setState({
			password: authData.password, // ? password
			username: response.data.username,
			isLoading: false,
			error: '',
		});
		
		return response.data;
	} catch (error) {
		console.error(error);
		// FIXME: нужно логгировать ошибки с помощью axios
		// FIXME: must make logins with axios
		// const errorMessage = axios.
		useLoginStore.setState({
			...state,
			isLoading: false,
			error: error.message
		});
		throw new Error('Error login');
	}
	finally { 
		useLoginStore.setState({...state, isLoading: false});
		// send some notification to the user	about the login
	}
};
