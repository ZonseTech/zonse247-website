import React, { Navigate, useLocation } from "react-router-dom";
import { AppToken } from "../../contexts";

const PublicRoute = (props: any) => {
	const token = AppToken();
	const location = useLocation();
	const toDashboard = process.env.REDIRECT_TO_DASHBOARD

	if (token) {
		return <Navigate to={toDashboard || ''} replace state={{ from: location }} />;
	}

	return props.children;
};

export {
	PublicRoute,
}