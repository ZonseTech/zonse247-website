import { Navigate, useLocation } from "react-router-dom";
import AppToken from "../../store/AppToken";

const PublicRoute = ({ children }) => {
	const token = AppToken();
	const location = useLocation();

	if (token) {
		return <Navigate to="/dashboard" replace state={{ from: location }} />;
	}

	return children;
};

export {
	PublicRoute,
}