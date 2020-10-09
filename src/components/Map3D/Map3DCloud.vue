<template>
  <div class="model-container" ref="modelContainer">

  </div>
</template>

<script>
  /* eslint-disable */
  import * as THREE from 'three'
  export default {
    name: 'Map3D',
    data() {
      return {
        scene: null,
        camera: null,
        renderer: null,
        clock: null,
        control: null,
        axes: null,
        earthParticles: null,
        options: {
          CITY_RADIUS: 100,
          CITY_MARGIN: 1,
          BLINT_SPEED: 0.05,
          HEXAGON_RADIUS: 5,
          radius: 100
        },
        animation: null
      }
    },
    /* created(){
      var cubeGeometry = new THREE.CubeGeometry(4,4,4);
      var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
      this.geo = new THREE.Mesh(cubeGeometry, cubeMaterial)
    }, */
    mounted() {
      this.main()
    },
    methods: {
      main() {
        const img = document.createElement('img')
        img.src = require('@/assets/images/map3d/earth.jpg')
        img.onload = () => {
          const cvs = document.createElement('canvas')
          const ctx = cvs.getContext('2d')
          cvs.width = img.width
          cvs.height = img.height
          ctx.drawImage(img, 0, 0, cvs.width, cvs.height)
          const imgData = ctx.getImageData(0, 0, cvs.width, cvs.height)
          this.createBasicScene() // 基本渲染容器
          this.createEarthParticles(img, imgData) // 渲染地球粒子
          this.createCloudGrid()
          this.animate()
        }
      },
      createCloudGrid() {
        const cloud = new THREE.Object3D()
        // 使用自定义材质，return ShaderMaterial
        THREE.XRayMaterial = function(options) {
          let uniforms = {
            uTex: {
              type: 't',
              value: options.map || new THREE.Texture()
            },
            offsetRepeat: {
              value: new THREE.Vector4(0, 0, 1, 1)
            },
            alphaProportion: {
              type: '1f',
              value: options.alphaProportion || 0.5
            },
            diffuse: {
              value: options.color || new THREE.Color(16777215)
            },
            opacity: {
              value: options.opacity || 1
            },
            gridOffset: {
              value: 0
            }
          }
          return new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: `
varying float _alpha;
varying vec2 vUv;
uniform vec4 offsetRepeat;
uniform float alphaProportion;
void main() {
gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
vUv = uv * offsetRepeat.zw + offsetRepeat.xy;
vec4 worldPosition = modelMatrix * vec4( vec3( position ), 1.0 );
vec3 cameraToVertex = normalize( cameraPosition - worldPosition.xyz);
_alpha = 1.0 - max( 0.0, dot( normal, cameraToVertex ) );
_alpha = max( 0.0, (_alpha - alphaProportion) / (1.0 - alphaProportion) );
}`,
            fragmentShader: `
uniform sampler2D uTex;
uniform vec3 diffuse;
uniform float opacity;
uniform float gridOffset;
varying float _alpha;
varying vec2 vUv;
void main() {
vec4 texColor = texture2D( uTex, vUv );
float _a = _alpha * opacity;
if( _a <= 0.0 ) discard;
_a = _a * ( sin( vUv.y * 2000.0 + gridOffset ) * .5 + .5 );
gl_FragColor = vec4( texColor.rgb * diffuse, _a );
}`,
            transparent: !0,
            blending: THREE.AdditiveBlending,
            depthTest: !1
          })
        }
        let geometry = new THREE.SphereGeometry(1.2 * this.options.radius, 66, 44)
        let map = new THREE.TextureLoader().load(require('@/assets/images/map3d/clouds.jpg'))
        map.wrapT = THREE.ClampToEdgeWrapping
        map.wrapS = THREE.ClampToEdgeWrapping
        let material = new THREE.XRayMaterial({
            map: map,
            alphaProportion: 0.05,
            color: new THREE.Color('#079cd1'),
            opacity: 0,
            gridOffsetSpeed: 0.6
          })
          let mesh = new THREE.Mesh(geometry, material)
        mesh.matrixAutoUpdate = !1
        cloud.add(mesh)
        this.scene.add(cloud)
      },
      createBasicScene() {
        let _self = this
        /* this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(45, offsetWidth / offsetHeight, 0.1, 10000)
        this.camera.position.z = 500
        this.renderer = new THREE.WebGLRenderer() */
        let width = this.$refs.modelContainer.offsetWidth
        let height = this.$refs.modelContainer.offsetHeight
        _self.scene = new THREE.Scene()
        _self.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000)
        _self.camera.position.z = 350
        _self.renderer = new THREE.WebGLRenderer({ alpha: true })
        _self.renderer.setSize(width, height)
        _self.renderer.setClearColor(0xEEEEEE, 0.0)
        _self.renderer.autoClearColor = new THREE.Color(1, 0, 0, 0)
        _self.$refs.modelContainer.appendChild(this.renderer.domElement)
        _self.clock = new THREE.Clock()
        // control = new THREE.TrackballControls(camera)
        // control.rotateSpeed = 1.0
        // control.zoomSpeed = 1.0
        // control.panSpeed = 1.0
        _self.axes = new THREE.AxesHelper(this.options.CITY_RADIUS + 10)
        // scene.add(axes)
        _self.earthParticles = new THREE.Object3D()
        // window.addEventListener('resize', _self.resize(width, height))
      },
      /* resize(w, h) {
        this.renderer.setSize(w, h)
        this.camera.aspect = w / h
        this.camera.updateProjectionMatrix()
      }, */
      isLandByUV(img, imgData, c, f) {
        if (!imgData) { // 底图数据
          console.error('data error!')
        }
        let n = parseInt(img.width * c) // 根据横纵百分比计算图象坐标系中的坐标
        let o = parseInt(img.height * f) // 根据横纵百分比计算图象坐标系中的坐标
        return imgData.data[4 * (o * imgData.width + n)] === 0 // 查找底图中对应像素点的rgba值并判断
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
          let img = require('@/assets/images/map3d/dot.png')
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
      },
      render() {
        let delta = this.clock.getDelta()
        // control.update(delta)
        this.renderer.render(this.scene, this.camera)
      },
      animate() {
        requestAnimationFrame(this.animate)
        // 球面粒子闪烁
        let objects = this.earthParticles.children
        objects.forEach(obj => {
          let material = obj.material
          material.t_ += material.speed_
          material.opacity = (Math.sin(material.t_) * material.delta_ + material.min_) * material.opacity_coef_
          material.needsUpdate = true
        })
        this.scene.rotation.y += 0.01
        this.render()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .model-container
    width: 800px
    height: 800px
    position relative
    left: 50%
    top: 50%
    transform translate(-50%, -50%)
    >*
      position absolute
      left: 50%
      top: 50%
      transform translate(-50%, -50%)
</style>
