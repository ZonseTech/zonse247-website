import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-full-no-tagline.png';

import './GuestTopNav.css';

function GuestTopNav() {
	return (
		<header className='header fixed-top'>
			<nav className='container-fluid'>
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

					<Services />

					<ul className='right hide-on-med-and-down'>
						<li>
							<Link to={'#home'}>{'Home'}</Link>
						</li>
						<li>
							<Link to={'#about'}>{'About'}</Link>
						</li>
						<li>
							<Link
								to={'#services'}
								className='dropdown-trigger'
								data-target='services-dropdown'>
								{'Services'}
								<i className='material-icons right'>arrow_drop_down</i>
							</Link>
						</li>
						<li>
							<Link to={'#featured-projects'}>{'Featured Projects'}</Link>
						</li>
						<li>
							<Link to={'#pricing'}>{'Pricing'}</Link>
						</li>
						<li>
							<Link to={'#contact'}>{'Contact Us'}</Link>
						</li>
						<li>
							<Link className='getstarted'>{'Get Started'}</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

function Services() {
	return (
		<>
			<ul id='services-dropdown' className='dropdown-content'>
				<li>
					<Link to={'!#'}>{'Software Development'}</Link>
				</li>
				<li>
					<Link to={'!#'}>{'Hosting'}</Link>
				</li>
				<li>
					<Link to={'!#'}>{'Software Development'}</Link>
				</li>
				<li>
					<Link to={'!#'}>{'Software Development'}</Link>
				</li>
			</ul>
		</>
	);
}

export default GuestTopNav;
