import React from 'react';
import { Link } from 'react-router-dom';

import './ForgetPassword.css';

export default function ForgetPassword() {
	return (
		<div className='vertical-layout page-header-light vertical-menu-collapsible vertical-menu-nav-dark preload-transitions 1-column forgot-bg   blank-page blank-page'>
			<div className='row'>
				<div className='col s12'>
					<div className='container'>
						<div id='forgot-password' className='row'>
							<div className='col s12 m6 l4 z-depth-4 offset-m4 card-panel border-radius-1 forgot-card bg-opacity-8'>
								<form className='login-form'>
									<div className='row'>
										<div className='input-field col s12'>
											<h5 className='ml-4'>Forgot Password</h5>
											<p className='ml-4'>You can reset your password</p>
										</div>
									</div>
									<div className='row'>
										<div className='input-field col s12'>
											<i className='material-icons prefix pt-2'>
												person_outline
											</i>
											<input id='email' type='email' />
											<label htmlFor='email' className='center-align'>
												Email
											</label>
										</div>
									</div>
									<div className='row'>
										<div className='input-field col s12'>
											<Link
												to={'/reset-password'}
												className='btn waves-effect waves-light border-round-1 gradient-45deg-purple-deep-orange col s12 mb-1'>
												Reset Password
											</Link>
										</div>
									</div>
									<div className='row'>
										<div className='input-field col s6 m6 l6'>
											<p className='margin medium-small'>
												Already have an account?{' '}
												<Link to={'/login'}>Login</Link>
											</p>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className='content-overlay' />
				</div>
			</div>
		</div>
	);
}
