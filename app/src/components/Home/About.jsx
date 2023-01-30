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
								"Zonse Investment is a multifaceted investment company specializing in various business ventures that cater to diverse markets. We offer an array of services including farming, vending, stationary shop, gaming center, website development and website hosting. Our mission is to provide innovative and sustainable solutions that empower businesses and individuals to grow and succeed in today's rapidly changing world."
							}
						</p>

						<p>
							{
								'We understand that each market has its unique challenges and we work tirelessly to ensure that our clients have the resources and support they need to succeed. Our team of experts brings a wealth of experience and knowledge to the table, helping our clients navigate the complex landscape of business and investment..'
							}
						</p>

						<p>
							{
								'At Zonse Investment, we believe in creating opportunities for growth and success, and we are committed to providing our clients with the tools and resources they need to achieve their goals. Whether you are looking to start a new business, expand your current operations, or simply need a reliable website development and hosting provider, Zonse Investment has the expertise and resources to help you succeed.'
							}
						</p>

						<ButtonReadMore to={'./'}>{'Learn More'}</ButtonReadMore>
					</Col>
				</Row>
			</Container>
		</AboutSection>
	);
}
