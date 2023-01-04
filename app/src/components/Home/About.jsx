import React from 'react';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import styled, { css } from 'styled-components';

const AboutSection = styled.section(css`
		h3 {
			font-weight: 600;
			font-size: 26px;
		}
		p {
			&:last-child {
				margin-bottom: 0;
			}
		}
	`),
	ButtonReadMore = styled(Link)`
		font-weight: 500;
		font-size: 14px;
		letter-spacing: 1px;
		display: inline-block;
		padding: 12px 32px;
		border-radius: 4px;
		transition: 0.3s;
		line-height: 1;
		color: rgba(19, 89, 83, 0.85);
		-webkit-animation-delay: 0.8s;
		animation-delay: 0.8s;
		margin-top: 6px;
		text-decoration: none;
		border: 2px solid rgba(19, 89, 83, 0.85);

		&:hover {
			background: rgba(19, 89, 83, 0.85);
			color: #fff;
		}
	`;

export default function About() {
	return (
		<AboutSection>
			<Container>
				<div className='section-title'>
					<h2>{'Who are we'}</h2>
				</div>
				<Row>
					<Col lg={12} className='pt-4 pt-lg-0'>
						<p>
							{
								'REGISTER is an international leader in digital services for professionals and SMBs. We are aimed to be the best partner in the online business growing, through the creation of the online identity and the promotion and protection of the brand. '
							}
						</p>

						<p>
							{
								'REGISTER is one of the leading names in the European Domain & Hosting segment and ranking among the top groups in all geographies in which the Group operates: in Italy through its established brands Register.it, Sfera, Etinet and Dominiando as well as in the UK, Ireland, Spain, France, Portugal and the Netherlands under the Namesco, Simply Hosting, Tagadab, LCN Register365, LetsHost, Hosting Ireland, Nominalia, Dominios.pt, Iberweb and Amen brands.'
							}
						</p>

						<p>
							{
								'Over the past few years, the REGISTER Group has focused its resources on the development of the D&H business, investing in a cutting-edge, integrated technology infrastructure, which includes the proprietary Data center completed in 2015 and the network of international Data Centers, the integration of the operating platforms and the development of the product portfolio, stepping up services in “We do it for you” mode and anticipating relevant market trends. To date, the Dada Group is one of the top European players in online presence and visibility services for SMEs.'
							}
						</p>

						<ButtonReadMore to={'./'}>{'Learn More'}</ButtonReadMore>
					</Col>
				</Row>
			</Container>
		</AboutSection>
	);
}
