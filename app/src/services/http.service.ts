import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

const instance: AxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_ZONSE_API,
	headers: {
		'Content-type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
});

instance.interceptors.response.use(
	(res: AxiosResponse<any, any>) => res,
	(error: AxiosError) => {
		const { message } = error;
		const status: number | undefined = error.response?.status;

		switch (status) {
			case 400:
				toast.error(message);
				break;

			case 401:
				toast.error(message);
				break;

			case 404:
				toast.error(message);
				break;

			case 500:
				toast.error(message);
				break;
			default:
				toast.error('Oops! Something went wrong');
		}

		return Promise.reject(error);
	}
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const http = {
	get: async <T>(url: string, params?: {}, baseURL?: string) => {
		const response = await instance.get<T>(url, {
			params,
			baseURL,
		});
		return responseBody(response);
	},
	post: async <T>(url: string, body: {}, baseURL?: string) => {
		if (baseURL) instance.defaults.baseURL = baseURL;
		const response = await instance.post<T>(url, body);
		return responseBody(response);
	},
};

export { instance, http };
