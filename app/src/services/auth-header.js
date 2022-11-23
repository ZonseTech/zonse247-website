import AuthService from "./auth.service";

/**
 * @description checks Local Storage for user item.
 * 				If there is a logged in user with accessToken (JWT),
 * 				return HTTP Authorization header.
 * 				return an empty object.
 * 
 * @returns {}
 */
export default function authHeader() {
	const token = AuthService.getToken();

	if (token)
		return { Authorization: `Bearer ${token}` }

	return {};
}
