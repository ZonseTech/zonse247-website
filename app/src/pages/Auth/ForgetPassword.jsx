import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import './ForgetPassword.css';
import { TextInput } from '../../components/Form';

export default function ForgetPassword() {
	const handleSubmit = (values, { setSubmitting }) => {};

	return (
		<Formik
			initialValues={{
				email: '',
			}}
			validationSchema={Yup.object({
				email: Yup.string()
					.email('Please provide a valid email.')
					.required('Email is required'),
			})}
			onSubmit={handleSubmit}>
			<Form className='login-form'>
				<div className='row'>
					<div className='input-field col s12'>
						<h5 className='ml-4'>Forgot Password</h5>
						<p className='ml-4'>You can reset your password</p>
					</div>
				</div>
				<div className='row'>
					<div className='input-field col s12'>
						<i className='material-icons prefix pt-2'>person_outline</i>
						<TextInput
							label={'Email'}
							id='email'
							type='email'
							name='email'
							autoComplete='off'
						/>
					</div>
				</div>
				<div className='row'>
					<div className='input-field col s12'>
						<button
							type='submit'
							className='btn waves-effect waves-light border-round-1 gradient-45deg-light-blue-cyan col s12'>
							Reset Password
						</button>
					</div>
				</div>
				<div className='row'>
					<div className='input-field col s6 m6 l6'>
						<p className='margin medium-small'>
							Already have an account? <Link to={'/auth0/login'}>Login</Link>
						</p>
					</div>
				</div>
			</Form>
		</Formik>
	);
}
