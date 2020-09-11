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
  import Stats from 'stats-js'
  import dat from 'dat.gui'
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
        const renderScene = new RenderPass(this.scene, this.camera)

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
        console.log(this.params)
        // this.composer = new EffectComposer(this.renderer)
        // let r = this.renderer
        // console.log(EffectComposer(r))
        // this.composer.setSize(window.innerWidth, window.innerHeight)
        // this.composer.addPass(renderScene)
        // this.composer.addPass(bloomPass)

        // const controls = new OrbitControls(this.camera, this.renderer.domElement)

        (function () {
          const gui = new dat.GUI()
          gui.add(this.params, 'exposure', 0.1, 2.0).onChange(value => {
            this.renderer.toneMappingExposure = Math.pow(value, 4.0)
          })
          gui.add(this.params, 'bloomThreshold', 0.0, 1.0).onChange(value => {
            bloomPass.threshold = Number(value)
          })
          gui.add(this.params, 'bloomStrength', 0.0, 20.0).onChange(value => {
            bloomPass.strength = Number(value)
          })
          gui.add(this.params, 'light', 0.0, 1.0).onChange(value => {
            bloomPass.light = Number(value)
          })
          gui
            .add(this.params, 'bloomRadius', 0.0, 1.0)
            .step(0.01)
            .onChange(function (value) {
              bloomPass.radius = Number(value)
            })
        })()
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
