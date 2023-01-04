import React from 'react';
import Container from 'react-bootstrap/Container';
import { BiEnvelope, BiPhone } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function TopNav() {
	const ContactInfo = styled.div`
			span {
				font-style: normal;

				a {
					padding-left: 5px;
					color: rgba(255, 255, 255, 0.7);
					line-height: 0;
					transition: 0.3s;
					text-decoration: none;
					&:hover {
						color: #fff;
						text-decoration: underline;
					}
				}
				svg {
					padding-left: 5px;
					color: rgba(255, 255, 255, 0.7);
					font-size: 20px;
				}
			}
		`,
		SocialLinks = styled.div`
			a {
				color: rgba(255, 255, 255, 0.7);
				line-height: 0;
				transition: 0.3s;
				margin-left: 20px;
				&:hover {
					color: #fff;
				}
			}
		`,
		Section = styled.section`
			background: rgba(19, 89, 83, 0.85);
			height: 40px;
			font-size: 14px;
			transition: all 0.5s;
			color: #fff;
			padding: 0;

			@media (max-width: 575px) {
				${ContactInfo} {
					svg {
						a {
							font-size: 13px;
						}
						span {
							font-size: 13px;
						}
					}
				}
			}
		`;

	return (
		<Section className='d-flex align-items-center'>
			<Container className='d-flex justify-content-center justify-content-md-between'>
				<ContactInfo className='d-flex align-items-center'>
					<span className='d-flex align-items-center'>
						<BiEnvelope />
						<Link to='mailto:contact@example.com'>contact@example.com</Link>
					</span>
					<span className='d-flex align-items-center ms-4'>
						<BiPhone />
						<span>+1 5589 55488 55</span>
					</span>
				</ContactInfo>
				<SocialLinks className='d-none d-md-flex align-items-center'>
					<Link to={'./'} target={'_blank'} className='twitter'>
						<FaTwitter />
					</Link>
					<Link to={'./'} target={'_blank'} className='facebook'>
						<FaFacebook />
					</Link>
					<Link to={'./'} target={'_blank'} className='instagram'>
						<FaInstagram />
					</Link>
					<Link to={'./'} target={'_blank'} className='linkedin'>
						<FaLinkedin />
					</Link>
				</SocialLinks>
			</Container>
		</Section>
	);
}
