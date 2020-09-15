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
      },
      Particle(x, y) {
        this.x = x;
        this.y = y;
        this.color = colors[Math.floor(Math.random() * colors.length)]; //'bleack'//
        this.futurRadius = randomInt(1.1, 5.1);
        this.radius = 1.1;
        this.dying = false;
        this.base = [x, y];

        this.drawParticle = function () {
          // 当前粒子变小到一定程度之后，每次将它的半径+0.1，使其慢慢变大
          if (this.radius < this.futurRadius && this.dying === false) {
            this.radius += durVal;
          } else { //粒子已经到达最大状态
            this.dying = true; //表示粒子还处于show状态
          }

          //每次-0.1
          if (this.dying) {
            this.radius -= durVal;
          }
          // 画粒子形状
          context.save();
          context.fillStyle = this.color;
          context.beginPath();
          context.fillRect(this.x, this.y, this.futurRadius, this.futurRadius)
          context.closePath();
          context.fill();
          context.restore();

          //将消失的粒子重置最初的状态
          if (this.y < 0 || this.radius < 1) {
            this.x = this.base[0];
            this.y = this.base[1];
            this.dying = false;
            this.futurRadius = randomInt(1.1, 5.1);
          }
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
