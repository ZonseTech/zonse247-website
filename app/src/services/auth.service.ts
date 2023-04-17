import { AxiosResponse } from 'axios';
import { instance } from '.';

const login = async (email: string, password: string): Promise<any> => {
	const response: AxiosResponse<any, any> = await instance.post('/login', {
		email,
		password,
	});

	return response.data;
};

const register = (data: any) => {
	return instance.post('/register', data);
};

const logout = () => {
	localStorage.removeItem('user');
	localStorage.removeItem('token');
};

const resetPassword = () => {
	return;
};

const confirmPassword = () => {
	return;
};

const getUser = () => {
	const user: any = localStorage.getItem('user');

	if (user) return JSON.parse(user);
};

const AuthService = {
	register,
	login,
	logout,
	resetPassword,
	confirmPassword,
	getUser,
};

export default AuthService;
