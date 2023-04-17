import { Link, Outlet } from 'react-router-dom'
import { PublicRoute } from '../utils/hooks/publicRoute'
import { Card } from "antd"
import { ZonseSquareLogo } from '../assets/images'

import "./Auth.scss"

const Auth = (): JSX.Element => {
	const home: string | undefined = '/'

	return (
		<PublicRoute>
			<div className='auth0-container'>
				<Card className='auth0-wrapper'>
					<div className='auth0-content'>
						<div className='auth0-content-wrapper'>
							<div className='auth0-logo'>
								<Link to={home} className="auth0-logo-wrapper">
									<img src={ZonseSquareLogo} alt="..." height={28} width={150} />
								</Link>
							</div>

							<div className="auth0-main">
								<div className="auth0-body">
									<div className="auth0-header">
										<h1 className='auth0-title'>
											<span>{"Sign In"}</span>
										</h1>
										<div className="auth0-sub-title">
											<span>{"Use your Zonse Account"}</span>
										</div>
									</div>
									<div className="auth0-outlet">
										<Outlet />
									</div>
								</div>
							</div>

						</div>
					</div>
				</Card>
			</div>
		</PublicRoute>
	)
}

export default Auth