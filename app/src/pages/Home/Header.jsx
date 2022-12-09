import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import './Header.scss';
import logo from '../../assets/images/logo-full-no-tagline.png';
import { BiListUl } from 'react-icons/bi';

export default function Header() {
	const home = process.env.REACT_APP_HOME;
	const login = process.env.REACT_APP_REDIRECT_TO_LOGIN;

	return (
		<header className='header fixed-top '>
			<Container className='d-flex align-items-center justify-content-between'>
				<Link href={home} className='logo'>
					<img src={logo} alt='...' className='img-fluid' />
				</Link>

				<Navbar>
					<ul>
						<li>
							<Link to={'#hero'} className='nav-link scrollto active'>
								{'Home'}
							</Link>
						</li>
						<li className='dropdown'>
							<Link to={'#about'}>{'About'}</Link>
							<ul>
								<Link to={'/about/our-team'}>{'Our Team'}</Link>
								<Link to={'/about/our-clients'}>{'Our Clients'}</Link>
							</ul>
						</li>
						<li className='dropdown'>
							<Link to={'#solutions'}>{'Solutions'}</Link>
							<ul>
								<Link to={'/solutions/software-development'}>
									{'Software Development'}
								</Link>
								<Link to={'/solutions/home-automation'}>
									{'Home Automation'}
								</Link>
								<Link to={'/solutions/hosting'}>{'Hosting'}</Link>
								<Link to={'/solutions/data-management'}>
									{'Data Management'}
								</Link>
								<Link to={'/solutions/it-consulting'}>{'IT Consulting'}</Link>
							</ul>
						</li>
						<li>
							<Link to={'/news'} className='nav-link scrollto '>
								{'News'}
							</Link>
						</li>
						<li>
							<Link to={'/pricing'} className='nav-link scrollto '>
								{'Pricing'}
							</Link>
						</li>
						<li>
							<Link to={'/contact-us'} className='nav-link scrollto '>
								{'Contact'}
							</Link>
						</li>
						<li>
							<Link to={login} className='getstarted scrollto'>
								{'Sign In'}
							</Link>
						</li>
					</ul>
					<BiListUl className='mobile-nav-toggle' />
				</Navbar>
			</Container>
		</header>
	);
}
