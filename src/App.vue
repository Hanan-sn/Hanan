<template>
  <div id="app" :class="this.$route.path === '/home' ? 'bg' : ''" v-cloak flex="dir:col">
    <!--<div v-if="this.$route.path !== '/home' && this.$route.path !== '/home2'" class="page-title-wrapper">
      <span class="page-title">
        {{ returnRouteName() }}
      </span>
      <span class="to-home">
          <router-link to="/home">返回</router-link>
      </span>
    </div>-->
    <Header :title="returnRouteName()"></Header>
    <router-view/>
  </div>
</template>
<script>
  import Header from './components/Header/Header'
  export default {
    name: 'app',
    methods: {
      returnRouteName() {
        let route = this.$route.path
        switch (route) {
          case '/overview':
            return '系统概况专题'
          case '/summary':
            return '数据归集专题'
          case '/public':
            return '双公示专题'
          case '/union':
            return '联合奖惩专题'
          case '/map':
            return '区域数据归集'
          case '/home':
            return '信用大数据展示系统'
        }
      }
    },
    components: {
      Header
    }
  }
</script>
<style lang="stylus">
  @import "~@/assets/styles/font/iconfont.css"
  [v-cloak] {
    display: none;
  }
  html, body
    padding: 0
    margin: 0
    height: 100%
  i
    font-style normal
  div
    box-sizing border-box
  #app
    height: 100%
    background-color: #062a5a
    min-width 1920px
    min-height 978px
    position relative
  .bg
    background-image: url('~@/assets/images/home/bg.jpg')
    -webkit-background-size: cover
    background-size: cover
    height: 100%
  [flex]
    display flex
  [flex~='dir:col']
    flex-direction column
  [flex~='align:center']
    align-items center
  [flex~='wrap']
    flex-wrap wrap
  [flex~='justify:around']
    justify-content space-around
  [flex~='justify:between']
    justify-content space-between
  [flex~='justify:center']
    justify-content center
  .sub
    color #fff
    font-size 12px
  .unit
    color: #17C2EA
    font-size: 12px
  .num
    color: #17C2EA
    font-weight: 700
    font-size 18px
  .table-wrapper
    background-color: #103c95
    height: 31px
    line-height: 31px
    span
      flex: 1
      text-align center
  .swiper-item
    line-height: 30px
    &:nth-child(odd)
      background-color: #103c95
    span
      flex: 1
      text-align center
      &:nth-child(3)
        color: #17C2EA;
</style>
