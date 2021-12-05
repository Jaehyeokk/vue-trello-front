import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Board from '../views/Board.vue'
import PageNotFound from '../components/PageNotFound.vue'
import store from '../store'

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
	const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
	store.getters.isAuth ? next() : next(loginPath)
}

const routes = [
	{
		path: '/',
		name: 'Home',
		beforeEnter: requireAuth,
		component: Home,
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/board/:bid',
		name: 'board',
		component: Board,
	},
	{
		path: '*',
		name: 'PageNotFound',
		component: PageNotFound,
	},
]

const router = new VueRouter({
	mode: 'history',
	routes,
})

export default router
