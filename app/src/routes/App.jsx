import React from 'react';
import App from '../layouts/App';
import Dashboard from '../pages/Dashboard/Dashboard';

// eslint-disable-next-line
export default [
	{
		path: '/dashboard',
		element: <App />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
		],
	},
];
