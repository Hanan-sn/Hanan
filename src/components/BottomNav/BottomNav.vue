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
  height: 160px
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
    display block
    bottom: 0
    left: 0
    background-image: url('~@/assets/images/large-width/bg.png')
    background-repeat: no-repeat
    background-position: center bottom
    -webkit-background-size: 100% 80px
    background-size: 100% 80px
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
      height: 122px
      width: 120px
      position relative
      z-index 100
      background-position: center center
      background-repeat: no-repeat
      &:nth-child(1)
        background-image: url('~@/assets/images/large-width/xtgk.png')
      &:nth-child(2)
        background-image: url('~@/assets/images/large-width/sjgj.png')
      &:nth-child(3)
        background-image: url('~@/assets/images/large-width/sgs.png')
      &:nth-child(4)
        background-image: url('~@/assets/images/large-width/lhjc.png')

</style>
