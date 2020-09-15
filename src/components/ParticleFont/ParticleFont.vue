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
      renderParticleFont(text) {
        const canvas = this.$refs.particleFont
        const context = canvas.getContext('2d')
        // 焦距
        focalllength = 250
        // 文字内容转点阵数据
        const dots = get
      },
      getImgData(w, h) {
        const imgData = context.getImgData(0,0,w,h)
        context.clearRect(0,0,w,h)
        const dots = []
        for (let x = 0; x < imgData.width; x+=6) {
          for (let y = 0; y < imgData.height; y+=6) {
            
          }
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
