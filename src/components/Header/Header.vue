<template>
  <div class="header">
    <i class="title">{{ returnPathName }}</i>
    <i class="sys-title">信用大数据可视化</i>
    <div class="back-btn special-button">
      <router-link to><span><i @click="$router.back(-1)" class="iconfont icon-houtui" style="font-size: 34px; padding-right: 10px;"></i>返回</span></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    mounted() {
      // console.log(this.$router)
    },
    computed: {
      returnPathName() {
        let name = ''
        switch (this.$route.path) {
          case '/overview':
            name = '系统概况'; break
          case '/public':
            name = '双公示'; break
          case '/union':
            name = '联合奖惩'; break
          case '/summary':
            name = '数据归集'; break
        }
        return name
      }
    }
  }
</script>

<style lang="stylus" scoped>
  $header-height = 100px
  .header
    width: 100%
    height: $header-height
    // line-height: $header-height
    background-image: url("~@/assets/images/large-width/title.png")
    -webkit-background-size: 100% 100%
    background-size: 100% 100%
    background-position: center center
    background-repeat: no-repeat
    text-align center
    position relative
    .sys-title
      position absolute
      top: 0
      left: 50%
      transform translateX(-50%)
      font-size: 26px
      font-weight: 700
      letter-spacing 20px
    .title
      position absolute
      left: 50%
      bottom: 0
      transform translateX(-50%)
      z-index 10
      font-size: 20px
      // background: linear-gradient(#8bdeed 50%, #3680ff);
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
      font-weight: 700
      text-shadow 2px 2px 2px rgba(200,200,200,0.1)
    .back-btn
      transform translate(0, -55px) scale(0.6)
      position absolute
      right 150px
      padding 10px
      transition text-shadow linear 0.6s, transform linear 0.6s
</style>
