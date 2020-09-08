<template>
  <div id="app" v-cloak>
    <div v-if="this.$route.path !== '/home' && this.$route.path !== '/home2'" class="page-title-wrapper">
      <span class="page-title">
        {{ returnRouteName() }}
      </span>
      <span class="to-home">
          <router-link to="/home">返回</router-link>
      </span>
    </div>
    <router-view/>
  </div>
</template>
<script>
  import './common/utils/macarons'
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
  html
    font-size: 12px
  i
    font-style normal
  .num
    font-size: 22px
    font-weight: 700
    color #2ee0d2
  [v-cloak] {
    display: none;
  }
  [flex]
    display flex
  [flex~='dir:col']
    flex-direction column
  [flex~='justify:center']
    justify-content center
  [flex~='justify:between']
    justify-content space-between
  [flex~='justify:around']
    justify-content space-around
  [flex~='align:center']
    align-items center
  [flex~='align:end']
    align-items flex-end
  [flex~='wrap:no']
    flex-wrap nowrap
  [flex-box~='1']
    flex: 1
  [flex-box~='2']
    flex: 1
  [flex-box~='3']
    flex: 1
  body, html
    display block
    min-height: 100%
    height: 100%
    margin: 0
    padding: 0
  canvas
    display block
    padding: 0
    margin: 0
  #app
    width: 100%
    height: 100%
    min-width 1920px
    min-height 934px
    display flex
    flex-direction column
    background: url('~@/assets/images/common/bg.jpg') 100% 100%
    -webkit-background-size: cover
    >div:not(.page-title-wrapper)
      flex: 1

    .page-title-wrapper
      display flex
      justify-content center
      align-items center

      .header-title
        display inline-block
        text-align center
        height: 60px
        width 100%
        line-height: 50px
        background-image: url('~@/assets/images/overview/title_bg.png')
        -webkit-background-size: auto 100%
        background-size: auto 100%
        background-position: center center
        background-repeat: no-repeat

        i
          font-family "微软雅黑", Arial
          font-size: 30px
          color #41fae8
          font-weight: 700
          letter-spacing 18px

</style>
