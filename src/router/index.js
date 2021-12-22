import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/login',
		component: Login,
	},
	{
		path: '/b/:bid',
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
