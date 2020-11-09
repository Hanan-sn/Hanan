<template>
  <div class="header">
    <i class="title">{{ returnPathName }}</i>
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
            name = '数据归集'; break
        }
        return name
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .header
    width: 100%
    height: 100px
    line-height: 100px
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
      border-top: 100px solid #2c3549
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
</style>
