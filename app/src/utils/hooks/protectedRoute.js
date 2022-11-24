import { Navigate, useLocation } from "react-router-dom";
import AppToken from "../../store/AppToken";

const ProtectedRoute = ({ children }) => {
	const token = AppToken();
	const location = useLocation();
	const login = process.env.REACT_APP_REDIRECT_TO_LOGIN

	if (!token) {
		return <Navigate to={login} replace state={{ from: location }} />;
	}

	return children;
};

export {
	ProtectedRoute,
}