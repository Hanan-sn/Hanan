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
        context.font = "18px arial";
        context.fillText('hello', this.x, this.y);
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
          '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
          '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
          '#FF5722'
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
