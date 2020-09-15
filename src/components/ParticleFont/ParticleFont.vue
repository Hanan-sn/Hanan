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
        const context = this.$refs.particleFont.getContext('2d')
        context.textAlign = 'center'
        context.font = this.size + "px arial";
        context.fillText(this.text, this.x, this.y);
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
