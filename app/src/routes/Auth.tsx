import React from 'react';
import Auth from '../layouts/Auth';
import {
	ConfirmPassword,
	ForgetPassword,
	Login,
	ResetPassword,
	VerifyEmail,
} from '../pages/Auth';

export const LOGIN_ROUTE = '/auth0/login';
export const FORGET_PASSWORD_ROUTE = '/auth0/forget-password';
export const RESET_PASSWORD_ROUTE = '/auth0/reset-password/:token';
export const CONFIRM_PASSWORD_ROUTE = '/auth0/confirm-password';
export const VERIFY_EMAIL_ROUTE = '/auth0/verify-email';

// eslint-disable-next-line
export default [
	{
		path: '/auth0',
		element: <Auth />,
		children: [
			{
				index: true,
				path: LOGIN_ROUTE,
				element: <Login />,
			},
			{
				name: 'forgetPassword',
				path: FORGET_PASSWORD_ROUTE,
				element: <ForgetPassword />,
			},
			{
				path: RESET_PASSWORD_ROUTE,
				element: <ResetPassword />,
			},
			{
				path: CONFIRM_PASSWORD_ROUTE,
				element: <ConfirmPassword />,
			},
			{
				path: VERIFY_EMAIL_ROUTE,
				element: <VerifyEmail />,
			},
		],
	},
];