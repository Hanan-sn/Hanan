<template>
  <div class="public" flex="dir:col">
  </div>
</template>

<script>
    export default {
      name: 'Public',
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
