import axios from '../axios';

export async function apiGet(url) {
	try {
		const data = await axios.get(url);
		return data;
	} catch (e) {
		console.log(e);
	}
}

export async function apiPost(url, params) {
	try {
		const data = await axios.post(url, params);
		return data;
	} catch (e) {
		console.log(e);
	}
}
