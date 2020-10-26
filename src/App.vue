<template>
  <div id="app" v-cloak>
    <!--<div v-if="this.$route.path !== '/home' && this.$route.path !== '/home2'" class="page-title-wrapper">
      <span class="page-title">
        {{ returnRouteName() }}
      </span>
      <span class="to-home">
          <router-link to="/home">返回</router-link>
      </span>
    </div>-->
    <router-view/>
  </div>
</template>
<script>
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
        }
      }
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
  .header
    height 70px
    background-image: url('~@/assets/images/home/top_bg.png')
    background-repeat: no-repeat;
    -webkit-background-size: 100% 100%
    background-size: 100% 100%
    text-align center
    padding-top: 16px
    box-sizing border-box
    i
      color: #00fff7;
      font-size 24px
      font-weight: 700
      letter-spacing 10px
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
</style>
