import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import './Login.css';
import { Checkbox, TextInput } from '../../components/Form';
import { useAuth } from '../../store/AuthContext';

export default function Login() {
	const auth = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const [message, setMessage] = useState('');
	const toDashboard = process.env.REACT_APP_REDIRECT_TO_DASHBOARD;

	const handleLogin = (data, { setSubmitting }) => {
		setTimeout(async () => {
			auth.signin(data.email, data.password).then(
				(result) => {
					if (result.status) {
						const origin = location.state?.from?.pathname || toDashboard;
						navigate(origin);
					}
				},
				(error) => {
					const resMessage =
						(error.response &&
							error.response.data &&
							error.response.data.message) ||
						error.message ||
						error.toString();

					setSubmitting(false);
					setMessage(resMessage);
				}
			);

			setSubmitting(false);
		}, 400);
	};

	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
				rememberMe: false,
			}}
			validationSchema={Yup.object({
				email: Yup.string()
					.max(15, 'Must be 15 characters or less')
					.required('Please enter your email'),

				password: Yup.string().required('Password is required'),
			})}
			onSubmit={handleLogin}>
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
										{message && (
											<div className='form-group'>
												<div className='alert alert-danger' role='alert'>
													{message}
												</div>
											</div>
										)}

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
												<TextInput
													label={'Email'}
													id='email'
													type='text'
													name='email'
												/>
											</div>
										</div>
										<div className='row margin'>
											<div className='input-field col s12'>
												<i className='material-icons prefix pt-2'>
													lock_outline
												</i>
												<TextInput
													label={'Password'}
													id='password'
													type='password'
													name='password'
												/>
											</div>
											<div className='input-field col s12 m-0'>
												<p className='margin right-align medium-small'>
													<Link to='/forget-password'>Forgot password?</Link>
												</p>
											</div>
										</div>
										<div className='row'>
											<div className='col s12 m12 l12 ml-2 mt-1'>
												<Checkbox name={'rememberMe'}>Remember Me</Checkbox>
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
