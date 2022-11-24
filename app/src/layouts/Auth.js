import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { PublicRoute } from '../utils/hooks/publicRoute'
import logo from '../assets/images/logo-icon-colour.png';


export default function Auth() {

	return (
		<PublicRoute>
			<div id='auth-section'>
				<div className='center-align mt-4'>
					<Link to={"/"}>
						<img
							className='responsive-img circle z-depth-'
							src={logo}
							alt='...'
							width={100}
						/>
					</Link>
				</div>
				<div className='vertical-layout page-header-light vertical-menu-collapsible vertical-menu-nav-dark preload-transitions 1-column login-bg blank-page blank-page'>
					<div className='row'>
						<div className='col s12'>
							<div className='container'>
								<div id='login-page' className='row'>
									<div className='col s12 m6 l4 z-depth-4 card-panel border-radius-1 login-card bg-opacity-8'>
										<Outlet />
									</div>
								</div>
							</div>
							<div className='content-overlay' />
						</div>
					</div>
				</div>
			</div>
		</PublicRoute>

	)
}
