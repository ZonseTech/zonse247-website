import React from 'react';
import { BiCurrentLocation, BiEnvelope, BiPhone, BiTime } from 'react-icons/bi';
import styled from 'styled-components';

const ContactSection = styled.section`
	@-webkit-keyframes animate-loading {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes animate-loading {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.info-container {
		background-color: var(--color-primary);
		height: 100%;
		padding: 20px;
		border-radius: 10px 0 0 10px;
		box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.1);
	}
	.info-item {
		width: 100%;
		background-color: rgb(21, 114, 123);
		margin-bottom: 20px;
		padding: 20px;
		border-radius: 10px;
		color: #fff;
		&:last-child {
			margin-bottom: 0;
		}
		svg {
			font-size: 20px;
			color: #fff;
			float: left;
			width: 44px;
			height: 44px;
			background-color: rgba(255, 255, 255, 0.2);
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50px;
			transition: all 0.3s ease-in-out;
			margin-right: 15px;
		}
		h4 {
			padding: 0;
			font-size: 20px;
			font-weight: 600;
			margin-bottom: 5px;
		}
		p {
			padding: 0;
			margin-bottom: 0;
			font-size: 14px;
		}
		&:hover {
			i {
				background: #fff;
				color: var(--color-primary);
			}
		}
	}
	.php-email-form {
		width: 100%;
		height: 100%;
		background: #fff;
		box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.1);
		padding: 30px;
		border-radius: 0 10px 10px 0;
		.form-group {
			padding-bottom: 8px;
		}
		.error-message {
			display: none;
			color: #fff;
			background: #df1529;
			text-align: left;
			padding: 15px;
			font-weight: 600;
			br + br {
				margin-top: 25px;
			}
		}
		.sent-message {
			display: none;
			color: #fff;
			background: rgb(21, 114, 123);
			text-align: center;
			padding: 15px;
			font-weight: 600;
		}
		.loading {
			display: none;
			background: #fff;
			text-align: center;
			padding: 15px;
			&:before {
				content: '';
				display: inline-block;
				border-radius: 50%;
				width: 24px;
				height: 24px;
				margin: 0 10px -6px 0;
				border: 3px solid #059652;
				border-top-color: #fff;
				-webkit-animation: animate-loading 1s linear infinite;
				animation: animate-loading 1s linear infinite;
			}
		}
		input {
			border-radius: 0;
			box-shadow: none;
			font-size: 14px;
		}
		textarea {
			border-radius: 0;
			box-shadow: none;
			font-size: 14px;
			padding: 12px 15px;
			padding: 10px 12px;
			&:focus {
				border-color: var(--color-primary);
			}
		}
		input[type='text'] {
			padding: 12px 15px;
			&:focus {
				border-color: var(--color-primary);
			}
		}
		input[type='email'] {
			padding: 12px 15px;
			&:focus {
				border-color: var(--color-primary);
			}
		}
		button[type='submit'] {
			background: var(--color-primary);
			border: 0;
			padding: 14px 45px;
			color: #fff;
			transition: 0.4s;
			border-radius: 50px;
			&:hover {
				background: rgba(0, 131, 116, 0.8);
			}
		}
	}
`;

export default function ContactUs() {
	return (
		<ContactSection>
			<div className='container aos-init aos-animate' data-aos='fade-up'>
				<div className='section-title'>
					<h2>{'Contact Us'}</h2>
					{/* <p>
						{
							'Zonse Technologies has proudly served clients seeking our services and products with precision and excellence for over three years. We often personally meet with clients, and speak at educational events on “everywhere”'
						}
					</p> */}
				</div>

				<div className='row gx-lg-0 gy-4'>
					<div className='col-lg-4'>
						<div className='info-container d-flex flex-column align-items-center justify-content-center'>
							<div className='info-item d-flex'>
								<BiCurrentLocation className='flex-shrink-0' />
								<div>
									<h4>Location:</h4>
									<p>A108 Adam Street, New York, NY 535022</p>
								</div>
							</div>
							<div className='info-item d-flex'>
								<BiEnvelope className='bi bi-envelope flex-shrink-0' />
								<div>
									<h4>Email:</h4>
									<p>info@zonse.com</p>
								</div>
							</div>
							<div className='info-item d-flex'>
								<BiPhone className='bi bi-phone flex-shrink-0' />
								<div>
									<h4>Call:</h4>
									<p>+265 991 593 543</p>
								</div>
							</div>
							<div className='info-item d-flex'>
								<BiTime className='bi bi-clock flex-shrink-0' />
								<div>
									<h4>Open Hours:</h4>
									<p>Mon-Sat: 11AM - 23PM</p>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-8'>
						<form
							action='forms/contact.php'
							method='post'
							className='php-email-form'>
							<div className='row'>
								<div className='col-md-6 form-group'>
									<input
										type='text'
										name='name'
										className='form-control'
										id='name'
										placeholder='Your Name'
										required=''
									/>
								</div>
								<div className='col-md-6 form-group mt-3 mt-md-0'>
									<input
										type='email'
										className='form-control'
										name='email'
										id='email'
										placeholder='Your Email'
										required=''
									/>
								</div>
							</div>
							<div className='form-group mt-3'>
								<input
									type='text'
									className='form-control'
									name='subject'
									id='subject'
									placeholder='Subject'
									required=''
								/>
							</div>
							<div className='form-group mt-3'>
								<textarea
									className='form-control'
									name='message'
									rows={7}
									placeholder='Message'
									required=''
									defaultValue={''}
								/>
							</div>
							<div className='my-3'>
								<div className='loading'>Loading</div>
								<div className='error-message' />
								<div className='sent-message'>
									Your message has been sent. Thank you!
								</div>
							</div>
							<div className='text-center'>
								<button type='submit'>Send Message</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</ContactSection>
	);
}
