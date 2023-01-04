import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TeamSection = styled.section(css``);

export default function OurTeam() {
	return (
		<TeamSection>
			<Container>
				<div className='section-title'>
					<h2>Team</h2>
					<p>
						{
							'The procedure may seem a little intimidating to a potential customer looking for a new service provider. Who are the real people hiding behind all the smoke and mirrors, one would reasonably wonder?'
						}
					</p>
				</div>
				<Row>
					<Col lg={6}>
						<div className='member d-flex align-items-start'>
							<div className='pic'>
								<img
									src='assets/images/team/team-1.jpg'
									className='img-fluid'
									alt=''
								/>
							</div>
							<div className='member-info'>
								<h4>Walter White</h4>
								<span>Chief Executive Officer</span>
								<p>
									Explicabo voluptatem mollitia et repellat qui dolorum quasi
								</p>
								<div className='social'>
									<Link to=''>
										<FaTwitter />
									</Link>
									<Link to=''>
										<FaFacebook />
									</Link>
									<Link to=''>
										<FaInstagram />
									</Link>
									<Link to=''>
										<FaLinkedin />
									</Link>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</TeamSection>
	);
}
