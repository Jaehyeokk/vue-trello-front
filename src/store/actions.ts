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
import bus from '@/utils/bus'

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
		bus.$emit('spinner:start')
		const response = await api.auth.login(data)
		commit('LOGIN', response.accessToken)
		bus.$emit('spinner:stop')
		return response
	},

	// Board
	async FETCH_BOARDS({ commit }: MyActionContext): Promise<FetchBoardResponse> {
		bus.$emit('spinner:start')
		const response = await api.board.fetch<FetchBoardResponse>()
		commit('SET_BOARDS', response.list)
		bus.$emit('spinner:stop')
		return response
	},
	async FETCH_BOARD(
		{ commit }: MyActionContext,
		bid: number,
	): Promise<FetchBoardResponseItem> {
		bus.$emit('spinner:start')
		const response = await api.board.fetch<FetchBoardResponseItem>(bid)
		commit('SET_BOARD', response.item)
		bus.$emit('spinner:stop')
		return response
	},
	async CREATE_BOARD(
		{ dispatch }: MyActionContext,
		data: TitleString,
	): Promise<TitleString> {
		bus.$emit('spinner:start')
		const response = await api.board.create(data)
		await dispatch('FETCH_BOARDS')
		bus.$emit('spinner:stop')
		return response
	},
	async UPDATE_BOARD(
		{ state, dispatch }: MyActionContext,
		{ bid, data }: UpdateBoardInfo,
	): Promise<TitleString> {
		bus.$emit('spinner:start')
		const response = await api.board.update({ bid, data })
		await dispatch('FETCH_BOARD', state.board.id)
		bus.$emit('spinner:stop')
		return response
	},
	async DELETE_BOARD({ dispatch }: MyActionContext, bid: number): Promise<any> {
		bus.$emit('spinner:start')
		const response = await api.board.delete(bid)
		await dispatch('FETCH_BOARDS')
		bus.$emit('spinner:stop')
		return response
	},

	// List
	async CREATE_LIST(
		{ state, dispatch }: MyActionContext,
		data: CreateListForm,
	): Promise<CreateListForm> {
		bus.$emit('spinner:start')
		const response = await api.list.create(data)
		await dispatch('FETCH_BOARD', state.board.id)
		bus.$emit('spinner:stop')
		return response
	},
	async UPDATE_LIST(
		{ state, dispatch }: MyActionContext,
		{ lid, data }: UpdateListInfo,
	): Promise<UpdateListResponse> {
		bus.$emit('spinner:start')
		const response = await api.list.update({ lid, data })
		await dispatch('FETCH_BOARD', state.board.id)
		bus.$emit('spinner:stop')
		return response
	},
	async DELETE_LIST(
		{ state, dispatch }: MyActionContext,
		lid: number,
	): Promise<any> {
		bus.$emit('spinner:start')
		const response = await api.list.delete(lid)
		await dispatch('FETCH_BOARD', state.board.id)
		bus.$emit('spinner:stop')
		return response
	},

	// Card
	async FETCH_CARD(
		{ commit }: MyActionContext,
		cid: string,
	): Promise<FetchCardItem> {
		bus.$emit('spinner:start')
		const response = await api.card.fetch(cid)
		commit('SET_CARD', response.item)
		bus.$emit('spinner:stop')
		return response
	},

	async CREATE_CARD(
		{ state, dispatch }: MyActionContext,
		data: CreateCardInfo,
	): Promise<CreateCardResponse> {
		bus.$emit('spinner:start')
		const response = await api.card.create(data)
		await dispatch('FETCH_BOARD', state.board.id)
		bus.$emit('spinner:stop')
		return response
	},

	async UPDATE_CARD(
		{ state, dispatch }: MyActionContext,
		{ cid, data }: UpdateCardInfo,
	): Promise<UpdateCardResponse> {
		bus.$emit('spinner:start')
		const respone = await api.card.update({ cid, data })
		await dispatch('FETCH_BOARD', state.board.id)
		bus.$emit('spinner:stop')
		return respone
	},

	async DELETE_CARD(
		{ state, dispatch }: MyActionContext,
		cid: string,
	): Promise<any> {
		bus.$emit('spinner:start')
		const response = await api.card.delete(cid)
		await dispatch('FETCH_BOARD', state.board.id)
		bus.$emit('spinner:stop')
		return response
	},
}

export type Actions = typeof actions
