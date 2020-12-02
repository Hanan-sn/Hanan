<template>
  <div class="home">
    <div class="nav-side">
      <div class="position-wrapper">
        <router-link to="/overview">系统概况</router-link>
        <router-link to="/summary">数据归集</router-link>
        <router-link to="/public">双公示</router-link>
        <router-link to="/union">联合奖惩</router-link>
      </div>
    </div>
    <ShaderFlat class="shader-bg">
      <div class="inner-info">
        <div class="sys-title">数据展示系统</div>
      </div>
      <i class="version-tip">v 1.0.4</i>
    </ShaderFlat>
  </div>
</template>

<script>
  import ShaderFlat from '../../components/Shader/ShaderFlat'
  export default {
    name: 'Home',
    components: {
      ShaderFlat
    }
  }
</script>

<style lang="stylus" scoped>
  .home
    position absolute
    width: 100%
    height: 100%
    // background-image linear-gradient(to right bottom ,#0bc7f8, #fb0461)
    // background-image linear-gradient(to right bottom ,transparent 65%, black 60%, rgba(60, 75, 180, 1))
    &:after
      background radial-gradient(transparent 70%, rgba(100,100,100,0.1) 80%, rgba(0,0,0,0.1) 100%)
      position absolute
      z-index 1
      bottom: 0
      right: 0
      content: ''
      display block
      width: 200%
      height: 200%
    .shader-bg
      opacity 0.8
      .inner-info
        position absolute
        left: 50%
        top: 50%
        width: 100%
        line-height: 400px
        background-color: rgba(60, 75, 180, 0.2)
        transform translate(-50%, -50%)
        .sys-title
          width: 100%
          font-size: 80px
          font-weight: 700
          letter-spacing 60px
          text-align center
          text-shadow 4px 4px 4px #222222
      .version-tip
        position absolute
        right: 20px
        bottom: 10px
    .nav-side
      position absolute
      left: 2%
      top: 4%
      z-index 10
      display flex
      flex-direction column
      .position-wrapper
        position relative
        height: auto
        width: 250px
        box-sizing border-box
        padding 20px
        // border: 1px solid transparent
        a
          opacity 0
          position relative
          display block
          z-index 12
          transition linear 0.4s
          font-size: 24px
          line-height: 60px
          height 60px
          width: 210px
          text-align center
          &:after, &:before
            position absolute
            top: 50%
            transform translateY(-50%)
            opacity 0
            transition linear 0.2s
          &:hover
            &:after, &:before
              opacity 1
          &:nth-child(1)
            left: 0
            &:after
              right: 0
              content: '  >>'
          &:nth-child(2)
            &:before
              left: 0
              content: '<<  '
            left: 60px
          &:nth-child(3)
            &:after
              right: 0
              content: '  >>'
            left: 0
          &:nth-child(4)
            &:before
              left: 0
              content: '<<  '
            left: 60px
        &:before
          position: absolute
          z-index 10
          left: 50%
          top: 50%
          transform translate(-50%, -50%)
          content: 'Enter'
          font-size: 30px
          border: 6px solid #fff
          -webkit-border-radius: 50%
          -moz-border-radius: 50%
          border-radius: 50%
          display block
          line-height: 100px
          text-align center
          height: 100px
          width: 100px
          opacity 1
          transition linear 0.1s
        &:hover
          // border: 1px solid #fff
          a
            cursor pointer
            opacity 1
            &:nth-child(1)
              left: 60px
            &:nth-child(2)
              left: 0
            &:nth-child(3)
              left: 60px
            &:nth-child(4)
              left: 0
          &:before
            opacity 0
</style>
