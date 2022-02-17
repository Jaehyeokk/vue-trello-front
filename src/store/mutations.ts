import { RootState } from './state'
import { setAuthInHeader } from '@/apis/index'
import { FetchBoardResponseItemInfo, FetchCardItemInfo } from '@/apis/types'

export const mutations = {
	LOGIN(state: RootState, token: string): void {
		if (!token) return
		state.token = token
		localStorage.setItem('token', token)
		setAuthInHeader(token)
	},
	LOGOUT(state: RootState): void {
		state.token = ''
		localStorage.removeItem('token')
		setAuthInHeader('')
	},
	SET_BOARDS(state: RootState, list: FetchBoardResponseItemInfo[]): void {
		state.boards = list
	},
	SET_BOARD(state: RootState, item: FetchBoardResponseItemInfo): void {
		state.board = item
	},
	SET_CARD(state: RootState, data: FetchCardItemInfo): void {
		state.card = data
	},
	SET_THEME(state: RootState, color: string): void {
		state.navColor = color ? 'rgba(0, 0, 0, .15)' : '#026aa7'
		state.bodyColor = color || '#ffffff'
	},
}

export type Mutations = typeof mutations
