<template>
  <div class="particle-font">
    <canvas class="particle-font-canvas" @pause="pause = true" ref="particleFont" width="1200" height="800"></canvas>
  </div>
</template>

<script>
  export default {
    name: 'ParticleFont',
    data() {
      return {
        animateRunning: true,
        thisTime: null,
        lastTime: null,
        // 帧速率
        // derection: true,
        // 暂停
        pause: false,
        dots: []
      }
    },
    watch: {
      routeFont(n) {
        if (n !== '') {
          this.animateRunning = false
          this.renderParticleFont(n)
        } else {
          this.dots = []
          const ctx = this.$refs.particleFont.getContext('2d')
          const { clientWidth, clientHeight } = ctx.canvas
          ctx.clearRect(0, 0, clientWidth, clientHeight)
          console.log(clientWidth)
          this.animateRunning = false
          this.pause = false
        }
      }
    },
    props: {
      routeFont: {
        type: String
      }
    },
    mounted() {

    },
    methods: {
      renderParticleFont(text) {
        if (text !== '') {
          const canvas = this.$refs.particleFont
          canvas.width = window.innerWidth
          canvas.height = window.innerHeight
          const context = canvas.getContext('2d')
          // 焦距
          let focalLength = 1000
          // 文字内容转点阵数据
          let w = canvas.width
          let h = canvas.height
          this.drawText(text, context, w, h)
          const dots = this.getImgData(w, h, context, focalLength)
          this.initAnimate(canvas, dots, focalLength)
        }
      },
      initAnimate(cvs, dots, fl) {
        const _self = this
        const ctx = cvs.getContext('2d')
        if (cvs) {
          _self.dots.forEach(dot => {
            dot.x = Math.random() * cvs.width
            dot.y = Math.random() * cvs.height
            dot.z = Math.random() * fl * 4 - fl

            dot.tx = Math.random() * cvs.width
            dot.ty = Math.random() * cvs.height
            dot.tz = Math.random() * fl * 4 - fl
            dot.paint()
          })
          animate()
        }
        function animate() {
          let derection = true
          _self.animateRunning = true
          _self.thisTime = new Date()
          ctx.clearRect(0, 0, cvs.width, cvs.height)
          _self.dots.forEach(dot => {
            if (derection) {
              if (Math.abs(dot.dx - dot.x) < 0.1 && Math.abs(dot.dy - dot.y) < 0.1 && Math.abs(dot.dz - dot.z) < 0.1) {
                dot.x = dot.dx
                dot.y = dot.dy
                dot.z = dot.dz
                if (_self.thisTime - _self.lastTime > 1000) derection = false
              } else {
                dot.x = dot.x + (dot.dx - dot.x) * 0.1
                dot.y = dot.y + (dot.dy - dot.y) * 0.1
                dot.z = dot.z + (dot.dz - dot.z) * 0.1
                _self.lastTime = new Date()
              }
            } else {
              if (Math.abs(dot.tx - dot.x) < 0.1 && Math.abs(dot.ty - dot.y) < 0.1 && Math.abs(dot.tz - dot.z) < 0.1) {
                dot.x = dot.tx
                dot.y = dot.ty
                dot.z = dot.tz
                _self.pause = true
              } else {
                dot.x = dot.x + (dot.tx - dot.x) * 0.1
                dot.y = dot.y + (dot.ty - dot.y) * 0.1
                dot.z = dot.z + (dot.tz - dot.z) * 0.1
                _self.pause = false
              }
            }
            dot.paint()
          })
          if (!_self.pause) {
            if ('requestAnimationFrame' in window) {
              requestAnimationFrame(animate)
            }
          }
        }
      },
      drawText(text, ctx, w, h) {
        ctx.save()
        ctx.font = '60px 微软雅黑'
        ctx.fillStyle = 'rgba(255,255,255,1)'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(text, w / 4, (h / 4) - 40)
        ctx.restore()
      },
      getImgData(w, h, ctx, fl) {
        const imgData = ctx.getImageData(0, 0, w, h)
        ctx.clearRect(0, 0, w, h)
        // 粒子点
        class Dot {
          // 三维中心 + 圆角
          constructor(centerX, centerY, centerZ, radius) {
            this.dx = centerX
            this.dy = centerY
            this.dz = centerZ
            this.tx = 0
            this.ty = 0
            this.tz = 0
            this.z = centerZ
            this.x = centerX
            this.y = centerY
            this.radius = radius
          }
          paint() {
            ctx.save()
            ctx.beginPath()
            var scale = fl / (fl + this.z)
            ctx.arc(w / 8 + (this.x - w / 8) * scale, h / 8 + (this.y - h / 8) * scale, this.radius * scale, 0, 2 * Math.PI)
            ctx.fillStyle = 'rgba(15,253,253,' + scale + ')'
            ctx.fill()
            ctx.restore()
          }
        }
        for (let x = 0; x < imgData.width; x += 6) {
          for (let y = 0; y < imgData.height; y += 6) {
            let i = (y * imgData.width + x) * 2
            if (imgData.data[i] >= 128) {
              let dot = new Dot(x - 2, y - 2, 0, 2)
              this.dots.push(dot)
            }
          }
        }
        return this.dots
      }
    }
  }
</script>

<style lang="stylus" scoped>
.particle-font-canvas
  display block
  margin 0 auto
  position absolute
  top: 0
  left: 0
</style>
