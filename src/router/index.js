import Vue from 'vue'
import Router from 'vue-router'

const Hello = resolve => require(['@/components/Hello'], resolve)
const Foo = resolve => require(['@/components/Foo'], resolve)
const Wechat = resolve => require(['@/components/Wechat'], resolve)

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
        component: Wechat
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
