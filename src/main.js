import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// mock
import './mock/mockServer'
import './assets/styles/base/base.styl'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
