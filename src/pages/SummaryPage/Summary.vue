<template>
  <div class="summary" flex="dir:col">
  </div>
</template>

<script>
  export default {
    name: 'Summary',
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
          // this.$refs.unionBar.resize()
          // this.$refs.natPie.resize()
          // this.$refs.newPie.resize()
        }, 300)
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
