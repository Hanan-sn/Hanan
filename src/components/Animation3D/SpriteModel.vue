<template>
    <div class="sprit-model" ref="spriteModel">
    </div>
</template>

<script>
  import * as THREE from 'three'
  export default {
    name: 'SpriteModel',
    data() {
      return {
        scene: null,
        camera: null,
        renderer: null,
        group: null
      }
    },
    mounted() {
      const w = this.$refs.spriteModel.clientWidth
      const h = this.$refs.spriteModel.clientHeight
      this.scene = new THREE.Scene()
      this.scene.fog = new THREE.Fog('#0f3670', 100, 120)
      this.camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000)
      this.group = new THREE.Group()
      this.renderer = new THREE.WebGLRenderer({ alpha: true, shadowMapEnabled: true })
      // this.renderer = new THREE.WebGLRenderer({alpha: true})
      this.renderer.setSize(w, h)
      this.$refs.spriteModel.appendChild(this.renderer.domElement)
      this.initGeo()
    },
    methods: {
      initGeo() {
        let boxGeometry = new THREE.SphereGeometry(60, 60, 30)
        let box = this.createPointsCloud(boxGeometry)
        this.group.add(box)
        this.scene.add(this.group)
        this.animate()
      },
      animate() {
        requestAnimationFrame(this.animate)
        this.group.rotation.x += 0.001
        this.renderer.render(this.scene, this.camera)
      },
      createPointsCloud(geometry) {
        /* 精灵材质 */
        let spriteMaterial = new THREE.PointsMaterial({
          color: 0xffffff,
          size: 1,
          transparent: true,
          map: this.generateSprite()
        })
        return new THREE.Points(geometry, spriteMaterial)
      },
      generateSprite() {
        /* 常见画布并设置宽高 */
        let canvas = document.createElement('canvas')
        canvas.width = 8
        canvas.height = 8
        /* 创建图形 */
        let ctx = canvas.getContext('2d')
        let gradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 0,
          canvas.width / 2, canvas.height / 2, canvas.width / 2
        )
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
        gradient.addColorStop(0.2, 'rgba(0, 255, 255, 1)')
        gradient.addColorStop(0.6, 'rgba(0, 0, 64, 0)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        let texture = new THREE.Texture(canvas)
        texture.needsUpdate = true
        return texture
      }
    }
  }
</script>

<style lang="stylus" scoped>
.sprit-model
  height: 600px
  width: 800px
</style>
