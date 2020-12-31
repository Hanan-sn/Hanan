<template>
  <div class="union" flex="dir:col">
<!--    <ShaderKabi class="shader-bg"></ShaderKabi>-->
  </div>
</template>

<script>
  // import ShaderKabi from '../../components/Shader/ShaderKabi'
    export default {
      name: 'Union',
      components: {
        // ShaderKabi
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
