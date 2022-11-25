import React from 'react'
import { Outlet } from 'react-router-dom'
import GuestFooter from '../core/GuestFooter';
import GuestTopNav from '../core/GuestTopNav';

export default function Guest() {

	return (
		<>
			<GuestTopNav />
			<Outlet />
			<GuestFooter />
		</>
	);
}
