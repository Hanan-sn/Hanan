<template>
    <div class="overview" flex="dir:col">
      <ShaderTest class="shader-bg"></ShaderTest>
    </div>
</template>

<script>
  import ShaderTest from '../../components/Shader/ShaderTest'
  export default {
    name: 'Overview',
    components: {
      ShaderTest
    },
    mounted () {
      /* window.onresize = () => {
        this.winResizeListener()
      } */
    },
    methods: {
      /* winResizeListener () {
        let t = null
        clearTimeout(t)
        t = setTimeout(() => {
          // this.$refs.unionPie.resize()
          // this.$refs.classicBar.resize()
          // this.$refs.exchangeBar.resize()
          // this.$refs.exchangeLine.resize()
        }, 300)
      } */
    }
  }
</script>

<style lang="stylus" scoped>
.overview
  width: 100%
  height: 100%
  .shader-bg
    width: 100%
    height: 100%
</style>
