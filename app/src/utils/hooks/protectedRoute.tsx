import { Location, Navigate, useLocation } from "react-router-dom";
import AppToken from "../../contexts/AppToken";

const ProtectedRoute = (props: any) => {
	const token: string | void | null = AppToken();
	const location: Location = useLocation();
	const login = process.env.REACT_APP_REDIRECT_TO_LOGIN

	if (!token) {
		return <Navigate to={login || ''} replace state={{ from: location }} />;
	}

	return props.children;
};

export {
	ProtectedRoute,
}