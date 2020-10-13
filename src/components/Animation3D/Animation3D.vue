<template>
  <div class="animation-container">
    <div class="cube" ref="cube"></div>
  </div>
</template>

<script>
  import * as THREE from 'three'
  export default {
    name: 'Animation3D',

    mounted() {
      this.renderCube()
    },
    methods: {
      renderCube() {
        const { offsetWidth, offsetHeight } = this.$refs.cube
        let scene = new THREE.Scene()
        scene.fog = new THREE.Fog('#031627', 1, 500)
        let camera = new THREE.PerspectiveCamera(750, offsetWidth / offsetHeight, 0.1, 1000)
        let renderer = new THREE.WebGLRenderer({ alpha: true })
        renderer.setSize(offsetWidth, offsetHeight)
        let light = new THREE.AmbientLight(0x404040) // soft white light
        let geometry = new THREE.BoxGeometry(40, 40, 40)
        let loader = new THREE.TextureLoader()
        let texture = loader.load(require('@/assets/images/cube_bg.png'))
        let material = [
          new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true }),
          new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true }),
          new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true }),
          new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true }),
          new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true }),
          new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true })
        ]
        let cube = new THREE.Mesh(geometry, material)
        camera.position.z = 120
        let group = new THREE.Group()
        let points = []
        points.push(new THREE.Vector3(-20, -20, 0))
        points.push(new THREE.Vector3(20, -20, 0))
        points.push(new THREE.Vector3(20, -15, 0))
        // let sphere = new THREE.SphereBufferGeometry(5, 5, 5)
        // let line = new THREE.Line( lineGeometry, lineMaterial );

        let reLineGeo = (arr) => {
          let points = []
          arr.forEach(item => { points.push(new THREE.Vector3(item[0], item[1], item[2])) })
          let lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
          let lineMaterial = new THREE.LineBasicMaterial({
            color: '#41fae8'
          })
          return new THREE.Line(lineGeometry, lineMaterial)
        }
        let line1 = reLineGeo([[ 0, -10, 0 ], [20, -10, 0], [20, 15, 0], [20, 15, 5], [20, 0, 5], [-20, 0, 5], [-20, 15, 5], [-10, 15, 5], [-10, 15, 15]])
        let line2 = reLineGeo([[ -10, -20, 0 ], [20, -20, 0], [20, -15, 0]])
        let line3 = reLineGeo([[ -20, 20, 20 ], [20, 20, 20], [20, 20, -20], [-20, 20, -20], [-20, -20, -20], [20, -20, -20], [20, -20, 20], [-20, -20, 20], [-20, -20, -20], [-20, -20, 20], [-20, 20, 20], [-20, 20, 20], [20, 20, 20], [20, -20, 20], [20, -20, -20], [20, 20, -20], [-20, 20, -20], [-20, 20, 20]])

        // console.log(sphere)
        // sphere.morphTargetsRelative = true
        // sphere.morphTargets.push(...[new THREE.SphereBufferGeometry  (8, 5, 5),new THREE.SphereBufferGeometry  (5, 5, 5),new THREE.SphereBufferGeometry  (8, 5, 5),new THREE.SphereBufferGeometry  (5, 5, 5)])

        let pointLoader = new THREE.TextureLoader()
        let pointTexture = pointLoader.load(require('@/assets/images/light-point.png'))
        let pointMaterial = new THREE.PointsMaterial({
          size: 4,
          color: 0xffffff,
          map: pointTexture
        })
        // point.vertices.push(new THREE.Vector3(1, 1, 0))
        let cloud1 = new THREE.Points(line1.geometry, pointMaterial)
        let cloud2 = new THREE.Points(line2.geometry, pointMaterial)

        // var torusGeometry = new THREE.TorusGeometry( 60, 10, 16, 80 );
        // var torusMaterial = new THREE.MeshBasicMaterial( { color: "#1d3a37", wireframe: true, opacity: 0.4 } );
        // var torus = new THREE.Mesh( torusGeometry, torusMaterial );
        // torus.position.z = -100
        // torus.position.y = -40
        // torus.rotation.x = -1.5
        // scene.add( torus );

        group.add(cube)
        group.add(line1)
        group.add(line2)
        group.add(line3)
        group.add(cloud1)
        group.add(cloud2)
        scene.add(light)
        scene.add(group)
        group.rotation.y = -15
        let animate = function () {
          requestAnimationFrame(animate)
          group.rotation.y += 0.01
          renderer.render(scene, camera)
        }
        animate()
        renderer.render(scene, camera)
        this.$refs.cube.appendChild(renderer.domElement)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .cube
    display block
    height 320px
    width 400px
    margin: 40px auto
</style>
