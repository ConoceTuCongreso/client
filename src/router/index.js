import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'
import Home from '@/components/Home'

Vue.use(Router)

// src/index.js

export default new Router({
  routes: [
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },

    {
    path: '/home',
    name: 'Home',
    component: Home
  },

  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  }
  ]
})
