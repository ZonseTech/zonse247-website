import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header, TopNav } from '../components/Home';
import GlobalStyle from '../pages/Home/globalStyles';

export default function Guest() {

	return (
		<>
			<GlobalStyle />
			<TopNav />
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
