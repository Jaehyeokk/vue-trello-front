import axios from 'axios'

const DOMAIN = 'http://localhost:3000'

const request = (method, url, data) => {
	return axios({
		method,
		url: DOMAIN + url,
		data,
	})
		.then(result => result.data)
		.catch(result => {
			throw result.response
		})
}

export const setAuthInHeader = token => {
	axios.defaults.headers.common['Authorization'] = token
		? `Bearer ${token}`
		: null
}

export const auth = {
	login(data) {
		return request('post', '/login', data)
	},
}

export const board = {
	fetch(bid) {
		return bid ? request('get', `/boards/${bid}`) : request('get', '/boards')
	},
	create(data) {
		return request('post', '/boards', data)
	},
}

export const list = {
	create(data) {
		return request('post', '/lists', data)
	},
	update({ lid, title }) {
		return request('put', `/lists/${lid}`, { title })
	},
	delete(lid) {
		return request('delete', `/lists/${lid}`)
	},
}
