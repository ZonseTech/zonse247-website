import React from 'react';
import Hero from './Home/Hero';
import About from './Home/About';
import ContactUs from './Home/ContactUs';
import Pricing from './Home/Pricing';
import Services from './Home/Services';
import Statistics from './Home/Statistics';

import './Home.scss';

export default function Home() {
	// const user = useLoaderData();

	return (
		<>
			<Hero />
			<main className='home-main'>
				<About />
				<Statistics />
				<Services />
				<Pricing />
				<ContactUs />
			</main>
		</>
	);
}
