import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/Layout'

Vue.use(Router)
// 需要左方向动画的路由用this.$router.to('****')
Router.prototype.togo = function (path, query) {
  this.isleft = true
  this.isright = false
  const param = {
    path,
    query
  }
  this.push(param)
}
// 需要右方向动画的路由用this.$router.goRight('****')
Router.prototype.toRight = function (path, query) {
  this.isright = true
  this.isleft = false
  const param = {
    path,
    query
  }
  this.push(param)
}
// 需要返回按钮动画的路由用this.$router.goBack()，返回上一个路由
Router.prototype.goBack = function () {
  this.isright = true
  this.isleft = false
  this.go(-1)
}

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
