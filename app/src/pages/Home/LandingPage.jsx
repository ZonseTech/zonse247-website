import React from 'react';
import Stack from 'react-bootstrap/Stack';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import {
	About,
	CallToAction,
	Clients,
	Hero,
	Services,
	Statistics,
} from '../../components/Home';

export default function LandingPage() {
	return (
		<ThemeProvider
			breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
			minBreakpoint='xxs'>
			<Hero />
			<Stack>
				<Clients />
				<About />
				<Statistics />
				<CallToAction />
				<Services />
			</Stack>
		</ThemeProvider>
	);
}
