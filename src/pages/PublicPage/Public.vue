<template>
  <div class="public" flex="dir:col">
    <ShaderPublic class="shader-bg"></ShaderPublic>
  </div>
</template>

<script>
  import ShaderPublic from '../../components/Shader/ShaderPublic'
    export default {
      name: 'Public',
      components: {
        ShaderPublic
      },
      mounted () {
        window.onresize = () => {
          this.winResizeListener()
        }
      },
      methods: {
        winResizeListener () {
          let t = null
          clearTimeout(t)
          t = setTimeout(() => {
            // this.$refs.publicLine.resize()
            // this.$refs.summaryLine.resize()
            // this.$refs.natPie.resize()
            // this.$refs.newPie.resize()
          }, 300)
        }
      }
    }
</script>

<style scoped>

</style>
