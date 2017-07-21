import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Foo from '@/components/Foo'

import User from '@/components/user'
// import One from '@/components/one'
// import Two from '@/components/two'
// import Three from '@/components/three'

import Wechat from '@/components/Wechat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [{
        path: '/:id',
        component: User
      }]
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    },
    {
      path: '/',
      name: 'Wechat',
      component: Wechat
    }
  ]
})