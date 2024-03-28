export interface LoginSchema { 
	username: string;
	password: string;
	isLoading: boolean;
	error?: string;
}


type LoginControls = {
	controls: {
		setUsername: (username: string) => void;
		setPassword: (password: string) => void;
		loginByUsername: (userId: string) => Promise<unknown>;
	};
};

export type LoginStore = LoginSchema & LoginControls
