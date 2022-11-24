import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Loading from '../components/Loading';

export default function Guest() {
	const navigation = useNavigation();

	return (
		<div className='container'>
			{(navigation.state === "loading") && <Loading isLoading={true} message="Loading" />}
			{/* topNavbar */}
			<Outlet />
			{/* footer */}
		</div>
	);
}
