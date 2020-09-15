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
      renderParticleFont(){
        const ctx = this.$refs.particleFont.getContext('2d')
        ctx.textAlign = 'center'
        console.dir(ctx)
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
