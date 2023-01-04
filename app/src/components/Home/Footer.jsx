import React from 'react';

import BackToTop from './BackToTop';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useScroll } from '../../utils/scroll';

const MainFooter = styled.footer`
		font-size: 14px;
		background-color: rgb(21, 114, 123);
		padding: 24px 0;
		color: #fff;
	`,
	SocialLinks = styled.div`
		justify-content: center;

		a {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			border: 1px solid rgba(255, 255, 255, 0.2);
			font-size: 16px;
			color: rgba(255, 255, 255, 0.7);
			margin-right: 10px;
			transition: 0.3s;

			&:hover {
				color: #fff;
				border-color: #fff;
			}
		}
	`,
	FooterInfo = styled.div`
		margin-bottom: 30px;
	`,
	Copyright = styled.div`
		text-align: center;
	`,
	Credits = styled.div`
		padding-top: 4px;
		text-align: center;
		font-size: 13px;

		a {
			color: #fff;
			text-decoration: none;
		}
	`;

export default function Footer() {
	const scrollPosition = useScroll();

	return (
		<>
			<MainFooter>
				<Container>
					<Row className='gy-4'>
						<FooterInfo className='text-center col-md-12'>
							<SocialLinks className='d-flex mt-4'>
								<Link to={'./'} target={'_blank'}>
									<FaTwitter />
								</Link>
								<Link to={'./'} target={'_blank'}>
									<FaFacebook />
								</Link>
								<Link to={'./'} target={'_blank'}>
									<FaInstagram />
								</Link>
								<Link to={'./'} target={'_blank'}>
									<FaLinkedin />
								</Link>
							</SocialLinks>
						</FooterInfo>
					</Row>
				</Container>
				<Container className='mt-4'>
					<Copyright>
						{'© Copyright'}{' '}
						<strong>
							<span>{'Zonse Investment'}</span>
						</strong>
						{'. All Rights Reserved'}
					</Copyright>
					<Credits>
						{'Designed by'} <Link to={'./'}>{'Zonse Technologies'}</Link>
					</Credits>
				</Container>
			</MainFooter>

			<BackToTop visible={scrollPosition > 300 ? 1 : 0} />

			<div className='preloader d-none' />
		</>
	);
}
