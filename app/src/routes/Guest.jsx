import React from 'react';
import E404 from '../errors/E404';
import Guest from '../layouts/Guest';
import Home from '../pages/Home';
import ContactUs from '../pages/Home/ContactUs';
import Privacy from '../pages/Home/Privacy';

// eslint-disable-next-line
export default [
	{
		element: <Guest />,
		path: '/',
		errorElement: <E404 />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				element: <Privacy />,
				path: '/privacy',
			},
			{
				element: <ContactUs />,
				path: '/contact-us',
			},
		],
	},
];
