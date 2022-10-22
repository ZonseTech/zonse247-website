import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Exception() {
	return (
		<div id='exception-section'>
			<Outlet />
		</div>
	);
}
