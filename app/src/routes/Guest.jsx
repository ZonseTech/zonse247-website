import React from 'react';
import E404 from '../errors/E404';
import Guest from '../layouts/Guest';
import {
	ContactUs,
	LandingPage,
	News,
	OurClients,
	OurTeam,
	Pricing,
	Solutions,
} from '../pages/Home';

// eslint-disable-next-line
export default [
	{
		element: <Guest />,
		path: '',
		errorElement: <E404 />,
		children: [
			{
				index: true,
				element: <LandingPage />,
				loader: ({ params }) => {
					// return fetch(`${API_BASENAME}/api/teams/${params.teamId}`);
					return {};
				},
			},
			{
				path: '/about',
				children: [
					{
						index: true,
						path: '/about/our-team',
						element: <OurTeam />,
					},
					{
						index: true,
						path: '/about/our-clients',
						element: <OurClients />,
					},
				],
			},
			{
				path: '/solutions/:solution',
				element: <Solutions />,
			},
			{
				element: <News />,
				path: '/news',
			},
			{
				element: <Pricing />,
				path: '/pricing',
			},
			{
				element: <ContactUs />,
				path: '/contact-us',
			},
		],
	},
];
