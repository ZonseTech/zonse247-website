import React from 'react';
import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import styled, { css } from 'styled-components';
// import callToActionBg from '../../assets/images/cta-bg.jpg';
import callToActionBg from '../../assets/images/call-to-action.svg';

const CTAction = styled.section`
		background: linear-gradient(rgba(19, 89, 83, 0.85), rgb(21, 114, 123)),
			url(${callToActionBg}) fixed center center;
		background-size: cover;
		padding: 120px 0;

		h3 {
			color: #fff;
			font-size: 28px;
			font-weight: 700;
		}

		p {
			color: #fff;
		}

		@media (max-width: 1024px) {
			.cta {
				background-attachment: scroll;
			}
		}
	`,
	CTActionButton = styled(Link)`
		font-weight: 500;
		font-size: 16px;
		letter-spacing: 1px;
		display: inline-block;
		padding: 12px 40px;
		border-radius: 50px;
		transition: 0.5s;
		margin: 10px;
		border: 2px solid #fff;
		color: #fff;
		text-decoration: none;

		&:hover {
			background: rgba(19, 89, 83, 0.85);
			border: 2px solid rgba(19, 89, 83, 0.85);
		}
	`,
	CTActionContainer = styled(Col)(css`
		@media (min-width: 769px) {
			div {
				display: flex;
				align-items: center;
				justify-content: flex-end;
			}
		}
	`);

export default function CallToAction() {
	return (
		<CTAction className='cta'>
			<Container>
				<Row>
					<Col lg={9} className='text-center text-lg-start'>
						<h3>{'Interested In Our Services?'}</h3>
						<p>
							{
								'We focus on personalised services which are flexible and co-created with people to help them take the lead in achieving their own positive outcomes.'
							}
						</p>
					</Col>
					<CTActionContainer lg={3} className='text-center'>
						<CTActionButton className='cta-btn align-middle' to='#'>
							{'Contact Us'}
						</CTActionButton>
					</CTActionContainer>
				</Row>
			</Container>
		</CTAction>
	);
}
