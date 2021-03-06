// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'element-ui/lib/index.js'

// 引入axios,处理http
import axios from 'axios'
// 改写原型链
Vue.prototype.$axios = axios

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data () {
    return {
      // apiUrl: 'http://localhost/api{/id}'
    }
  }
})
