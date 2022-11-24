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
				email: Yup.string().email().required('Please enter your email'),

				password: Yup.string().required('Password is required'),
			})}
			onSubmit={handleLogin}>
			<Form className='login-form mb-5'>
				<div className='row'>
					<div className='input-field col s12'>
						<h5 className='ml-4'>Sign in</h5>
					</div>
				</div>

				{message && (
					<div className='card-alert card red lighten-5'>
						<div className='card-content red-text'>
							<p>{message}</p>
						</div>
					</div>
				)}

				<div className='row margin'>
					<div className='input-field col s12'>
						<i className='material-icons prefix pt-2'>person_outline</i>
						<TextInput
							label={'Email'}
							id='email'
							type='text'
							name='email'
							autoComplete='off'
						/>
					</div>
				</div>
				<div className='row margin'>
					<div className='input-field col s12'>
						<i className='material-icons prefix pt-2'>lock_outline</i>
						<TextInput
							label={'Password'}
							id='password'
							type='password'
							name='password'
						/>
					</div>
					<div className='input-field col s12 m-0'>
						<p className='margin right-align medium-small'>
							<Link to='/auth0/forget-password'>Forgot password?</Link>
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
							className='btn waves-effect waves-light border-round-1 gradient-45deg-light-blue-cyan col s12'>
							Login
						</button>
					</div>
				</div>
			</Form>
		</Formik>
	);
}
