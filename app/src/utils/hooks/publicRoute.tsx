import { Location, Navigate, useLocation } from "react-router-dom";
import { AppToken } from "../../contexts";

const PublicRoute = (props: any) => {
	const token: string | void | null = AppToken();
	const location: Location = useLocation();
	const toDashboard: string | undefined = process.env.REACT_APP_REDIRECT_TO_DASHBOARD

	if (token) {
		return <Navigate to={toDashboard || ''} replace state={{ from: location }} />;
	}

	return props.children;
};

export {
	PublicRoute,
}