import axios from 'axios';

export const authApi = () => {
	return axios.post('https://dummyjson.com/auth/login', {
		username: 'kminchelle',
		password: '0lelplR',
	});
};
