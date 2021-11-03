import PageNotFound from '../components/404.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Board from '../components/Board.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/board/:bid',
    component: Board
  },
  {
    path: '*',
    component: PageNotFound
  },
]

export default routes