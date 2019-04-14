// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'

import router from './router';//简写
import store from './store';
import request from './ajax.js';

//为Vue对象添加一个继承属性
Vue.prototype.$http=request


FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store, 
  render: h => h(App)
}).$mount('#app-box')
