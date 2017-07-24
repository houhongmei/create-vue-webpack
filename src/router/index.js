import Vue from 'vue'
import Router from 'vue-router'

const Hello = resolve => require(['@/components/Hello'], resolve)
const Wechat = resolve => require(['@/components/Wechat'], resolve)
// const Test = resolve => require(['@/components/test'], resolve)
const Tongxun = resolve => require(['@/components/tongxun'], resolve)
const Faxian = resolve => require(['@/components/faxian'], resolve)
const Me = resolve => require(['@/components/me'], resolve)
const PersonDetail = resolve => require(['@/components/personDetail'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [{
        path: '/weixin',
        component: Wechat
      }, {
        path: '',
        component: Wechat
      }, {
        path: '/tongxun',
        component: Tongxun
      }, {
        path: '/faxian',
        component: Faxian
      }, {
        path: '/me',
        component: Me
      }]
    },
    {
      path: '/personDetail',
      component: PersonDetail
    }
  ]
})
