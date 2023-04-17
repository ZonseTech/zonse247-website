import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useAuth } from '../../contexts';
import { FORGET_PASSWORD_ROUTE } from '../../routes/Auth';
import './Login.scss'

export default function Login(): JSX.Element {
	const auth = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const [message, setMessage] = useState('');
	const [submitting, setSubmitting] = useState<boolean>(false);
	const toDashboard = process.env.REACT_APP_REDIRECT_TO_DASHBOARD;

	const handleLogin = (values: any) => {
		const data = { email: values.email, password: values.password }
		setTimeout(async () => {
			auth.signin(data.email, data.password).then(
				(result: { status: any; }) => {
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
			name="normal_login"
			className="login-form"
			initialValues={{ remember: true }}
			onFinish={handleLogin}>

			<p>{message}</p>

			<Form.Item
				name="username"
				rules={[{ required: true, message: 'Please input your Username!' }]}
			>
				<Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email or phone" />
			</Form.Item>
			<Form.Item
				name="password"
				rules={[{ required: true, message: 'Please input your Password!' }]}
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
				<Button type="primary" htmlType="submit" className="login-form-button">
					Log in
				</Button>
				{submitting}
			</Form.Item>
		</Form>
	);
}
