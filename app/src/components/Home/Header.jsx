import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styled, { css } from 'styled-components';

import logo from '../../assets/images/logo-full-no-tagline.png';
import { useScroll } from '../../utils/scroll';

const login = process.env.REACT_APP_REDIRECT_TO_LOGIN;

/* const NavLink = React.forwardRef(
	({ activeClassName, activeStyle, ...props }, ref) => {
		return (
			<BaseNavLink
				ref={ref}
				{...props}
				className={({ isActive }) =>
					[props.className, isActive ? activeClassName : null]
						.filter(Boolean)
						.join(' ')
				}
				style={({ isActive }) => ({
					...props.style,
					...(isActive ? activeStyle : null),
				})}
			/>
		);
	}
); */

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
	CustomNavLink = styled(NavLink)`
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
	// eslint-disable-next-line
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

		.dropdown-menu {
			padding-top: 0;
			padding-bottom: 0;
			border-radius: 0;
		}

		.dropdown-item {
			padding: 12px 20px;
			font-size: medium;
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

const AboutUs = [
	{
		name: 'Overview',
		link: '/about/company-profile',
	},
	{
		name: 'Company History',
		link: '/about/company-history',
	},
	{
		name: 'Our Team',
		link: '/about/our-team',
	},
	{
		name: 'Partners',
		link: '/about/our-partners',
	},
];

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
						<CustomNavLink to={'./'} end>
							{'Home'}
						</CustomNavLink>

						{
							<Category
								title={
									<span className='text-white rounded-0'>{'About Us'}</span>
								}
								id='solutions-dropdown'
								className='py-0'>
								{AboutUs.map((about, key) => (
									<NavDropdown.Item
										className='text-success'
										as={Link}
										key={key}
										to={about.link}>
										{about.name}
									</NavDropdown.Item>
								))}
							</Category>
						}

						<CustomNavLink to={'/solutions'}>{'Solutions'}</CustomNavLink>

						<CustomNavLink to='/news'>{'News'}</CustomNavLink>

						<CustomNavLink to='/pricing'>{'Pricing'}</CustomNavLink>
						<CustomNavLink to='/contact-us'>{'Contact Us'}</CustomNavLink>
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
