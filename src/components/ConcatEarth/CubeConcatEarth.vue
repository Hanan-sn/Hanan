<template>
  <!-- 渲染方法存在问题 -->
  <div>
    <canvas class="cvs" ref="cvs" width="1200" height="800"></canvas>
  </div>
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
        group: null,
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
      init() {
        const fov = 60
        const aspect = 1
        const near = 1
        const far = 3000
        let ww = window.innerWidth
          let wh = window.innerHeight
        const canvas = this.$refs.cvs
        this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
        this.camera = new THREE.PerspectiveCamera(fov, ww / wh, near, far)
        this.scene = new THREE.Scene()
        this.scene.fog = new THREE.Fog(0x050505, 2500, 3500)
        this.camera.position.z = 3000

        const light = new THREE.DirectionalLight(0xffffff, 0.5)
        light.position.set(1, 1, 1)
        this.scene.add(light)

        const geometry = new THREE.BufferGeometry()
        // const material = new THREE.MeshBasicMaterial( { color: 0xaaee88, wireframe: true } )
        const triangles = 10000
        const positions = new Float32Array(triangles * 3 * 3)
        const normals = new Float32Array(triangles * 3 * 3)
        const colors = new Float32Array(triangles * 3 * 3)
        const color = new THREE.Color()
        // n: cube边长
        let n = 800; let n2 = n / 2
        // d: 每个三角形的各点距原点偏移最大值
        let d = 12; let d2 = d / 2
        // 三角形向量
        let pA = new THREE.Vector3()
        let pB = new THREE.Vector3()
        let pC = new THREE.Vector3()

        let cb = new THREE.Vector3()
        let ab = new THREE.Vector3()
        // 遍历所有点, i 每次 +9 保证每次循环操作一个点
        for (let i = 0; i < positions.length; i += 9) {
          // 每一个点的原点位置, xyz 都在 -400 ~ 400 之间, 生成的点一定在边长为 800 的立方体内
          let x = Math.random() * n - n2 // 随机 -400 ~ 400 的值
          let y = Math.random() * n - n2 // 随机 -400 ~ 400 的值
          let z = Math.random() * n - n2 // 随机 -400 ~ 400 的值
          /**
           * Math.random() * d 为 0 ~ 12, -d2 即为 -6 ~ 6，即三角形顶点 x 在原点基础上 -6 或 +6
           */
          // 每一个点(小三角形)的点a 的 xyz, 因为随机, 所有每一个小三角形大小不一样, 只控制了最大值
          let ax = x + Math.random() * d - d2
          let ay = y + Math.random() * d - d2
          let az = z + Math.random() * d - d2

          let bx = x + Math.random() * d - d2
          let by = y + Math.random() * d - d2
          let bz = z + Math.random() * d - d2

          let cx = x + Math.random() * d - d2
          let cy = y + Math.random() * d - d2
          let cz = z + Math.random() * d - d2

          // 小三角形点a坐标占 index 0-2
          positions[i] = ax
          positions[i + 1] = ay
          positions[i + 2] = az
          // 小三角形点b坐标占 index 3-5
          positions[i + 3] = bx
          positions[i + 4] = by
          positions[i + 5] = bz
          // 小三角形点c坐标占 index 6-8
          positions[i + 6] = cx
          positions[i + 7] = cy
          positions[i + 8] = cz
          // 设置三角形的三个顶点
          pA.set(ax, ay, az)
          pB.set(bx, by, bz)
          pC.set(cx, cy, cz)
          // pC pB向量相减（三角形一条边）
          cb.subVectors(pC, pB)
          // A B向量相减（三角形一条边）
          ab.subVectors(pA, pB)
          // cb ab 向量积, 即同时垂直上面两条边的向量，即法向量
          cb.cross(ab)
          // 将法向量转为单位向量
          cb.normalize()
          // 法向量的方向可以这样表示N(nx, ny, nz);
          let nx = cb.x
          let ny = cb.y
          let nz = cb.z

          // 0-8 循环法向量 xyz
          normals[i] = nx
          normals[i + 1] = ny
          normals[i + 2] = nz

          normals[i + 3] = nx
          normals[i + 4] = ny
          normals[i + 5] = nz

          normals[i + 6] = nx
          normals[i + 7] = ny
          normals[i + 8] = nz

          // 颜色用rgb表示, rgb每一个分量取值范围0-1,vx,vy,vz分别对应rgb值。
          /**
           * x 点的 x 值, -400-400，立方体边长为 800, 所以 vx 为 -0.5 ~ 0.5，+0.5 后范围为 0 ~ 1
           * 通过这样的计算, 相同的 xyz 颜色相同, 相近的 xyz 颜色相近
           */
          let vx = (x / n) + 0.5
          let vy = (y / n) + 0.5
          let vz = (z / n) + 0.5

          // color 存该点的颜色
          color.setRGB(vx, vy, vz)

          // 将三角形的三个顶点设为同样的颜色
          colors[i] = color.r
          colors[i + 1] = color.g
          colors[i + 2] = color.b

          colors[i + 3] = color.r
          colors[i + 4] = color.g
          colors[i + 5] = color.b

          colors[i + 6] = color.r
          colors[i + 7] = color.g
          colors[i + 8] = color.b
        }
        // 设置原点, 三角形, 颜色
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3))
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
        // 计算外边界球
        geometry.computeBoundingSphere()

        // 创建立方体材质
        let material = new THREE.MeshPhongMaterial({
          color: '#00ccff',
          specular: '#ffffff',
          shininess: 150,
          side: THREE.DoubleSide,
          vertexColors: THREE.VertexColors
        })
        // 创建立方体物体并添加到场景
        let mesh = new THREE.Mesh(geometry, material)
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.enableDamping = true
        this.controls.enableKeys = true
        this.scene.add(mesh)
        this.renderer.render(this.scene, this.camera)
        this.animate()
      },
      animate() {
        requestAnimationFrame(this.animate)
        this.controls.update()
        this.renderer.render(this.scene, this.camera)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .cvs:focus
    outline none
</style>
