import React from 'react';
import styled, { css } from 'styled-components';
import StatisticsImage from '../../assets/images/stats-img.svg';
import './Statistics.scss';

const StatisticItem = styled.div(css`
	padding: 30px;
	width: 100%;
	span {
		font-size: 32px;
		display: block;
		font-weight: 700;
		margin-bottom: 15px;
		padding-bottom: 15px;
		position: relative;

		&:after {
			content: '';
			position: absolute;
			display: block;
			width: 20px;
			height: 3px;
			background: rgba(19, 89, 83, 0.85);
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
		}
	}
	p {
		padding: 0;
		margin: 0;
		font-size: 15px;
		font-weight: 600;
	}
`);

export default function Statistics() {
	{
		/* <section id='stats-counter' className='stats-counter'>
			<div className='container'>
				<div className='row gy-4 align-items-center'>
					<div className='col-lg-8'>
						<img src={StatisticsImage} alt='' className='img-fluid' />
					</div>
					<div className='col-lg-4'>
						<div className='row gy-4 aos-init aos-animate'>
							<div className='col-lg-6 col-6'>
								<StatisticItem className='text-center w-100 h-100'>
									<span className='purecounter'>232</span>
									<p>Clients</p>
								</StatisticItem>
							</div>
							<div className='col-lg-6 col-6'>
								<StatisticItem className='text-center w-100 h-100'>
									<span className='purecounter'>521</span>
									<p>Projects</p>
								</StatisticItem>
							</div>
							<div className='col-lg-6 col-6'>
								<StatisticItem className='text-center w-100 h-100'>
									<span className='purecounter'>1453</span>
									<p>Support</p>
								</StatisticItem>
							</div>
							<div className='col-lg-6 col-6'>
								<StatisticItem className='text-center w-100 h-100'>
									<span className='purecounter'>32</span>
									<p>Workers</p>
								</StatisticItem>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section> */
	}
	return (
		<section
			id='contact'
			className='contact-section cta-bg img-bg pt-110 pb-100'
			style={{
				backgroundImage:
					'url(https://demo.graygrids.com/themes/space/assets/img/bg/xcta-bg.jpg.pagespeed.ic.lD7u3bAeTc.webp)',
			}}>
			<div class='container'>
				<div class='row align-items-center'>
					<div class='col-xl-5 col-lg-7'>
						<div class='about-section-title mb-60'>
							<span class='text-white text-uppercase'>Learn More</span>
							<h2 class='text-white'>Download our company profile below</h2>
							<p class='text-white'>
								Discover our mission, values, and services in-depth. Get a
								comprehensive understanding of how we can help you achieve your
								goals
							</p>
						</div>
					</div>
					<div class='col-xl-7 col-lg-5'>
						<div class='contact-btn text-start text-lg-end text-uppercase'>
							<a href='contact.html' class='theme-btn'>
								Download Now
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
