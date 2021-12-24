import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '@/views/Home.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
	const rPath = `/login?rPath=${encodeURIComponent(to.path)}`
	store.getters.isAuth ? next() : next(rPath)
}

const routes = [
	{
		path: '/',
		beforeEnter: requireAuth,
		component: Home,
	},
	{
		path: '/login',
		component: Login,
	},
	{
		path: '/b/:bid',
		beforeEnter: requireAuth,
		component: () => import('@/views/Board.vue'),
		children: [
			{
				path: 'c/:cid',
				component: () => import('@/views/Card.vue'),
			},
		],
	},
	{
		path: '*',
		component: PageNotFound,
	},
]

const router = new VueRouter({
	mode: 'history',
	routes,
})

export default router
