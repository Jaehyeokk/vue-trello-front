import PageNotFound from '../components/404.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Board from '../components/Board.vue'
import Card from '../components/Card.vue'

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
    component: Board,
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