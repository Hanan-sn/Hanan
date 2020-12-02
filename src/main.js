import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import './assets/styles/base/base.styl'
import './assets/styles/special-button.css'
import './common/utils/chart-theme'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'

import FlatSurfaceShader from 'vue-flat-surface-shader'
Vue.use(FlatSurfaceShader)
Vue.use(VueAwesomeSwiper)

Vue.component('chart', ECharts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
