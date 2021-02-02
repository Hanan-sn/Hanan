<template>
  <div class="city-model" ref="cityModel">

  </div>
</template>

<script>
  import * as THREE from 'three'
  import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
  import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
  import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
  // import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
  // import Stats from 'stats-js'
  // import dat from 'dat.gui'
  export default {
    name: 'CityModel',
    data() {
      return {
        container: null,
        stats: null,
        camera: null,
        scene: null,
        renderer: null,
        composer: null,
        params: {
          exposure: 1,
          bloomStrength: 1.9,
          bloomThreshold: 0.3,
          bloomRadius: 0,
          light: 0.1
        },
        group: null

      }
    },
    mounted() {
      this.init()
      this.animate()
    },
    methods: {
      init() {
        this.container = document.createElement('div')
        // stats引入出错
        // this.stats = new Stats()
        // console.log(this.stats)
        // this.container.appendChild(stats.dom)
        this.camera = new THREE.PerspectiveCamera(
          45,
          window.innerWidth / window.innerHeight,
          1,
          1000
        )
        this.camera.position.z = 10
        this.camera.position.x = 50
        this.camera.position.y = 10
        this.scene = new THREE.Scene()
        this.scene.background = new THREE.TextureLoader().load('@/assets/images/cityModel.sky.jpg')
        this.scene.add(new THREE.AmbientLight(0x404040))
        this.camera.add(new THREE.PointLight(0xffffff, 0.3))
        this.scene.add(this.group)

        this.renderer = new THREE.WebGLRenderer({ antialias: false })
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.gammaInput = true
        this.renderer.gammaOutput = true
        this.container.appendChild(this.renderer.domElement)
        const dom = this.$refs.cityModel
        dom.appendChild(this.container)

        const bloomPass = new UnrealBloomPass(
          new THREE.Vector2(window.innerWidth, window.innerHeight),
          1.5,
          0.4,
          0.85
        )
        bloomPass.renderToScreen = true
        bloomPass.threshold = this.params.bloomThreshold
        bloomPass.strength = this.params.bloomStrength
        bloomPass.radius = this.params.bloomRadius
      },
      animate() {
        requestAnimationFrame(this.animate)
        this.stats.update()
        this.composer.render()
      }

    }
  }
</script>

<style lang="stylus" scoped>
  .city-model
    position absolute
    top: 0
    left: 0
    width: 800px
    height: 600px
</style>
