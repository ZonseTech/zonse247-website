import React, { createContext, useContext, useEffect, useState } from "react";
import AuthService from "../services/auth.service";

const authContext = createContext();

// Provider hook that creates auth object and handles state
function useProvideAuth() {
	const [user, setUser] = useState(null);

	// Wrap any Firebase methods we want to use making sure ...
	// ... to save the user to state.
	const signin = (email, password) => {
		return AuthService.login(email, password);
	};

	const signup = (data) => {
		return AuthService.register(data);
	};

	const signout = () => {
		return AuthService.logout();
	};

	const sendPasswordResetEmail = (email) => {
		return AuthService.resetPassword(email);
	};

	const confirmPasswordReset = (code, password) => {
		return AuthService.confirmPassword(code, password);
	};

	// Subscribe to user on mount
	// Because this sets state in the callback it will cause any ...
	// ... component that utilizes this hook to re-render with the ...
	// ... latest auth object.
	useEffect(() => {
		const unsubscribe = (user) => {
			if (user) {
				setUser(AuthService.getCurrentUser());
			} else {
				setUser(false);
			}
		};

		// Cleanup subscription on unmount
		return () => unsubscribe();
	}, []);

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
export function ProvideAuth({ children }) {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
	return useContext(authContext);
};