<template>
  <!-- 渲染方法存在问题 -->
  <canvas class="canvas" ref="canvas"></canvas>
</template>

<script>
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
  import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils'
  export default {
    name: 'ConcatEarth',
    data() {
      return {
        renderer: null,
        camera: null,
        scene: null,
        geometry: null,
        controls: null
      }
    },
    mounted() {
      this.render()
    },
    methods: {
      render() {
        this.init()
      },
      async loadFile(url) {
        const req = await fetch(url)
        return req.text()
      },
      parseData(text) {
        const data = []
        const settings = { data }
        let max = null
        let min = null
        text.split('\n').forEach(
          line => {
            const parts = line.trim().split(/\s+/)
            if (parts.length === 2) {
              settings[parts[0]] = parseFloat(parts[1])
            } else if (parts.length > 2) {
              const values = parts.map(v => {
                const value = parseFloat(v)
                if (value === settings.NODATA_value) {
                  return undefined
                }
                max = Math.max(max === undefined ? value : max, value)
                min = Math.min(min === undefined ? value : min, value)
                return value
              })
              data.push(values)
            }
          }
        )
        return Object.assign(settings, { min, max })
      },
      addBox(file) {
        const { min, max, data } = file
        const range = max - min
        // these helpers will make it easy to position the boxes
        // We can rotate the lon helper on its Y axis to the longitude
        const lonHelper = new THREE.Object3D()
        this.scene.add(lonHelper)
        // We rotate the latHelper on its X axis to the latitude
        const latHelper = new THREE.Object3D()
        lonHelper.add(latHelper)
        // The position helper moves the object to the edge of the sphere
        const positionHelper = new THREE.Object3D()
        positionHelper.position.z = 1
        latHelper.add(positionHelper)
        // Used to move the center of the cube so it scales from the position Z axis
        const originHelper = new THREE.Object3D()
        originHelper.position.z = 0.5
        positionHelper.add(originHelper)
        const color = new THREE.Color()
        const lonFudge = Math.PI * 0.5
        const latFudge = Math.PI * -0.135
        const geometries = []
        data.forEach((row, latNdx) => {
          row.forEach((value, lonNdx) => {
            if (value === undefined) {
              return
            }
            const amount = (value - min) / range
            const boxWidth = 1
            const boxHeight = 1
            const boxDepth = 1
            const geometry = new THREE.BoxBufferGeometry(boxWidth, boxHeight, boxDepth)
            // adjust the helpers to point to the latitude and longitude
            lonHelper.rotation.y = THREE.Math.degToRad(lonNdx + file.xllcorner) + lonFudge
            latHelper.rotation.x = THREE.Math.degToRad(latNdx + file.yllcorner) + latFudge
            // use the world matrix of the origin helper to
            // position this geometry
            positionHelper.scale.set(0.005, 0.005, THREE.Math.lerp(0.01, 0.5, amount))
            originHelper.updateWorldMatrix(true, false)
            geometry.applyMatrix(originHelper.matrixWorld)
            // compute a color
            const hue = THREE.Math.lerp(0.7, 0.3, amount)
            const saturation = 1
            const lightness = THREE.Math.lerp(0.4, 1.0, amount)
            color.setHSL(hue, saturation, lightness)
            // get the colors as an array of values from 0 to 255
            const rgb = color.toArray().map(v => v * 255)
            // make an array to store colors for each vertex
            const numVerts = geometry.getAttribute('position').count
            const itemSize = 3
            // r, g, b
            const colors = new Uint8Array(itemSize * numVerts)
            // copy the color into the colors array for each vertex
            colors.forEach((v, ndx) => {
              colors[ndx] = rgb[ndx % 3]
            })
            const normalized = true
            const colorAttrib = new THREE.BufferAttribute(colors, itemSize, normalized)
            geometry.setAttribute('color', colorAttrib)
            geometries.push(geometry)
          })
        })
        const mergedGeometry = BufferGeometryUtils.mergeBufferGeometries(geometries, false)
        const vertexColors = new THREE.VertexColors()
        const material = new THREE.MeshBasicMaterial({ vertexColors })
        const mesh = new THREE.Mesh(mergedGeometry, material)
        this.scene.add(mesh)
      },
      init() {
        const canvas = this.$refs.canvas
        const fov = 60
        const aspect = 2
        const near = 0.1
        const far = 10
        this.renderer = new THREE.WebGLRenderer({ canvas })
        this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
        this.camera.position.z = 2.5
        this.controls = new OrbitControls(this.camera, canvas)
        this.controls.enableDamping = true
        this.controls.enablePan = false
        this.controls.minDistance = false
        this.controls.maxDistance = false
        this.controls.update()
        this.scene = new THREE.Scene()
        const loader = new THREE.TextureLoader()
        const texture = loader.load(require('./earth.jpg'), this.renderer)
        const geometry = new THREE.SphereBufferGeometry(1, 64, 32)
        const material = new THREE.MeshBasicMaterial({ map: texture })
        const mesh = new THREE.Mesh(geometry, material)
        this.scene.add(mesh)
      },
      fun() {
        loadFile('/uploads/1911/gpw_v4_basic_demographic_characteristics_rev10_a000_014mt_2010_cntm_1_deg.asc')
          .then(parseData)
          .then(addBoxes)
          .then(render)

        function resizeRendererToDisplaySize(renderer) {
          const canvas = renderer.domElement
          const width = canvas.clientWidth
          const height = canvas.clientHeight
          const needResize = canvas.width !== width || canvas.height !== height
          if (needResize) {
            renderer.setSize(width, height, false)
          }
          return needResize
        }

        let renderRequested = false

        function render() {
          renderRequested = undefined

          if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement
            camera.aspect = canvas.clientWidth / canvas.clientHeight
            camera.updateProjectionMatrix()
          }

          controls.update()
          renderer.render(scene, camera)
        }
        render()

        function requestRenderIfNotRequested() {
          if (!renderRequested) {
            renderRequested = true
            requestAnimationFrame(render)
          }
        }

        controls.addEventListener('change', requestRenderIfNotRequested)
        window.addEventListener('resize', requestRenderIfNotRequested)
      }
    }
  }
</script>

<style lang="stylus" scoped>
.canvas
  width: 800px
  height: 600px
</style>
