<template>
  <div class="pyramid" ref="pyramid"></div>
</template>

<script>
  import * as THREE from 'three'

  export default {
    name: 'Pyramid',
    data() {
      return {
        scene: null,
        camera: null,
        renderer: null,
        group: null,
        time: 0
      }
    },
    mounted() {
      this.render()
    },
    methods: {
      render() {
        const w = this.$refs.pyramid.clientWidth
        const h = this.$refs.pyramid.clientHeight
        const color = '#2477f1'
        this.scene = new THREE.Scene()
        this.scene.fog = new THREE.Fog('#0f3670', 100, 120)
        this.camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000)
        this.group = new THREE.Group()
        this.renderer = new THREE.WebGLRenderer({ alpha: true, shadowMapEnabled: true })
        // this.renderer = new THREE.WebGLRenderer({alpha: true})
        this.renderer.setSize(w, h)
        this.$refs.pyramid.appendChild(this.renderer.domElement)

        /* let material = new THREE.MeshPhongMaterial({
          color,
          opacity: 0.8,
          specular: '#2477f1', // 高光部分的颜色
          shininess: 10// 高光部分的亮度，默认30
        }) */
        let material = new THREE.MeshLambertMaterial({
          color,
          opacity: 0.8,
          emissive: color,
          emissiveIntensity: 0.7,
          lightMapIntensity: 2
        })

        // let material = new THREE.MeshBasicMaterial( {color} );
        let coneGeo = new THREE.ConeGeometry(1.3, 1.4, 4)
        let cone = new THREE.Mesh(coneGeo, material)
        cone.position.y = 4.4
        this.group.add(cone)

        let cylinderGeo = new THREE.CylinderGeometry(1.5, 2.4, 1, 4, 1)
        let cylinder = new THREE.Mesh(cylinderGeo, material)

        cylinder.position.y = 3
        let cylinderGeoCopy = new THREE.CylinderGeometry(2.6, 3.5, 1, 4, 1)
        let cylinderCopy = new THREE.Mesh(cylinderGeoCopy, material)
        cylinderCopy.position.y = 1.8
        this.group.add(cylinder)
        this.group.add(cylinderCopy)

        this.scene.add(this.group)

        var spotLight = new THREE.SpotLight(0xf0f0f0)
        spotLight.position.set(-5, 5, 4)
        // this.group.children.forEach(item=>{
        //   item.castShadow  = true;
        //   item.receiveShadow = true;
        // })

        spotLight.shadow.mapSize.width = 512
        spotLight.shadow.mapSize.height = 512
        spotLight.shadow.camera.near = 0.5
        spotLight.shadow.camera.far = 500
        spotLight.shadow.focus = 1

        spotLight.target = cylinderCopy
        this.scene.add(spotLight)
        this.camera.position.z = 8
        this.camera.position.y = 3
        this.group.rotation.x = 0.2
        this.animate()
      },
      animate() {
        requestAnimationFrame(this.animate)
        this.group.children.forEach(
          (item, i) => {
            this.time += 0.01
            if (i === 0) {
              item.rotation.y += 0.01
              item.position.y += Math.sin(this.time) / 200
            }
            if (i === 1) {
              item.rotation.y -= Math.sin(this.time) / 10
              item.position.y += Math.sin(this.time) / 800
            }
            if (i === 2) {
              item.rotation.y += 0.01
              item.position.y -= Math.sin(this.time) / 400
            }
          }
        )
        this.renderer.render(this.scene, this.camera)
      },
      createEarthParticles(img, imgData) {
        let positions = []
        let materials = []
        let sizes = []
        for (let i = 0; i < 2; i++) {
          positions[i] = {
            positions: []
          }
          sizes[i] = {
            sizes: []
          }
          let mat = new THREE.PointsMaterial()
          mat.size = 5
          mat.color = new THREE.Color('#079cd1')
          let img = require('@/assets/images/img-for-3d/dot.png')
          mat.map = new THREE.TextureLoader().load(img)
          // const cvs = document.createElement('canvas')
          // mat.map = new THREE.CanvasRenderer ().load('../../assets/images/dot.png')
          mat.depthWrite = false
          mat.transparent = true
          mat.opacity = 0
          mat.side = THREE.FrontSide
          mat.blending = THREE.AdditiveBlending
          let n = i / 2
          mat.t_ = n * Math.PI * 2
          mat.speed_ = this.options.BLINT_SPEED
          mat.min_ = 0.2 * Math.random() + 0.5
          mat.delta_ = 0.1 * Math.random() + 0.1
          mat.opacity_coef_ = 1
          materials.push(mat)
        }
        const spherical = new THREE.Spherical()
        spherical.radius = this.options.radius
        const step = 250
        for (let i = 0; i < step; i++) {
          let vec = new THREE.Vector3()
          let radians = step * (1 - Math.sin(i / step * Math.PI)) / step + 0.5
          for (let j = 0; j < step; j += radians) {
            let c = j / step
            let f = i / step
            let index = Math.floor(2 * Math.random())
            let pos = positions[index]
            let size = sizes[index]
            if (this.isLandByUV(img, imgData, c, f)) { // 根据横纵百分比判断在底图中的像素值
              spherical.theta = c * Math.PI * 2 - Math.PI / 2 // 横纵百分比转换为theta和phi夹角
              spherical.phi = f * Math.PI // 横纵百分比转换为theta和phi夹角
              vec.setFromSpherical(spherical) // 夹角转换为世界坐标
              pos.positions.push(vec.x)
              pos.positions.push(vec.y)
              pos.positions.push(vec.z)
              if (j % 3 === 0) {
                size.sizes.push(6.0)
              }
            }
          }
        }
        for (let i = 0; i < positions.length; i++) {
          let pos = positions[i]
          let size = sizes[i]
          let bufferGeom = new THREE.BufferGeometry()
          let typedArr1 = new Float32Array(pos.positions.length)
          let typedArr2 = new Float32Array(size.sizes.length)
          for (let j = 0; j < pos.positions.length; j++) {
            typedArr1[j] = pos.positions[j]
          }
          for (let j = 0; j < size.sizes.length; j++) {
            typedArr2[j] = size.sizes[j]
          }
          bufferGeom.setAttribute('position', new THREE.BufferAttribute(typedArr1, 3))
          bufferGeom.setAttribute('size', new THREE.BufferAttribute(typedArr2, 1))
          bufferGeom.computeBoundingSphere()
          let particle = new THREE.Points(bufferGeom, materials[i])
          this.earthParticles.add(particle)
        }
        this.scene.add(this.earthParticles)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .pyramid
    width 800px
    height: 500px
</style>
