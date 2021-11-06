import PageNotFound from '../components/404.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Board from '../components/Board.vue'
import Card from '../components/Card.vue'

import store from '../store'

const requireAuth = (to, from, next) => {
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  store.getters.isAuth ? next() : next(loginPath)
}

const routes = [
  {
    path: '/',
    component: Home,
    beforeEnter: requireAuth,
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/board/:bid',
    component: Board,
    beforeEnter: requireAuth,
    children: [{
      path: 'card/:cid',
      component: Card
    }]
  },
  {
    path: '*',
    component: PageNotFound
  },
]

export default routes