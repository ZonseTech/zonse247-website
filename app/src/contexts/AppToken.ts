const AppToken = (): string | null | void => {
	const token: string | null = localStorage.getItem('token');

	if (token) return JSON.parse(token);
};

export default AppToken;
