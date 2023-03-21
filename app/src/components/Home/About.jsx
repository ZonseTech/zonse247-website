import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import './About.scss';
import { HeroImage } from '../../assets/images';

export default function About() {
	/* return (
		<AboutSection>
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
		</AboutSection>
	); */

	return (
		<section className='pt-5'>
			<div className='about-section'>
				<Container>
					<Row>
						<Col xl={6} lg={6}>
							<div className='about-img-wrapper'>
								<div className='about-img position-relative d-inline-block '>
									<img alt='Zonse About' src={HeroImage} />
									<div className='about-experience'>
										<h3>5 Year Of Working Experience</h3>
										<p>
											{
												'Multifaceted investment company specializing in various business ventures that cater to diverse markets.'
											}
										</p>
									</div>
								</div>
							</div>
						</Col>
						<Col xl={6} lg={6}>
							<div className='about-content-wrapper'>
								<div
									className='section-title'
									Style='text-align: left !important'>
									<span>About Us</span>
									<h2 className='mb-40'>
										{'We speak all kind of technologies.'}
									</h2>
								</div>
								<div className='about-content'>
									<p className='mb-45 '>
										{
											'We provide professional online solutions for individuals, businesses, developers and retailers. From total beginner to professional, our products and services have been designed thinking of performance and ease of use, to help anyone grows his business and takes advantage of the Web.'
										}
									</p>
									<div className='counter-up '>
										<div className='counter'>
											<span
												id='secondo'
												className='countup count color-1'
												cup-end='30'
												cup-append='k'>
												30k
											</span>
											<h4>Happy Client</h4>
											<p>
												We Crafted an awesome design{' '}
												<br className='d-none d-md-block d-lg-none d-xl-block' />{' '}
												library that is robust and
											</p>
										</div>
										<div className='counter'>
											<span
												id='secondo'
												className='countup count color-2'
												cup-end='42'
												cup-append='k'>
												42k
											</span>
											<h4>Project Done</h4>
											<p>
												We Crafted an awesome design{' '}
												<br className='d-none d-md-block d-lg-none d-xl-block' />{' '}
												library that is robust and
											</p>
										</div>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</section>
	);
}
