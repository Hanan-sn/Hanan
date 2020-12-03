<template>
  <div class="union" flex="dir:col">
    <ShaderUnion class="shader-bg"></ShaderUnion>
  </div>
</template>

<script>
  import ShaderUnion from '../../components/Shader/ShaderUnion'
    export default {
      name: 'Union',
      components: {
        ShaderUnion
      },
      mounted () {
          window.onresize = this.winResizeListener
      },
      methods: {
        winResizeListener () {
          let t = null
          clearTimeout(t)
          t = setTimeout(() => {
            // this.$refs.unionLine.resize()
            // this.$refs.quitLine.resize()
            // this.$refs.memoLine.resize()
          }, 300)
        }
      }
    }
</script>

<style lang="stylus" scoped>
</style>
