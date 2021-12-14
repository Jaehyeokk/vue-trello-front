import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token: null,
		boards: [],
		board: null,
		isAddBoard: false,
		isBoardSetting: false,
		bodyColor: '#ffffff',
		navbarColor: '#026aa7',
	},
	getters: {
		isAuth(state) {
			return !!state.token
		},
	},
	mutations: {
		LOGIN(state, token) {
			if (!token) return
			state.token = token
			localStorage.setItem('token', token)
			api.setAuthInHeader(token)
		},
		LOGOUT(state) {
			state.token = null
			localStorage.removeItem('token')
			api.setAuthInHeader(null)
		},
		SET_BOARDS(state, boards) {
			state.boards = boards
		},
		SET_BOARD(state, board) {
			state.board = board
		},
		SET_IS_ADDBOARD(state, toggle) {
			state.isAddBoard = toggle
		},
		SET_IS_BOARDSETTING(state, toggle) {
			state.isBoardSetting = toggle
		},
		SET_THEME(state, color) {
			state.bodyColor = color || '#ffffff'
			state.navbarColor = color ? 'rgba(0,0,0,.15)' : '#026aa7'
		},
	},
	actions: {
		LOGIN({ commit }, { email, password }) {
			return api.auth
				.login(email, password)
				.then(({ accessToken }) => commit('LOGIN', accessToken))
		},
		FETCH_BOARDS({ commit }) {
			return api.board.fetch().then(({ list }) => commit('SET_BOARDS', list))
		},
		FETCH_BOARD({ commit }, bid) {
			return api.board.fetch(bid).then(({ item }) => commit('SET_BOARD', item))
		},
		ADD_BOARD(ctx, { title }) {
			return api.board.create(title).then(data => data.item)
		},
		UPDATE_BOARD({ dispatch }, { bid, title, bgColor }) {
			return api.board
				.update(bid, { title, bgColor })
				.then(() => dispatch('FETCH_BOARD', bid))
		},
		DELETE_BOARD(ctx, bid) {
			return api.board.delete(bid)
		},
		CREATE_LIST({ state, dispatch }, { title, boardId, pos }) {
			return api.list
				.create({ title, boardId, pos })
				.then(() => dispatch('FETCH_BOARD', state.board.id))
		},
		UPDATE_LIST({ state, dispatch }, { lid, title, pos }) {
			return api.list
				.update(lid, { title, pos })
				.then(() => dispatch('FETCH_BOARD', state.board.id))
		},
		DELETE_LIST({ state, dispatch }, lid) {
			return api.list
				.delete(lid)
				.then(() => dispatch('FETCH_BOARD', state.board.id))
		},
		CREATE_CARD({ state, dispatch }, { title, listId, pos }) {
			return api.card
				.create({ title, listId, pos })
				.then(() => dispatch('FETCH_BOARD', state.board.id))
		},
		DELETE_CARD({ state, dispatch }, cid) {
			return api.card
				.delete(cid)
				.then(() => dispatch('FETCH_BOARD', state.board.id))
		},
	},
})

const { token } = localStorage
store.commit('LOGIN', token)

export default store
