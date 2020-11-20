<template>
  <div class="home">
    <Wave class="wave"/>
    <div class="links">
      <router-link to="/overview">系统概况专题</router-link>
      <router-link to="/summary">数据归集专题</router-link>
      <router-link to="/public">双公示专题</router-link>
      <router-link to="/union">联合奖惩专题</router-link>
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
    top: 100px
    left: 100px
    z-index 12
    display flex
    flex-direction column
    a
      transition text-shadow linear 0.6s, transform linear 0.6s
      &:hover
        transform translate(1px, 1px)
        text-shadow -2px -1px 2px #24ecec
</style>
