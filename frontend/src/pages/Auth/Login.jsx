import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
	return fetch('http://localhost:8080/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
	}).then((data) => data.json());
}

function Login({ setToken }) {
	const [username, setUserName] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const token = await loginUser({
			username,
			password,
		});
		setToken(token);
	};

	return (
		<div
			className='vertical-layout page-header-light vertical-menu-collapsible vertical-menu-nav-dark preload-transitions 1-column login-bg   blank-page blank-page'
			data-open='click'
			data-menu='vertical-menu-nav-dark'
			data-col='1-column'>
			<div className='row'>
				<div className='col s12'>
					<div className='container'>
						<div id='login-page' className='row'>
							<div className='col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8'>
								<form className='login-form' onSubmit={handleSubmit}>
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
												onChange={(e) => setUserName(e.target.value)}
											/>
											<label htmlFor='username' className='center-align'>
												Username
											</label>
										</div>
									</div>
									<div className='row margin'>
										<div className='input-field col s12'>
											<i className='material-icons prefix pt-2'>lock_outline</i>
											<input
												id='password'
												type='password'
												onChange={(e) => setPassword(e.target.value)}
											/>
											<label htmlFor='password'>Password</label>
										</div>
									</div>
									<div className='row'>
										<div className='col s12 m12 l12 ml-2 mt-1'>
											<p>
												<label>
													<input type='checkbox' />
													<span>Remember Me</span>
												</label>
											</p>
										</div>
									</div>
									<div className='row'>
										<div className='input-field col s12'>
											<a
												href='index.html'
												className='btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12'>
												Login
											</a>
										</div>
									</div>
									<div className='row'>
										<div className='input-field col s6 m6 l6'>
											<p className='margin medium-small'>
												<a href='user-register.html'>Register Now!</a>
											</p>
										</div>
										<div className='input-field col s6 m6 l6'>
											<p className='margin right-align medium-small'>
												<a href='user-forgot-password.html'>
													Forgot password ?
												</a>
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

export default Login;

Login.propTypes = {
	setToken: PropTypes.func.isRequired,
};
