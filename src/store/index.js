import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '@/apis'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token: null,
		boards: [],
		board: {},
		card: {},
		navColor: '#026aa7',
		bodyColor: '#ffffff',
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
		SET_BOARDS(state, list) {
			state.boards = list
		},
		SET_BOARD(state, item) {
			state.board = item
		},
		SET_CARD(state, data) {
			state.card = data
		},
		SET_THEME(state, color) {
			state.navColor = color ? 'rgba(0, 0, 0, .15)' : '#026aa7'
			state.bodyColor = color || '#ffffff'
		},
	},
	actions: {
		LOGIN({ commit }, data) {
			return api.auth
				.login(data)
				.then(({ accessToken }) => commit('LOGIN', accessToken))
		},
		FETCH_BOARDS({ commit }) {
			return api.board.fetch().then(({ list }) => commit('SET_BOARDS', list))
		},
		FETCH_BOARD({ commit }, bid) {
			return api.board.fetch(bid).then(({ item }) => commit('SET_BOARD', item))
		},
		CREATE_BOARD({ dispatch }, data) {
			return api.board.create(data).then(({ item }) => {
				dispatch('FETCH_BOARDS')
				return item
			})
		},
		UPDATE_BOARD({ state, dispatch }, { bid, data }) {
			return api.board
				.update({ bid, data })
				.then(() => dispatch('FETCH_BOARD', state.board.id))
		},
		DELETE_BOARD({ dispatch }, bid) {
			return api.board.delete(bid).then(() => dispatch('FETCH_BOARDS'))
		},
		CREATE_LIST({ state, dispatch }, data) {
			return api.list
				.create(data)
				.then(() => dispatch('FETCH_BOARD', state.board.id))
		},
		UPDATE_LIST({ state, dispatch }, { lid, data }) {
			return api.list
				.update({ lid, data })
				.then(() => dispatch('FETCH_BOARD', state.board.id))
		},
		DELETE_LIST({ state, dispatch }, lid) {
			return api.list
				.delete(lid)
				.then(() => dispatch('FETCH_BOARD', state.board.id))
		},
		FETCH_CARD({ commit }, cid) {
			return api.card.fetch(cid).then(({ item }) => commit('SET_CARD', item))
		},
		CREATE_CARD({ state, dispatch }, data) {
			return api.card
				.create(data)
				.then(() => dispatch('FETCH_BOARD', state.board.id))
		},
		UPDATE_CARD({ state, dispatch }, { cid, data }) {
			return api.card
				.update({ cid, data })
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
