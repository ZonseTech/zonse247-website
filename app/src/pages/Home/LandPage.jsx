import React from 'react';
import About from './About';
import ContactUs from './ContactUs';
import Pricing from './Pricing';
import Services from './Services';
import Statistics from './Statistics';

function LandPage() {
	return (
		<>
			<main className='home-main'>
				<About />
				<Statistics />
				<Services />
				<Pricing />
				<ContactUs />
			</main>
			{/* End #main */}
		</>
	);
}

export default LandPage;
