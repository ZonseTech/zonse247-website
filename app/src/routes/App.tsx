import React from 'react';
import Dashboard from '../pages/Dashboard/Dashboard';
import App from '../layouts/App';

// eslint-disable-next-line
export default [
	{
		path: '/app',
		element: <App />,
		children: [
			{
				index: true,
				path: '/app/dashboard',
				element: <Dashboard />,
			},
		],
	},
];
