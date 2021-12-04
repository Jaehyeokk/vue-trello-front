import axios from 'axios'
import router from '../router'

const DOMAIN = 'http://localhost:3000'
const onUnauthorized = () => {
	router.push(`/login?rPath=${encodeURIComponent(location.pathname)}`)
}

const request = (method, url, data) => {
	return axios({
		method,
		url: DOMAIN + url,
		data,
	})
		.then(result => result.data)
		.catch(result => {
			const { status } = result.response
			if (status === 401) onUnauthorized()
			throw result.response
		})
}

export const auth = {
	login(email, password) {
		return request('post', '/login', { email, password })
	},
}
