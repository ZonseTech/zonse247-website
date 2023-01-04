import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styled, { css } from 'styled-components';

import logo from '../../assets/images/logo-full-no-tagline.png';
import { useScroll } from '../../utils/scroll';

const login = process.env.REACT_APP_REDIRECT_TO_LOGIN;

const Logo = styled(Navbar.Brand)`
		font-size: 30px;
		margin: 0;
		padding: 0;
		line-height: 1;
		font-weight: 500;
		letter-spacing: 2px;
		text-transform: uppercase;

		img {
			max-height: 40px;
		}
	`,
	HeaderTopOnScroll = css`
		transition: all 0.5s;
		z-index: 997;
		padding: 12px 0;
		background: rgba(19, 89, 83, 0.85);
	`,
	HeaderTop = styled(Navbar)`
		padding: 15px 0;
		background: rgb(21, 114, 123);
		${(props) => props.color && HeaderTopOnScroll};
	`,
	NavLink = styled(Nav.Link)`
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 0 10px 30px;
		font-size: 15px;
		font-weight: 500;
		color: #fff;
		white-space: nowrap;
		transition: 0.3s;
		text-decoration: none;
	`,
	Category = styled(NavDropdown)`
		right: -15px;
		transition: 0.3s;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 15px;
		font-weight: 500;
		color: #fff;
		white-space: nowrap;
		transition: 0.3s;
		text-decoration: none;
		border-radius: 0px;

		&:focus,
		&:hover {
			color: #47b2e4;
		}

		.dropdown-toggle::after {
			content: none;
		}
	`,
	GetStartedButton = styled(Button)`
		padding: 8px 20px;
		margin-left: 30px;
		border-radius: 50px;
		color: #fff;
		font-size: 14px;
		border: 2px solid #efefef;
		font-weight: 600;
		text-decoration: none;
	`;

function Header() {
	const scrollY = useScroll();

	return (
		<HeaderTop sticky='top' color={scrollY > 25 ? 'show' : ''} expand='md'>
			<Container>
				<Logo as={Link} to={'./'} className='me-auto'>
					<img src={logo} alt='Zonse Investment' className='img-fluid' />
				</Logo>

				<Navbar.Toggle aria-controls='navbar-mobile' className='rounded-0' />

				<Navbar.Collapse id='navbar-mobile'>
					<Nav className='justify-content-end' style={{ width: '100%' }}>
						<NavLink as={Link} to={'./'}>
							{'Home'}
						</NavLink>

						<Category
							title={<span className='text-white rounded-0'>{'About'}</span>}
							id='about-dropdown'>
							<NavDropdown.Item
								className='text-success'
								as={Link}
								to={'/about/our-team'}>
								{'Our Team'}
							</NavDropdown.Item>
							<NavDropdown.Item
								className='text-success'
								as={Link}
								to={'/about/our-clients'}>
								{'Our Clients'}
							</NavDropdown.Item>
						</Category>

						<Category
							title={
								<span className='text-white rounded-0'>{'Solutions'}</span>
							}
							id='solutions-dropdown'>
							<NavDropdown.Item
								className='text-success'
								as={Link}
								to={'/solutions/software-development'}>
								{'Software Development'}
							</NavDropdown.Item>
							<NavDropdown.Item
								className='text-success'
								as={Link}
								to={'/solutions/home-automation'}>
								{'Home Automation'}
							</NavDropdown.Item>
							<NavDropdown.Item
								className='text-success'
								as={Link}
								to={'/solutions/hosting'}>
								{'Hosting'}
							</NavDropdown.Item>
							<NavDropdown.Item
								className='text-success'
								as={Link}
								to={'/solutions/data-management'}>
								{'Data Management'}
							</NavDropdown.Item>
							<NavDropdown.Item
								className='text-success'
								as={Link}
								to={'/solutions/it-consulting'}>
								{'IT Consulting'}
							</NavDropdown.Item>
						</Category>

						<NavLink as={Link} to='/news'>
							{'News'}
						</NavLink>

						<NavLink as={Link} to='/pricing'>
							{'Pricing'}
						</NavLink>
						<NavLink as={Link} to='/contact-us'>
							{'Contact Us'}
						</NavLink>
						<GetStartedButton to={login} as={Link}>
							{'Create Account'}
						</GetStartedButton>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</HeaderTop>
	);
}

export default Header;
