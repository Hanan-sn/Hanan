<template>
  <div class="home">
    <Wave class="wave"/>
    <div class="links special-button">
      <router-link to="/overview" style="position: relative"><span>系统概况专题</span></router-link>
      <router-link to="/summary" style="position: relative"><span>数据归集专题</span></router-link>
      <router-link to="/public" style="position: relative"><span>双公示专题</span></router-link>
      <router-link to="/union" style="position: relative"><span>联合奖惩专题</span></router-link>
    </div>
  </div>
</template>

<script>
  import Wave from '../../components/Wave/Wave'
    export default {
        name: 'Home',
      components: {
        Wave
      }
    }
</script>

<style lang="stylus" scoped>
.home
  position absolute
  width: 100%
  height: 100%
  top: 0
  left: 0
  .wave
    position absolute
    z-index 10
  .links
    position absolute
    font-size: 24px
    line-height: 50px
    top: 50%
    left: 0
    box-sizing border-box
    padding 0 100px
    width: 100%
    z-index 12
    display flex
    justify-content space-around
</style>
