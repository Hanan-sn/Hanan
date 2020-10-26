import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
import '@/common/westeros'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)

// mock
// import './mock/mockServer'
Vue.component('chart', ECharts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
