import React from 'react';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import styled, { css } from 'styled-components';
import './About.scss';

const AboutSection = styled.section(css`
		h3 {
			font-weight: 600;
			font-size: 26px;
		}
		p {
			font-size: 16px;
			font-weight: 400;

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
	{
		/* <AboutSection>
			<Container>
				<div className='section-title'>
					<h2>{'Who are we'}</h2>
					<p>
						At vero eos et accusamus et iusto odio dignissimos ducimus
						quiblanditiis praesentium
					</p>
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
		</AboutSection> */
	}

	return (
		<section id='about' class='pt-5'>
			<div class='about-section'>
				<div class='container'>
					<div class='row'>
						<div class='col-xl-6 col-lg-6'>
							<div class='about-img-wrapper'>
								<div class='about-img position-relative d-inline-block '>
									<img
										alt=''
										data-pagespeed-url-hash='2037241712'
										src='https://demo.graygrids.com/themes/space/assets/img/about/about-img.png'
										onerror='this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);'
									/>
									<div class='about-experience'>
										<h3>5 Year Of Working Experience</h3>
										<p>
											We Crafted an aweso design library that is robust and
											intuitive to use.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class='col-xl-6 col-lg-6'>
							<div class='about-content-wrapper'>
								<div class='section-title' Style='text-align: left !important'>
									<span>About Us</span>
									<h2 class='mb-40'>Built-With Boostrap 5, a New Experiance</h2>
								</div>
								<div class='about-content'>
									<p class='mb-45 '>
										We Crafted an awesome design library that is robust and
										intuitive to use. No matter you're building a business
										presentation websit or a complex web application our design
									</p>
									<div class='counter-up '>
										<div class='counter'>
											<span
												id='secondo'
												class='countup count color-1'
												cup-end='30'
												cup-append='k'>
												30k
											</span>
											<h4>Happy Client</h4>
											<p>
												We Crafted an awesome design{' '}
												<br class='d-none d-md-block d-lg-none d-xl-block' />{' '}
												library that is robust and
											</p>
										</div>
										<div class='counter'>
											<span
												id='secondo'
												class='countup count color-2'
												cup-end='42'
												cup-append='k'>
												42k
											</span>
											<h4>Project Done</h4>
											<p>
												We Crafted an awesome design{' '}
												<br class='d-none d-md-block d-lg-none d-xl-block' />{' '}
												library that is robust and
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
