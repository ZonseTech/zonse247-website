import React from 'react';
import styled, { css } from 'styled-components';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Clients as clients } from '../../db/Clients';

const SectionStyles = css`
		padding: 12px 0;
		text-align: center;
		background-color: #f3f5fa;

		img {
			max-width: 45%;
			padding: 15px 0;
			display: inline-block;
			filter: grayscale(100);
			transition: all 0.4s ease-in-out;

			&:hover {
				filter: none;
				transform: scale(1.1);
			}
		}

		@media (max-width: 768px) {
			img {
				max-width: 40%;
			}
		}
	`,
	ClientsSection = styled.section(SectionStyles);

export default function Clients() {
	return (
		<ClientsSection>
			<Container>
				<Row>
					{clients.map((client, key) => (
						<Col
							key={key}
							lg={2}
							md={4}
							sm={6}
							className='d-flex align-items-center justify-content-center'>
							<img
								src={client.logo}
								className='img-fluid'
								alt={client.description}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</ClientsSection>
	);
}
