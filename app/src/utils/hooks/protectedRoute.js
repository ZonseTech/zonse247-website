import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../store/App.Context";

const ProtectedRoute = ({ children }) => {
	const { token } = useAuth();
	const location = useLocation();

	if (!token) {
		return <Navigate to="/" replace state={{ from: location }} />;
	}

	return children;
};

export {
	ProtectedRoute,
}