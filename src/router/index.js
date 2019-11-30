import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainLayout from '@/components/MainLayout'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/login',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'HomePage',
      component: MainLayout
    }
  ]
})
