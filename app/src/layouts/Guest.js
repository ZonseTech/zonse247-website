import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Guest() {
	return (
		<div id="guest-section">
			<Outlet />
		</div>
	)
}
