export interface User {
	id: string,
	username: string,
}

export interface UserAuth {
	authData?:{
		id: string,
		username: string,
	},
}
