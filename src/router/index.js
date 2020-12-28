import Vue from 'vue'
import VueRouter from 'vue-router'
// import BinUI from 'bin-ui'

// const Home = () => import('../pages/Home/Home')
const Overview = () => import('../pages/OverviewPage/Overview')
const Summary = () => import('../pages/SummaryPage/Summary')
const Public = () => import('../pages/PublicPage/Public')
const Union = () => import('../pages/UnionPage/Union')

// Vue.use(BinUI)

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // {
    //   path: '/home',
    //   component: Home
    // },
    {
      path: '/overview',
      component: Overview
    },
    {
      path: '/summary',
      component: Summary
    },
    {
      path: '/public',
      component: Public
    },
    {
      path: '/union',
      component: Union
    },
    {
      path: '/',
      redirect: '/overview'
    }
  ]
})

export default router
