import { ActionContext } from 'vuex'
import { Mutations } from './mutations'
import { RootState } from './state'
import * as api from '@/apis/index'
import {
	CreateCardInfo,
	CreateCardResponse,
	CreateListForm,
	FetchBoardResponse,
	FetchBoardResponseItem,
	FetchCardItem,
	LoginForm,
	LoginResponse,
	TitleString,
	UpdateBoardInfo,
	UpdateCardInfo,
	UpdateCardResponse,
	UpdateListInfo,
	UpdateListResponse,
} from '@/apis/types'

type MyActionContext = {
	commit<K extends keyof Mutations>(
		key: K,
		payload?: Parameters<Mutations[K]>[1],
	): ReturnType<Mutations[K]>
} & Omit<ActionContext<RootState, RootState>, 'commit'>

export const actions = {
	// Auth
	async LOGIN(
		{ commit }: MyActionContext,
		data: LoginForm,
	): Promise<LoginResponse> {
		const response = await api.auth.login(data)
		commit('LOGIN', response.accessToken)
		return response
	},

	// Board
	async FETCH_BOARDS({ commit }: MyActionContext): Promise<FetchBoardResponse> {
		const response = await api.board.fetch<FetchBoardResponse>()
		commit('SET_BOARDS', response.list)
		return response
	},
	async FETCH_BOARD(
		{ commit }: MyActionContext,
		bid: number,
	): Promise<FetchBoardResponseItem> {
		const response = await api.board.fetch<FetchBoardResponseItem>(bid)
		commit('SET_BOARD', response.item)
		return response
	},
	async CREATE_BOARD(
		{ dispatch }: MyActionContext,
		data: TitleString,
	): Promise<TitleString> {
		const response = await api.board.create(data)
		dispatch('FETCH_BOARDS')
		return response
	},
	async UPDATE_BOARD(
		{ state, dispatch }: MyActionContext,
		{ bid, data }: UpdateBoardInfo,
	): Promise<TitleString> {
		const response = await api.board.update({ bid, data })
		dispatch('FETCH_BOARD', state.board.id)
		return response
	},
	async DELETE_BOARD({ dispatch }: MyActionContext, bid: number): Promise<any> {
		const response = await api.board.delete(bid)
		dispatch('FETCH_BOARDS')
		return response
	},

	// List
	async CREATE_LIST(
		{ state, dispatch }: MyActionContext,
		data: CreateListForm,
	): Promise<CreateListForm> {
		const response = await api.list.create(data)
		dispatch('FETCH_BOARD', state.board.id)
		return response
	},
	async UPDATE_LIST(
		{ state, dispatch }: MyActionContext,
		{ lid, data }: UpdateListInfo,
	): Promise<UpdateListResponse> {
		const response = await api.list.update({ lid, data })
		dispatch('FETCH_BOARD', state.board.id)
		return response
	},
	async DELETE_LIST(
		{ state, dispatch }: MyActionContext,
		lid: number,
	): Promise<any> {
		const response = await api.list.delete(lid)
		dispatch('FETCH_BOARD', state.board.id)
		return response
	},

	// Card
	async FETCH_CARD(
		{ commit }: MyActionContext,
		cid: string,
	): Promise<FetchCardItem> {
		const response = await api.card.fetch(cid)
		commit('SET_CARD', response.item)
		return response
	},

	async CREATE_CARD(
		{ state, dispatch }: MyActionContext,
		data: CreateCardInfo,
	): Promise<CreateCardResponse> {
		const response = await api.card.create(data)
		dispatch('FETCH_BOARD', state.board.id)
		return response
	},

	async UPDATE_CARD(
		{ state, dispatch }: MyActionContext,
		{ cid, data }: UpdateCardInfo,
	): Promise<UpdateCardResponse> {
		const respone = await api.card.update({ cid, data })
		dispatch('FETCH_BOARD', state.board.id)
		return respone
	},

	async DELETE_CARD(
		{ state, dispatch }: MyActionContext,
		cid: string,
	): Promise<any> {
		const response = await api.card.delete(cid)
		dispatch('FETCH_BOARD', state.board.id)
		return response
	},
}

export type Actions = typeof actions
