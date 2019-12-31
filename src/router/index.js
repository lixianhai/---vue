import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/',
      children: [
        {
          path: '/',
          component: () => import('@/views/newSong')
        }
      ]
    },
    {
      path: '/rank',
      component: Layout,
      redirect: '/rank/list',
      children: [
        {
          path: 'list',
          component: () => import('@/views/rank')
        },
        {
          path: 'info',
          component: () => import('@/views/rank/info'),
          meta: { plistTitle: true }
        }
      ]
    },
    {
      path: '/plist',
      component: Layout,
      redirect: '/plist/index',
      children: [
        {
          path: 'index',
          component: () => import('@/views/plist')
        },
        {
          path: 'list',
          component: () => import('@/views/plist/list'),
          meta: { plistTitle: true }
        }
      ]
    },
    {
      path: '/singer',
      component: Layout,
      redirect: '/singer/index',
      children: [
        {
          path: 'index',
          component: () => import('@/views/singer')
        },
        {
          path: 'list',
          component: () => import('@/views/singer/list'),
          meta: { singerTitle: true }
        }
      ]
    }
  ]
})
