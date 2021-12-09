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

export const setAuthInHeader = token => {
	axios.defaults.headers.common['Authorization'] = token
		? `Bearer ${token}`
		: null
}

export const auth = {
	login(email, password) {
		return request('post', '/login', { email, password })
	},
}

export const board = {
	fetch(bid) {
		return bid ? request('get', `/boards/${bid}`) : request('get', '/boards')
	},
	create(title) {
		return request('post', '/boards', { title })
	},
	delete(bid) {
		return request('delete', `/boards/${bid}`)
	},
	update(bid, payload) {
		return request('put', `/boards/${bid}`, payload)
	},
}
