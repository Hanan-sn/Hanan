<template>
  <div class="particle-font">
    <canvas ref="particleFont"></canvas>
  </div>
</template>

<script>
  export default {
    name: 'ParticleFont',
    mounted(){
      this.renderParticleFont()
    },
    methods: {
      renderParticleFont() {
        const canvas = this.$refs.particleFont
        const context = canvas.getContext('2d')
        focalllength = 250

      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
