import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: null,
  },
  getters: {
    isAuth(state) {
      return !!state.token
    }
  },
  mutations: {  
    LOGIN(state, token) {
      if(!token) return 
      state.token = token
      localStorage.setItem('token', token)
    },
    LOGOUT(state) {
      state.token = null
      localStorage.removeItem('token')
    },
  },
  actions: {
    LOGIN({commit}, {email, password}) {
      return api.auth.login(email, password)
        .then(({accessToken}) => commit('LOGIN', accessToken))
    },
  },
  plugins: [createPersistedState()]
})

export default store