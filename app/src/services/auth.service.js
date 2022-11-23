import axios from "axios";

const API_URL = process.env.REACT_APP_ZONSE_API;

const register = (data) => {
	return axios.post(API_URL + "register", data);
};

const login = (email, password) => {
	return axios
		.post(API_URL + "/login", {
			email,
			password,
		})
		.then(response => response.data)
};

const logout = () => {
	localStorage.removeItem("user");
};

const resetPassword = () => {
	return;
}

const confirmPassword = () => {
	return;
}

const getUser = () => {
	return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
	register,
	login,
	logout,
	resetPassword,
	confirmPassword,
	getUser,
};

export default AuthService;