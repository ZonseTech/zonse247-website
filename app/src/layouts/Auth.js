import React from 'react'
import { Outlet } from 'react-router-dom'
import { PublicRoute } from '../utils/hooks/publicRoute'

export default function Auth() {
	return (
		<PublicRoute>
			<div id='auth-section'>
				<Outlet />
			</div>
		</PublicRoute>

	)
}
