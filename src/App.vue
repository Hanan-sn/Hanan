<template>
  <div id="app" flex="column" v-cloak>
    <div v-if="this.$route.path !== '/home'" class="page-title-wrapper">
      <span class="page-title">
        {{ returnRouteName() }}
      </span>
      <span class="to-home">
          <router-link to="/home">返回</router-link>
      </span>
    </div>
    <router-view flex-box="1"/>
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
  [v-cloak] {
    display: none;
  }
  div{
    box-sizing border-box
  }
  html, body, #app{
    height: 100%
    padding: 0
    margin: 0
  }
  body{
    background-color: #0f1e3d
  }
  #app{
    padding: 15px 0 0
    box-sizing border-box
  }
  [flex] {
    display flex
  }
  [flex-box='1']{
    flex: 1
  }
  [flex~='column']{
    flex-direction column
  }
  [flex~='cross-center']{
    align-items center
  }
  [flex~='wrap']{
    flex-wrap wrap
  }
  [flex~='space:between']{
    justify-content space-between
  }
  [flex~='space:around']{
    justify-content space-around
  }
  [flex~='center']{
    justify-content center
  }
  .page-title-wrapper{
    font-size: 28px
    font-weight: 700
    color #fff
    text-align center
    letter-spacing 4px
    position relative
    margin-bottom: 5px
  }
  .num{
    font-size: 24px;
    color #6ad4ff
  }
  .to-home{
    position absolute
    right 30px
    a{
      font-size: 22px
      color #fff
      text-decoration none
      position relative
      &::after{
        content: '《《'
        letter-spacing -4px
        position absolute
        left: 0
        top: 0
        opacity 0
        transition ease-in-out 1s
      }
      &:hover{
        &:after{
          opacity 1
          left: -50px
        }
      }
    }
  }
  i{
    font-style normal
  }
</style>
