<template>
    <div class="overview" flex>
      <Map style="height: 100%"></Map>
      <!--<ShaderStore class="shader-bg"></ShaderStore>-->
      <BottomNav></BottomNav>
    </div>
</template>

<script>
  // import ShaderStore from '../../components/Shader/ShaderStore'
  import Map from '../../components/Map/Map'
  import BottomNav from '../../components/BottomNav/BottomNav'
  export default {
    name: 'Overview',
    components: {
      // ShaderStore,
      Map,
      BottomNav
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
