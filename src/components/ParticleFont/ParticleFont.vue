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
        const Dot =
        const imgData = context.getImageData(0,0,w,h)
        context.clearRect(0,0,w,h)
        class Dot{
          constructor(centerX, centerY, centerZ, radius){
            this.dx = centerX;
            this.dy = centerY;
            this.dz = centerZ;
            this.tx = 0;
            this.ty = 0;
            this.tz = 0;
            this.z = centerZ;
            this.x = centerX;
            this.y = centerY;
            this.radius = radius;
          }
        }
        for (let x = 0; x < imgData.width; x+=6) {
          for (let y = 0; y < imgData.height; y+=6) {
            let i = (y*imgData.width + x) * 4
            if(imgData.data[i] >= 128){
              var dot = new Dot(x - 3,y - 3, 0, 3)
              dots.push(dot)
            }
          }
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
