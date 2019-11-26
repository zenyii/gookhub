import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import Personal from '@/components/Personal'
import LessonPage from '@/components/LessonPage'
//import MainLayout from '@/components/MainLayout'

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
      component: HomePage
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path:'/lesson',
      name:'Lesson',
      component:LessonPage
    }
  ]
})
