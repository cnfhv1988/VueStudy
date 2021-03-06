// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'

// 引入公共JS
import util from '../util/util.js'
Vue.prototype.util = util

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>',
  data: {
    // 组件使用事件中心进行通信
    eventHub: new Vue()
  }
})
