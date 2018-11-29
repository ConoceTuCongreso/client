import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'
import Home from '@/components/Home'
import Welcome from '@/components/Welcome'
import Landing from '@/components/Landing'
import Main from '@/components/Main'

Vue.use(Router)

// src/index.js

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
      children: [
        {
          path: '/',
          component: Welcome
        },
        {
          path: '/signup',
          component: SignUp
        },
        {
          path: 'signin',
          component: SignIn
        }
      ]
    },

    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/',
          component: Home
        }
      
      ]
    }
  ]
})
