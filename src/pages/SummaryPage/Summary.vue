<template>
  <div class="summary" flex="dir:col">
    <ShaderSummary class="shader-bg" />
  </div>
</template>

<script>
  import ShaderSummary from '../../components/Shader/ShaderSummary'
  export default {
    name: 'Summary',
    mounted () {
      window.onresize = () => {
        this.winResizeListener()
      }
    },
    components: {
      ShaderSummary
    },
    methods: {
      winResizeListener () {
        let t = null
        clearTimeout(t)
        t = setTimeout(() => {
          // this.$refs.unionBar.resize()
          // this.$refs.natPie.resize()
          // this.$refs.newPie.resize()
        }, 300)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .summary
    position relative
    z-index 4
</style>
