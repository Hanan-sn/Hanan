<template>
    <div class="bottom-nav">
      <div class="inner">
        <router-link to="/overview">
          <!--系统概况-->
        </router-link>
        <router-link to="/summary">
          <!--数据归集-->
        </router-link>
        <router-link to="/public">
          <!--双公示-->
        </router-link>
        <router-link to="/union">
          <!--联合奖惩-->
        </router-link>
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
  height: 200px
  margin: 0 auto
  position absolute
  bottom: 0
  left: 50%
  transform translateX(-50%)
  z-index 4
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
  .inner
    z-index 20
    position absolute
    top: 50%
    left: 50%
    width: 90%
    transform translate(-50%, -50%)
    display flex
    justify-content space-between
    a
      text-align center
      display block
      height: 120px
      width: 120px
      position relative
      z-index 100
      background-position: center center
      &:nth-child(1)
        background-image: url('~@/assets/images/large-width/xtgk.png')
      &:nth-child(2)
        background-image: url('~@/assets/images/large-width/sjgj.png')
      &:nth-child(3)
        background-image: url('~@/assets/images/large-width/sgs.png')
      &:nth-child(4)
        background-image: url('~@/assets/images/large-width/lhjc.png')

</style>
