import React from 'react';

import { Button } from 'bootstrap';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
	BiBriefcaseAlt,
	BiCommand,
	BiGame,
	BiGlobeAlt,
	BiPlayCircle,
} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

import bground from '../../assets/images/hero-bg.jpg';
import heroImg from '../../assets/images/hero-img.png';

import './HeroCard.scss';

const login = process.env.REACT_APP_REDIRECT_TO_LOGIN;

const Animation = () => keyframes`
		0% {
			transform: translateY(10px);
		}

		100% {
			transform: translateY(-10px);
		}
	`,
	HeroImg = styled.img`
		animation: ${Animation} 2s ease-in-out infinite alternate-reverse both;
	`,
	Section = styled(Stack)`
		width: 100%;
		height: 70vh;
		background: linear-gradient(
				45deg,
				rgba(19, 45, 51, 0.49) 0%,
				rgba(24, 60, 49, 0.75) 100%
			),
			url(${bground}) center center no-repeat;
		background-size: cover;

		@media (min-width: 1200px) {
			&.hero {
				background-attachment: fixed;
			}
		}

		@media (max-width: 991px) {
			&.hero {
				text-align: center;

				img {
					-webkit-animation: none;
					animation: none;
				}

				${HeroImg} {
					text-align: center;

					img {
						width: 50%;
					}
				}
			}
		}

		@media (max-width: 768px) {
			&.hero {
				h1 {
					font-size: 26px;
					line-height: 36px;
				}

				h2 {
					font-size: 18px;
					line-height: 24px;
				}
			}
		}

		@media (max-width: 575px), (max-height: 600px) {
			&.hero {
				height: auto;
			}
		}
	`,
	Title = styled.h1(css`
		margin: 0;
		font-size: 52px;
		font-weight: 700;
		line-height: 64px;
		color: #fff;
	`),
	SubTitle = styled.h2(css`
		color: rgba(255, 255, 255, 0.8);
		margin: 10px 0 0 0;
		font-size: 20px;
	`),
	GetStartedButton = styled(Button)`
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 16px;
		letter-spacing: 1px;
		display: inline-block;
		padding: 10px 28px;
		border-radius: 5px;
		transition: 0.5s;
		margin-top: 30px;
		color: #fff;
		border: 2px solid #fff;
		text-decoration: none;

		&:hover {
			background: #fff;
			color: #5846f9;
		}
	`,
	WatchVideoButton = styled(Button)`
		font-size: 16px;
		display: flex;
		align-items: center;
		transition: 0.5s;
		margin: 10px 0 0 25px;
		color: #fff;
		line-height: 1;
		margin-top: 35px;
		text-decoration: none;
	`,
	WatchVideoButtonIcon = styled(BiPlayCircle)`
		line-height: 0;
		color: #fff;
		font-size: 32px;
		transition: 0.3s;
		margin-right: 8px;
	`;

function Hero() {
	return (
		<Section className='hero'>
			<Container className='py-3'>
				<Row>
					<Col
						xs={12}
						md={6}
						className='d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1'>
						<Title>We Speak All Kinds Of Technology</Title>
						<SubTitle>
							We are team of professional software and hardware engineers
						</SubTitle>
						<div className='d-flex justify-content-center justify-content-lg-start'>
							<GetStartedButton to={login} as={Link}>
								{'Get Started'}
							</GetStartedButton>

							<WatchVideoButton
								as={Link}
								to='https://www.youtube.com/watch?v=jDDaplaOz7Q'
								className='glightbox btn-watch-video'>
								<WatchVideoButtonIcon />

								<span>Watch Video</span>
							</WatchVideoButton>
						</div>
					</Col>
					<Col xs={12} md={6} className='order-1 order-lg-2'>
						<HeroImg src={heroImg} className='img-fluid' alt='...' />
					</Col>
				</Row>
			</Container>

			<div className='icon-boxes position-relative'>
				<div className='container position-relative'>
					<div className='row gy-4 mt-5'>
						<div className='col-xl-3 col-md-6 aos-init aos-animate'>
							<div className='icon-box'>
								<div className='icon'>
									<BiBriefcaseAlt />
								</div>
								<h4 className='title'>
									<a href='./hello' className='stretched-link'>
										Lorem Ipsum
									</a>
								</h4>
							</div>
						</div>
						<div
							className='col-xl-3 col-md-6 aos-init aos-animate'
							data-aos='fade-up'
							data-aos-delay='200'>
							<div className='icon-box'>
								<div className='icon'>
									<BiGame />
								</div>
								<h4 className='title'>
									<a href='./hello' className='stretched-link'>
										Sed ut perspiciatis
									</a>
								</h4>
							</div>
						</div>
						<div
							className='col-xl-3 col-md-6 aos-init aos-animate'
							data-aos='fade-up'
							data-aos-delay='300'>
							<div className='icon-box'>
								<div className='icon'>
									<BiGlobeAlt />
								</div>
								<h4 className='title'>
									<a href='./hello' className='stretched-link'>
										Magni Dolores
									</a>
								</h4>
							</div>
						</div>
						<div
							className='col-xl-3 col-md-6 aos-init aos-animate'
							data-aos='fade-up'
							data-aos-delay='500'>
							<div className='icon-box'>
								<div className='icon'>
									<BiCommand />
								</div>
								<h4 className='title'>
									<a href='./hello' className='stretched-link'>
										Nemo Enim
									</a>
								</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}

export default Hero;
