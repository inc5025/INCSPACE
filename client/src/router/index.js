import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/PostList'
import PostView from '@/components/PostView'
import WritePost from '@/components/WritePost'
import EditPost from '@/components/EditPost'
import NotFound from '@/components/NotFound'
import LoginPage from '@/components/LoginPage'
import Example from '@/components/example'
import store from '../store'

Vue.use(Router)

const requireAuth = () => (to, from, next) => {
  if (store.getters.isAuthenticated) return next()
  next('/login')
}

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'PostList',
      component: PostList
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/NotFound',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/write',
      name: 'WritePost',
      component: WritePost,
      beforeEnter: requireAuth()
    },
    {
      path: '/edit/:id',
      name: 'EditPost',
      component: EditPost,
      beforeEnter: requireAuth()
    },
    {
      path: '/:id',
      name: PostView,
      component: PostView
    }
  ]
})
