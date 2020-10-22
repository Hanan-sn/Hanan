<template>
  <div class="city" ref="city"></div>
</template>

<script>
  import * as THREE from 'three'
  import ajax from '../../api/ajax'
  export default {
    name: 'City',
    data() {
      return {
        scene: null,
        camera: null,
        renderer: null
      }
    },
    mounted() {
      this.initCity()
    },
    methods: {
      initCity() {
        const w = this.$refs.city.clientWidth
        const h = this.$refs.city.clientHeight
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 10000)
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(w, h)
        this.$refs.city.appendChild(this.renderer.domElement)

        const manager = new THREE.LoadingManager()
        manager.onStart = function (url, itemsLoaded, itemsTotal) {
          console.log(`Started loading file: ${url} .\nLoaded ${itemsLoaded} of ${itemsTotal} files.`)
        }
        manager.onLoad = function () {
          console.log('Loading complete!')
        }
        manager.onProgress = function (url, itemsLoaded, itemsTotal) {
          console.log(`Loading file: ${url} .\nLoaded ${itemsLoaded} of ${itemsTotal} files.`)
        }
        manager.onError = function (url) {
          console.log(`There was an error loading ${url}`)
        }
        const loader = new THREE.ObjectLoader(manager)
        ajax('http://192.168.0.219:8000/city.obj').then(res => { loader.load(res) })
        this.renderer.render(this.scene, this.camera)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .city
    width 600px
    height: 400px
</style>
