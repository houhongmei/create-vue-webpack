import Vue from 'vue'
import Router from 'vue-router'

const Hello = resolve => require(['@/components/Hello'], resolve)
const Wechat = resolve => require(['@/components/Wechat'], resolve)
// const Test = resolve => require(['@/components/test'], resolve)

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
      }, {
        path: '',
        component: Wechat
      }]
    }
  ]
})
