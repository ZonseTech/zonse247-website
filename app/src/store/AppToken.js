export default function AppToken() {
	return JSON.parse(localStorage.getItem("token"))
}
