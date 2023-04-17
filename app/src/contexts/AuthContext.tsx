import { createContext, useContext, useState } from 'react';
import { AuthService } from '../services';

const authContext = createContext({});

const useProvideAuth = () => {
	const [user, setUser] = useState<boolean | null>(null);

	const signin = async (email: string, password: string): Promise<any> => {
		const result = await AuthService.login(email, password)
			.then((result: any) => {
				if (result) {
					localStorage.setItem('user', JSON.stringify(result.user));
					localStorage.setItem('token', JSON.stringify(result.token));
				}

				setUser(AuthService.getUser());

				return { status: result.status }
			});

		return result;
	};

	const signup = (data: Record<string, any>) => {
		return AuthService.register(data);
	};

	const signout = () => {
		return AuthService.logout();
	};

	const sendPasswordResetEmail = (email: string) => {
		return AuthService.resetPassword();
	};

	const confirmPasswordReset = (code: number | string, password: string) => {
		return AuthService.confirmPassword();
	};

	return {
		user,
		signin,
		signup,
		signout,
		sendPasswordResetEmail,
		confirmPasswordReset,
	};
}

export function ProvideAuth(props: any) {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{props.children}</authContext.Provider>;
}

export const useAuth = (): any => {
	return useContext(authContext);
};
