<template>
  <div id="app" v-cloak flex="dir:col">
    <transition name="fade">
      <div v-show="this.$route.path !== '/home'" class="page-title-wrapper">
        <Header />
      </div>
    </transition>
    <transition :name="transitionName">
      <router-view class="child-view" flex-box="1" flex="dir:col" />
    </transition>
  </div>
</template>
<script>
  import Header from './components/Header/Header'

  export default {
    name: 'app',
    watch: {
      '$route' (to, from) {
        //    console.log('现在路由:',to.path.split('/')[1],'来自路由:',from.path.split('/')[1],'现在的动画:',this.transitionName)
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    },
    data() {
      return {
        router: this.$router,
        transitionName: 'slide-left'
      }
    },
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
    },
    components: {
      Header
    }
  }
</script>
<style lang="stylus">
  [v-cloak] {
    display: none;
  }

  html, body
    width: 100%
    height: 100%
    padding: 0
    margin: 0

  #app
    background-color: #16171c
    // background-image: linear-gradient(#00d2ff, #3a7bd5)
    width: 100%
    height: 100%
    color #fff

  .border-box
    border: 1px solid #232831
    margin: 8px
    padding: 10px
    overflow hidden
    box-sizing: border-box
    position relative

  .num-box
    padding 10px 0 2px
    i
      &.num
        display inline-block
        vertical-align bottom
        font-size: 30px
        color #ffffff
        background-color: #c96857
        margin 0 4px
        padding 4px 10px
        -webkit-border-radius: 2px
        -moz-border-radius: 2px
        border-radius: 2px

  .bb-title
    position absolute
    z-index 20
    top: 10px
    left: 2px
    font-size: 18px
    font-weight: 700
    padding-left: 16px
    border-left: 4px solid #1d69cc

  .table-container
    height: 100%
    width: 100%
    position absolute
    top: 0
    left: 0
    box-sizing border-box
    padding-top: 40px
    overflow hidden
    .table
      overflow hidden
      width: 100%
      position relative
      padding-top: 40px
      .table-header
        position absolute
        top: 0
        left: 0
        width: 100%
        height: 40px
        background-color: #20242d
        padding 0 20px
        line-height: 40px
        box-sizing border-box
      .swiper-wrapper
        width: 100%
        .slide-item
          height: 30px
          &:nth-child(even)
            background-color: #20242d
          .row
            box-sizing border-box
            padding 0 20px
            display flex
            justify-content space-between
            align-items center

  .fade-enter-active, .fade-leave-active
    transition: opacity .5s;
  .fade-enter, .fade-leave-to
    opacity 0
  .child-view
    transition: all .5s cubic-bezier(.55,0,.1,1);
  .slide-left-enter, .slide-right-leave-active
    opacity: 0;
    transform: translate(30px, 0);
  .slide-left-leave-active, .slide-right-enter
    opacity: 0;
    transform: translate(-30px, 0);

  .shader-bg
    width: 100%
    height: 100%
</style>
