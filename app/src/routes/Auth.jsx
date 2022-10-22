import React from 'react';
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
		path: '/login',
		element: <Login />,
	},
	{
		path: '/forget-password',
		element: <ForgetPassword />,
	},
	{
		path: '/reset-password/:token',
		element: <ResetPassword />,
	},
	{
		path: '/confirm-password',
		element: <ConfirmPassword />,
	},
	{
		path: '/verify-email',
		element: <VerifyEmail />,
	},
];
