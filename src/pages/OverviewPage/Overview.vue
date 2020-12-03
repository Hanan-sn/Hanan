<template>
    <div class="overview" flex="dir:col">
      <ShaderStore class="shader-bg"></ShaderStore>
    </div>
</template>

<script>
  import ShaderStore from '../../components/Shader/ShaderStore'
  export default {
    name: 'Overview',
    components: {
      ShaderStore
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
</style>
