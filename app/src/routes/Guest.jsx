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
				path: '/solutions',
				// element: <Guest />,
				children: [
					{
						index: true,
						path: '/solutions/software-development',
						element: <div>Software Development</div>,
					},
					{
						index: true,
						path: '/solutions/home-automation',
						element: <div>home automation</div>,
					},
					{
						index: true,
						path: '/solutions/hosting',
						element: <div>hosting</div>,
					},
					{
						index: true,
						path: '/solutions/it-consulting',
						element: <div>it consulting</div>,
					},
					{
						index: true,
						path: '/solutions/data-management',
						element: <div>data management</div>,
					},
				],
			},
			{
				path: '/about',
				// element: <Guest />,
				children: [
					{
						index: true,
						path: '/about/our-team',
						element: <div>our team</div>,
					},
					{
						index: true,
						path: '/about/our-clients',
						element: <div>our clients</div>,
					},
				],
			},
			{
				element: <Privacy />,
				path: '/news',
			},
			{
				element: <Privacy />,
				path: '/pricing',
			},
			{
				element: <ContactUs />,
				path: 'contact-us',
			},
		],
	},
];
