import axios from "axios";

const apiURL = "https://kinopoiskapiunofficial.tech/api/v2.2";
const host = axios.create({
	baseURL: apiURL,
	withCredentials: false,
	headers: {
		"Content-type": "application/json",
		"X-API-KEY": "ee0371ee-eece-4298-a9e8-1ebc8068ce14"
	}
});

const useApiCall = () => host

export default useApiCall;
