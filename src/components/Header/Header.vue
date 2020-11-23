<template>
  <div class="header">
    <i class="title">{{ returnPathName }}</i>
    <div class="back-btn special-button">
      <router-link to="/home"><span><i class="iconfont icon-houtui" style="font-size: 34px; padding-right: 10px;"></i>返回</span></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    computed: {
      returnPathName() {
        let name = ''
        switch (this.$route.path) {
          case '/overview':
            name = '系统概况专题'; break
          case '/public':
            name = '双公示专题'; break
          case '/union':
            name = '联合奖惩专题'; break
          case '/summary':
            name = '数据归集专题'; break
        }
        return name
      }
    }
  }
</script>

<style lang="stylus" scoped>
  $header-height = 70px
  .header
    width: 100%
    height: $header-height
    line-height: $header-height
    background-image: linear-gradient(#1a2030, #1f2c3d);
    text-align center
    position relative
    &::after
      content: ''
      position absolute
      display block
      width: 400px
      height: 0
      border-bottom: 0 solid transparent
      border-top: $header-height solid #2c3549
      border-right: 60px solid transparent
      border-left: 60px solid transparent
      top: 0
      left: 50%
      z-index 5
      transform translateX(-50%)
    .title
      position relative
      z-index 10
      font-size: 40px
      background: linear-gradient(#8bdeed 50%, #3680ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700
      text-shadow 2px 2px 2px rgba(200,200,200,0.1)
    .back-btn
      transform translate(0, -55px) scale(0.6)
      position absolute
      right 150px
      padding 10px
      transition text-shadow linear 0.6s, transform linear 0.6s
</style>
