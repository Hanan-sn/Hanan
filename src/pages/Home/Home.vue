<template>
  <div class="home">
    <Wave class="wave"/>
    <div class="links special-button">
      <router-link to="/overview" style="position: relative"><span>系统概况专题</span></router-link>
      <router-link to="/summary" style="position: relative"><span>数据归集专题</span></router-link>
      <router-link to="/public" style="position: relative"><span>双公示专题</span></router-link>
      <router-link to="/union" style="position: relative"><span>联合奖惩专题</span></router-link>
    </div>
    <a class="link-to-home" href="https://github.com/Mario343214420">Move To Github</a>
    <i class="version-tip">v 1.0.3</i>
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
.link-to-home
  position absolute
  top: 0
  right: 0
  z-index 40
  display block
  padding 10px 100px
  transform rotate(42deg) translate(30%, -80%)
  background-color: rgba(240, 240, 240, 0.8)
  box-shadow 1px 1px 4px #6b6b6b
  color #6b6b6b
  font-size: 18px
  font-weight: 700
  transition all linear 0.6s
  border: 4px dotted #fff
  text-indent 0
  &:hover
    box-shadow 0 0 2px #6b6b6b
    background-color: rgba(240, 240, 240, 0.2)
    color #fff
.version-tip
  position absolute
  right: 0
  bottom: 0
  padding-right: 10px
  padding-bottom: 4px
</style>
