import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/PostList'
import PostView from '@/components/PostView'
import WritePost from '@/components/WritePost'
import EditPost from '@/components/EditPost'
import NotFound from '@/components/NotFound'


Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'PostList',
      component: PostList
    },
    {
      path: '/NotFound',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/write',
      name: 'WritePost',
      component: WritePost
    },
    {
      path: '/edit/:id',
      name: 'EditPost',
      component: EditPost
    },
    {
      path: '/:id',
      name: PostView,
      component: PostView
    }
  ]
})
