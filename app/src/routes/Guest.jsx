import React from 'react';
import E404 from '../errors/E404';
import Guest from '../layouts/Guest';
import Home from '../pages/Home';
import ContactUs from '../pages/Home/ContactUs';
import Privacy from '../pages/Home/Privacy';

const API_BASENAME = 'http://127.0.0.1:8000';

// eslint-disable-next-line
export default [
	{
		element: <Guest />,
		path: '',
		errorElement: <E404 />,
		children: [
			{
				index: true,
				element: <Home />,
				loader: ({ params }) => {
					return fetch(`${API_BASENAME}/api/teams/${params.teamId}`);
				},
			},
			{
				element: <Privacy />,
				path: 'privacy',
			},
			{
				element: <ContactUs />,
				path: 'contact-us',
			},
		],
	},
];
