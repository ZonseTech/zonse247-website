import { Link, useRouteError, useNavigate } from 'react-router-dom';
import './E404.css';
import bgImage from '../assets/images/error-2.png';

export default function E404() {
	const error = useRouteError();
	const navigate = useNavigate();

	return (
		<div className='row'>
			<div className='col s12'>
				<div className='container'>
					<div className='section section-404 p-0 m-0 height-100vh'>
						<div className='row'>
							<div className='col s12 center-align white'>
								<img src={bgImage} className='bg-image-404' alt='...' />
								<h1 className='error-code m-0'>{error.status}</h1>
								<h6 className='mb-2 text-uppercase'>
									{error.statusText || error.message}
								</h6>
								{
									<Link
										onClick={navigate(-1)}
										className='btn waves-effect waves-light gradient-45deg-deep-purple-blue gradient-shadow mb-4'>
										Go Back
									</Link>
								}
							</div>
						</div>
					</div>
				</div>
				<div className='content-overlay' />
			</div>
		</div>
	);
}
