import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '@/apis'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token: null,
		boards: [],
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
		CREATE_BOARD({ dispatch }, data) {
			return api.board.create(data).then(() => dispatch('FETCH_BOARDS'))
		},
	},
})

const { token } = localStorage
store.commit('LOGIN', token)

export default store
