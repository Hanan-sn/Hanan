<template>
  <div class="union" flex="dir:col">
  </div>
</template>

<script>
    export default {
      name: 'Union',
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
