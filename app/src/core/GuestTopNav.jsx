import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-full-no-tagline.png';

import './GuestTopNav.css';

function GuestTopNav() {
	return (
		<header className='header'>
			<nav className='gradient-45deg-purple-deep-orange gradient-shadow'>
				<div className='nav-wrapper'>
					<Link href={'/'} className='brand-logo ml-2 logo'>
						<img src={logo} alt='' className='mt-1' />
					</Link>

					<Link
						href='#'
						data-target='mobile-demo2'
						className='button-collapse sidenav-trigger hide-on-med-and-up'>
						menu
					</Link>
					<ul className='right hide-on-med-and-down'>
						<li>
							<Link to={'#about'}>{'About'}</Link>
						</li>
						<li>
							<Link
								className='btn waves-effect waves-light gradient-45deg-purple-deep-orange white-text'
								href='#'>
								Get Started
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default GuestTopNav;
