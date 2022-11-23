/**
 * @description checks Local Storage for user item.
 * 				If there is a logged in user with accessToken (JWT),
 * 				return HTTP Authorization header.
 * 				return an empty object.
 * 
 * @returns {}
 */
export default function authHeader() {
	const user = JSON.parse(localStorage.getItem('user'));

	if (user && user.accessToken)
		return { Authorization: `Bearer ${user.accessToken}` }

	return {};
}
