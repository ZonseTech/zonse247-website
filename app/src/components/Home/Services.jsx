import React from 'react';
import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import styled, { css } from 'styled-components';
import { FaLongArrowAltRight, FaBlog } from 'react-icons/fa';

import { Services as services } from '../../db/Services';

const ServicesSection = styled.section(css`
		padding: 60px 0;
		background-color: #f6f6f6;
	`),
	SectionItem = styled.div`
		padding: 40px;
		background: #fff;
		height: 100%;
		border-radius: 10px;

		.icon {
			width: 48px;
			height: 48px;
			position: relative;
			margin-bottom: 50px;

			svg {
				color: #666;
				font-size: 56px;
				transition: ease-in-out 0.3s;
				z-index: 2;
				position: relative;
			}

			&:before {
				position: absolute;
				content: '';
				height: 100%;
				width: 100%;
				background: #eeeeee;
				border-radius: 50px;
				z-index: 1;
				top: 10px;
				right: -20px;
				transition: 0.3s;
			}
		}

		h3 {
			color: var(--color-default);
			font-weight: 700;
			margin: 0 0 20px 0;
			padding-bottom: 8px;
			font-size: 22px;
			position: relative;
			display: inline-block;
			border-bottom: 4px solid #eeeeee;
			transition: 0.3s;
		}

		p {
			line-height: 24px;
			font-size: 14px;
			margin-bottom: 0;
		}

		&:hover {
			.icon {
				&:before {
					background: #00b6a1;
				}
			}

			h3 {
				border-color: var(--color-primary);
			}
		}
	`,
	ReadMoreButton = styled(Link)`
		margin-top: 15px;
		display: inline-block;
		color: var(--color-primary);
		text-decoration: none;
	`;

export default function Services() {
	return (
		<ServicesSection className='sections-bg'>
			<Container>
				<div className='section-title'>
					<h2>Our Services</h2>
					<p>
						{
							'We provide professional online solutions for individuals, businesses, developers and retailers. From total beginner to professional, our products and services have been designed thinking of performance and ease of use, to help anyone grows his business and takes advantage of the Web.'
						}
					</p>
				</div>
				<Row className='gy-4'>
					{services.map((service, key) => (
						<Col lg={4} md={'6'} key={key}>
							<SectionItem className='position-relative'>
								<div className='icon'>
									<FaBlog />
								</div>
								<h3>Nesciunt Mete</h3>
								<p>
									Provident nihil minus qui consequatur non omnis maiores. Eos
									accusantium minus dolores iure perferendis tempore et
									consequatur.
								</p>
								<ReadMoreButton className='stretched-link'>
									Read more <FaLongArrowAltRight />
								</ReadMoreButton>
							</SectionItem>
						</Col>
					))}
				</Row>
			</Container>
		</ServicesSection>
	);
}
