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
  .wave
    position relative
    z-index 10
  .links
    position absolute
    top: 0
    left: 0
    z-index 12
    display flex
    flex-direction column

</style>
