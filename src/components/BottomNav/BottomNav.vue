<template>
    <div class="bottom-nav">
      <div class="inner">
        <router-link to="/overview">系统概况</router-link>
        <router-link to="/summary">数据归集</router-link>
        <router-link to="/public">双公示</router-link>
        <router-link to="/union">联合奖惩</router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'BottomNav'
    }
</script>

<style lang="stylus" scoped>
.bottom-nav
  width 800px
  height: 400px
  margin: 0 auto
  position absolute
  &::before
    content: ''
    width: 100%
    height: 100%
    position absolute
    bottom: 0
    left: 0
    transform-style preserve-3d
    transform perspective(100px) rotateX(20deg)
    background-image: radial-gradient(#1a61a0 50%, #0d396a 90%)
</style>
