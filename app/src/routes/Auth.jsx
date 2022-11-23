import React from 'react';
import Auth from '../layouts/Auth';
import {
	ConfirmPassword,
	ForgetPassword,
	Login,
	ResetPassword,
	VerifyEmail,
} from '../pages/Auth';

// eslint-disable-next-line
export default [
	{
		path: '/auth0',
		element: <Auth />,
		children: [
			{
				index: true,
				path: '/auth0/login',
				element: <Login />,
			},
			{
				path: '/auth0/forget-password',
				element: <ForgetPassword />,
			},
			{
				path: '/auth0/reset-password/:token',
				element: <ResetPassword />,
			},
			{
				path: '/auth0/confirm-password',
				element: <ConfirmPassword />,
			},
			{
				path: '/auth0/verify-email',
				element: <VerifyEmail />,
			},
		],
	},
];
