<template>
  <div class="overview" flex>
    <div ref="earth" id="earth" class="earth"></div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import * as THREE from 'three'
  export default {
    name: 'Overview',
    data() {
      return {
      }
    },
    components: {
      // Panel
    },
    created() {
    },
    mounted(){
      this.renderBall(this.$refs.earth)
    },
    computed: {
      ...mapState({
        a: state => state.overview.a
      })
    },
    watch: {
    },
    methods: {
      renderBall(dom){
        // 场景高宽
        const w = 600, h = 600
        // 相机参数
        const camera_deg = 45, aspect = w / h, near = 0.1, far = 10000
        // var container = document.getElementById('earth')
        const renderer = new THREE.WebGLRenderer({ alpha: true })
        const camera = new THREE.PerspectiveCamera(
          camera_deg, aspect, near, far
        )
        const scene = new THREE.Scene()
        scene.add(camera)
        camera.position.z = 200

        renderer.setSize(w, h)

        // 附加DOM元素
        dom.append(renderer.domElement)

        // 设置球体的值
        const radius = 50, segemnt = 60, rings = 60
        const earth_png = new THREE.TextureLoader().load('~@/assets/images/earth.png')
        const sphereMaterial = new THREE.MeshBasicMaterial({ map: earth_png })

        const sphere = new THREE.Mesh(
          new THREE.SphereGeometry(radius, segemnt, rings),
          sphereMaterial
        )

        sphere.geometry.verticesNeedUpdate = true
        sphere.geometry.normalsNeedUpdate = true

        scene.add(sphere)

        const pointLight = new THREE.PointLight(0X000000)

        pointLight.position.x = 10
        pointLight.position.y = 50
        pointLight.position.z = 150

        // scene.add(pointLight)
        function animate() {
          requestAnimationFrame(animate)
          // 画图
          // sphere.rotation.x += 0.1
          // 延Y轴旋转
          sphere.rotation.y += 0.01
          renderer.render(scene, camera)
        }
        animate()
      }
    }
  }
</script>

<style lang="stylus" scoped>
.earth
  width: 600px
  height: 600px
</style>
