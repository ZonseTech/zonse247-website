import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Home/Footer';
import Header from '../pages/Home/Header';

export default function Guest() {

	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
