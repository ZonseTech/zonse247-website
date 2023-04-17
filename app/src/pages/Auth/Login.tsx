import { useState } from 'react';
import { Link, Location, NavigateFunction, useLocation, useNavigate } from 'react-router-dom';

import { LockOutlined, UserOutlined, LoadingOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Spin, Alert } from 'antd';
import { useAuth } from '../../contexts';
import { FORGET_PASSWORD_ROUTE } from '../../routes/Auth';
import './Login.scss'

interface ILoginValues {
	email: string;
	password: string;
	remember: boolean;
}

const Login = (): JSX.Element => {
	const auth: any = useAuth();
	const navigate: NavigateFunction = useNavigate();
	const location: Location = useLocation();
	const [message, setMessage] = useState<string>('');
	const [submitting, setSubmitting] = useState<boolean>(false);
	const toDashboard: string | undefined = process.env.REACT_APP_REDIRECT_TO_DASHBOARD;
	const antIcon: JSX.Element = <LoadingOutlined style={{ fontSize: 24 }} spin />;

	const handleLogin = (values: ILoginValues) => {
		setSubmitting(true);

		setTimeout(async () => {
			auth.signin(values.email, values.password, values.remember)
				.then(
					(result: any) => {
						if (result.status) {
							const origin = location.state?.from?.pathname || toDashboard;
							navigate(origin);
						}
					},
					(error: { response: { data: { message: any; }; }; message: any; toString: () => any; }) => {
						const resMessage =
							(error.response &&
								error.response.data &&
								error.response.data.message) ||
							error.message ||
							error.toString();

						setMessage(resMessage);
					}
				);

			setSubmitting(false);
		}, 400);
	};

	return (
		<Form
			name="auth0_login"
			className="login-form"
			initialValues={{ remember: true }}
			onFinish={handleLogin}>

			{message.length > 0 && (<div style={{
				marginBottom: '1rem'
			}}>
				<Alert message={message} type="error" showIcon />
			</div>)}

			<Form.Item
				name="email"
				rules={[{ required: true, message: 'Enter an email or phone number' }]}
			>
				<Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email or phone" />
			</Form.Item>
			<Form.Item
				name="password"
				rules={[{ required: true, message: 'Enter a password' }]}
			>
				<Input.Password size="large"
					prefix={<LockOutlined className="site-form-item-icon" />}
					type="password"
					placeholder="Password"
				/>
			</Form.Item>
			<Form.Item>
				<Form.Item name="remember" valuePropName="checked" noStyle>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Link className="login-form-forgot" to={FORGET_PASSWORD_ROUTE}>
					Forgot password
				</Link>
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit" className="login-form-button" disabled={submitting}>
					{submitting ? <Spin indicator={antIcon} /> : "Log in"}
				</Button>
			</Form.Item>
		</Form>
	);
}

export default Login