import axios, { AxiosResponse } from 'axios';
import authHeader from './auth-header';

const API_URL: string | undefined = process.env.REACT_APP_ZONSE_API;

const getPublicContent = (): Promise<AxiosResponse<any, any>> => {
	return axios.get<any, AxiosResponse<any, any>, any>(API_URL + 'all');
};

const getUserBoard = (): Promise<AxiosResponse<any, any>> => {
	return axios.get<any, AxiosResponse<any, any>, any>(API_URL + 'user', {
		headers: authHeader(),
	});
};

const getModeratorBoard = (): Promise<AxiosResponse<any, any>> => {
	return axios.get<any, AxiosResponse<any, any>, any>(API_URL + 'mod', {
		headers: authHeader(),
	});
};

const getAdminBoard = (): Promise<AxiosResponse<any, any>> => {
	return axios.get<any, AxiosResponse<any, any>, any>(API_URL + 'admin', {
		headers: authHeader(),
	});
};

const UserService = {
	getPublicContent,
	getUserBoard,
	getModeratorBoard,
	getAdminBoard,
};

export default UserService;
