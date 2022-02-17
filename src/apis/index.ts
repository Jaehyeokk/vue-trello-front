import axios, { Method } from 'axios'
import {
	CreateCardInfo,
	CreateCardResponse,
	CreateListForm,
	FetchCardItem,
	LoginForm,
	LoginResponse,
	TitleString,
	UpdateBoardInfo,
	UpdateCardInfo,
	UpdateCardResponse,
	UpdateListInfo,
	UpdateListResponse,
} from './types'

const DOMAIN = process.env.VUE_APP_API_URL

const request = (method: Method, url: string, data?: any) => {
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

export const setAuthInHeader = (token: string | null): void => {
	axios.defaults.headers.common['Authorization'] = token
		? `Bearer ${token}`
		: ''
}

export const auth = {
	login(data: LoginForm): Promise<LoginResponse> {
		return request('post', '/login', data)
	},
}

export const board = {
	fetch<T>(bid?: number): Promise<T> {
		return bid ? request('get', `/boards/${bid}`) : request('get', '/boards')
	},
	create(data: TitleString): Promise<TitleString> {
		return request('post', '/boards', data)
	},
	update({ bid, data }: UpdateBoardInfo): Promise<TitleString> {
		return request('put', `/boards/${bid}`, data)
	},
	delete(bid: number): Promise<any> {
		return request('delete', `/boards/${bid}`)
	},
}

export const list = {
	create(data: CreateListForm): Promise<CreateListForm> {
		return request('post', '/lists', data)
	},
	update({ lid, data }: UpdateListInfo): Promise<UpdateListResponse> {
		return request('put', `/lists/${lid}`, data)
	},
	delete(lid: number): Promise<any> {
		return request('delete', `/lists/${lid}`)
	},
}

export const card = {
	fetch(cid: number): Promise<FetchCardItem> {
		return request('get', `/cards/${cid}`)
	},
	create(data: CreateCardInfo): Promise<CreateCardResponse> {
		return request('post', '/cards', data)
	},
	update({ cid, data }: UpdateCardInfo): Promise<UpdateCardResponse> {
		return request('put', `/cards/${cid}`, data)
	},
	delete(cid: number): Promise<any> {
		return request('delete', `/cards/${cid}`)
	},
}
