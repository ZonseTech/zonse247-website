import React, { useState } from 'react';
import './Login.css';
// import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import TextInput from '../../components/Form/TextInput';

async function loginUser(credentials) {
	await axios.postForm('https://httpbin.org/post', credentials);
}

export default function Login() {
	const [inputField, setInputField] = useState({
		username: '',
		password: '',
		rememberMe: '',
	});

	const inputsHandler = (e) => {
		const { name, value } = e.target;

		setInputField((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const token = await loginUser(inputField);

		return token;
	};

	return (
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				acceptedTerms: false, // added for our checkbox
				jobType: '', // added for our select
			}}
			validationSchema={Yup.object({
				firstName: Yup.string()
					.max(15, 'Must be 15 characters or less')
					.required('Required'),

				lastName: Yup.string()
					.max(20, 'Must be 20 characters or less')
					.required('Required'),

				email: Yup.string().email('Invalid email address').required('Required'),

				acceptedTerms: Yup.boolean()
					.required('Required')
					.oneOf([true], 'You must accept the terms and conditions.'),
			})}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));

					setSubmitting(false);
				}, 400);
			}}>
			<div
				className='vertical-layout page-header-light vertical-menu-collapsible vertical-menu-nav-dark preload-transitions 1-column login-bg blank-page blank-page'
				data-open='click'
				data-menu='vertical-menu-nav-dark'
				data-col='1-column'>
				<div className='row'>
					<div className='col s12'>
						<div className='container'>
							<div id='login-page' className='row'>
								<div className='col s12 m6 l4 z-depth-4 card-panel border-radius-1 login-card bg-opacity-8'>
									<Form className='login-form mb-5'>
										<div className='row'>
											<div className='input-field col s12'>
												<h5 className='ml-4'>Sign in</h5>
											</div>
										</div>
										<div className='row margin'>
											<div className='input-field col s12'>
												<i className='material-icons prefix pt-2'>
													person_outline
												</i>
												<input
													id='username'
													type='text'
													name='username'
													onChange={inputsHandler}
													value={inputField.username}
												/>
												<label htmlFor='username' className='center-align'>
													Username
												</label>
											</div>
										</div>
										<div className='row margin'>
											<div className='input-field col s12'>
												<i className='material-icons prefix pt-2'>
													lock_outline
												</i>
												{/* <input
												id='password'
												type='password'
												name='password'
												onChange={inputsHandler}
												value={inputField.password}
											/> */}
												<TextInput
													id='password'
													type='password'
													name='password'
													onChange={inputsHandler}
													value={inputField.password}
												/>
												<label htmlFor='password'>Password</label>
											</div>
											<div className='input-field col s12 m-0'>
												<p className='margin right-align medium-small'>
													<Link to='/forget-password'>Forgot password?</Link>
												</p>
											</div>
										</div>
										<div className='row'>
											<div className='col s12 m12 l12 ml-2 mt-1'>
												<p>
													<label>
														<input type='checkbox' name='rememberMe' />
														<span>Remember Me</span>
													</label>
												</p>
											</div>
										</div>
										<div className='row'>
											<div className='input-field col s12'>
												<button
													type='submit'
													className='btn waves-effect waves-light border-round-1 gradient-45deg-purple-deep-orange col s12'>
													Login
												</button>
											</div>
										</div>
									</Form>
								</div>
							</div>
						</div>
						<div className='content-overlay' />
					</div>
				</div>
			</div>
		</Formik>
	);
}
