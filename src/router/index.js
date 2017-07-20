import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Foo from '@/components/Foo'

import One from '@/components/one'
import Two from '@/components/two'
import Three from '@/components/three'

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
        path: '',
        components: {
          default: One,
          two: Two,
          three: Three
        }
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
