<template>
  <div ref="wave"></div>
</template>

<script>
  import * as THREE from 'three'

  export default {
    name: 'Wave',
    data() {
      return {
        renderer: null,
        camera: null,
        scene: null,
        material: null,
        group: null,
        particles: [],
        particle: null,
        separation: 100,
        animation: null,
        amountX: 50,
        amountY: 50,
        count: 0
      }
    },
    mounted() {
      this.init()
    },
    beforeDestroy() {
      cancelAnimationFrame(this.animation)
    },
    methods: {
      // 初始化
      init() {
        let container = this.$refs.wave
        // 载入例子图片
        let map = new THREE.TextureLoader().load(require('@/assets/images/animate/light-point.png'))
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
        this.material = new THREE.SpriteMaterial({ map })
        this.group = new THREE.Group()
        this.renderer = new THREE.WebGLRenderer({ alpha: true })
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.camera.lookAt(this.scene.position)
        let i = 0
        for (let ix = 0; ix < this.amountX; ix++) {
          for (let iy = 0; iy < this.amountY; iy++) {
            this.particle = this.particles[i++] = new THREE.Sprite(this.material)
            this.particle.position.x = ix * this.separation - ((this.amountX * this.separation) / 2)
            this.particle.position.z = iy * this.separation - ((this.amountY * this.separation) / 2)
            this.group.add(this.particle)
          }
        }
        this.group.position.z = -500
        console.log(this.group.position.z)
        this.scene.add(this.group)
        container.appendChild(this.renderer.domElement)
        this.animate()
      },
      // 动画
      animate() {
        this.animation = requestAnimationFrame(this.animate)
        this.render()
      },
      // 渲染
      render() {
        let i = 0
        // 批量操作粒子移动位置
        for (let ix = 0; ix < this.amountX; ix++) {
          for (let iy = 0; iy < this.amountY; iy++) {
            this.particle = this.particles[i++]
            this.particle.position.y = (Math.sin((ix + this.count) * 0.3) * 50) + (Math.sin((iy + this.count) * 0.5) * 50)
            this.particle.scale.x = this.particle.scale.y = (Math.sin((ix + this.count) * 0.3) + 1) * 2 + (Math.sin((iy + this.count) * 0.5) + 1) * 2
          }
        }
        this.group.rotation.x = 0.4
        this.group.rotation.y += 0.003
        this.renderer.render(this.scene, this.camera)
        this.count += 0.1
      }
    }
  }
</script>

<style scoped>

</style>
