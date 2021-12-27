import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '@/apis'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token: null,
		boards: [],
		board: {},
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
	},
})

const { token } = localStorage
store.commit('LOGIN', token)

export default store
