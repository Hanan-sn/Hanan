import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// mock
import './mock/mockServer'
import './assets/js/walden'
import Echarts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
Vue.component('chart', Echarts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
