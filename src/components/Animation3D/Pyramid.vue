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
        this.scene.fog = new THREE.Fog(0x000000, 100, 120)
        this.camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000)
        this.group = new THREE.Group()
        this.renderer = new THREE.WebGLRenderer({ alpha: true })
        // this.renderer = new THREE.WebGLRenderer({alpha: true})
        this.renderer.setSize(w, h)
        this.$refs.pyramid.appendChild(this.renderer.domElement)

        let material = new THREE.MeshPhongMaterial({
          color,
          opacity: 0.8,
          specular: '#2477f1', // 高光部分的颜色
          shininess: 10// 高光部分的亮度，默认30
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
        spotLight.position.set(-5, 5, 5)
        spotLight.castShadow = true
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
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .pyramid
    width 800px
    height: 500px
</style>
