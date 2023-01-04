import { Key } from '@mui/icons-material';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { BiCheck, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Pricings } from '../../db/Pricing';

const PricingSection = styled.section(css`
		h3 {
			font-weight: 500;
			margin-bottom: 15px;
			font-size: 20px;
			color: #37517e;
		}

		h4 {
			font-size: 48px;
			color: #37517e;
			font-weight: 400;
			margin-bottom: 25px;

			sup {
				font-size: 28px;
			}

			span {
				color: #47b2e4;
				font-size: 18px;
				display: block;
			}
		}
		ul {
			padding: 20px 0;
			list-style: none;
			color: #999;
			text-align: left;
			line-height: 20px;

			li {
				padding: 10px 0 10px 30px;
				position: relative;
			}

			svg {
				color: #28a745;
				font-size: 24px;
				position: absolute;
				left: 0;
				top: 6px;
			}
			.na {
				color: #ccc;

				svg {
					color: #ccc;
				}

				span {
					text-decoration: line-through;
				}
			}
		}
	`),
	ButtonGetStarted = styled(Link)`
		display: inline-block;
		padding: 12px 35px;
		border-radius: 50px;
		color: #47b2e4;
		transition: none;
		font-size: 16px;
		font-weight: 500;
		transition: 0.3s;
		border: 1px solid #47b2e4;
		text-decoration: none;

		&:hover {
			background: #47b2e4;
			color: #fff;
		}
	`,
	PricingBox = styled.div`
		padding: 60px 40px;
		box-shadow: 0 3px 20px -2px rgba(20, 45, 100, 0.1);
		background: #fff;
		height: 100%;
		border-top: 4px solid #fff;
		border-radius: 5px;

		@media (max-width: 992px) {
			.box {
				max-width: 60%;
				margin: 0 auto 30px auto;
			}
		}

		@media (max-width: 767px) {
			.box {
				max-width: 80%;
				margin: 0 auto 30px auto;
			}
		}

		@media (max-width: 420px) {
			.box {
				max-width: 100%;
				margin: 0 auto 30px auto;
			}
		}
	`;

export default function Pricing() {
	const number = 211435567;
	const money = new Intl.NumberFormat(undefined, {
		currency: 'MKW',
		style: 'currency',
	});

	console.log(money.format(number));

	return (
		<PricingSection>
			<Container>
				<div className='section-title'>
					<h2>{'Pricing'}</h2>
					<p>Simple prices, flexible options & nothing hidden</p>
				</div>
				<Row style={{ paddingTop: '40px' }}>
					{Pricings.map((pricing, key) => (
						<Col lg={4} key={Key}>
							<PricingBox className='box'>
								<h3>Free Plan</h3>
								<h4>
									<sup>$</sup>0<span>per month</span>
								</h4>
								<ul>
									<li>
										<BiCheck /> Quam adipiscing vitae proin
									</li>
									<li>
										<BiCheck /> Nec feugiat nisl pretium
									</li>
									<li>
										<BiCheck /> Nulla at volutpat diam uteera
									</li>
									<li className='na'>
										<BiX />
										<span>Pharetra massa massa ultricies</span>
									</li>
									<li className='na'>
										<BiX />
										<span>Massa ultricies mi quis hendrerit</span>
									</li>
								</ul>
								<ButtonGetStarted>Get Started</ButtonGetStarted>
							</PricingBox>
						</Col>
					))}
				</Row>
			</Container>
		</PricingSection>
	);
}
