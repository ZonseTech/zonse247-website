import React, { createContext, useContext, useEffect, useState } from 'react';
import AuthService from '../services/auth.service';

const authContext = createContext({});

// Provider hook that creates auth object and handles state
function useProvideAuth() {
	const [user, setUser] = useState<boolean | null>(null);

	// Wrap any Firebase methods we want to use making sure ...
	// ... to save the user to state.
	const signin = async (email: string, password: string) => {
		const result = await AuthService.login(email, password);
		if (result.token) {
			localStorage.setItem('user', JSON.stringify(result.user));
			localStorage.setItem('token', JSON.stringify(result.token));

			setUser(AuthService.getUser());
		}
		return { status: result.status };
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

	// Subscribe to user on mount
	// Because this sets state in the callback it will cause any ...
	// ... component that utilizes this hook to re-render with the ...
	// ... latest auth object.
	useEffect(() => {
		const unsubscribe = (user: any) => {
			if (user) {
				setUser(AuthService.getUser());
			} else setUser(false);
		};

		// Cleanup subscription on unmount
		return () => unsubscribe(user);
	}, [user]);

	// Return the user object and auth methods
	return {
		user,
		signin,
		signup,
		signout,
		sendPasswordResetEmail,
		confirmPasswordReset,
	};
}

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth(props: any) {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{props.children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = (): any => {
	return useContext(authContext);
};
