import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import bground from '../../assets/images/hero-img.png';
import './Hero.scss';

function Hero() {
	return (
		<>
			<section className='hero d-flex align-items-center'>
				<Container fluid data-aos='fade-up'>
					<Row className='justify-content-center'>
						<Col
							xl={5}
							lg={6}
							className='pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
							<h1>We Speak All Kinds Of Technology</h1>
							<h2>
								We are team of professional software and hardware engineers
							</h2>
							<div>
								<a href='#about' className='btn-get-started scrollto'>
									Get Started
								</a>
							</div>
						</Col>
						<Col
							xl={4}
							lg={6}
							className='col-xl-4 col-lg-6 order-1 order-lg-2 hero-img'
							data-aos='zoom-in'
							data-aos-delay={150}>
							<img src={bground} className='img-fluid animated' alt='...' />
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
}

export default Hero;
