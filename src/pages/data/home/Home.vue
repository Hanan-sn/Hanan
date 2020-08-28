<template>
  <div class="home">
    Home<br>
    <router-link to="/overview">to overview</router-link><br>
    <router-link to="/summary">to summary</router-link><br>
    <router-link to="/public">to public</router-link><br>
    <router-link to="/union">to union</router-link><br>
    <router-link to="/map">to map</router-link><br>
    <div id='three' ref="earth" style='overflow: hidden; left: 0; top: 0; position: absolute;'></div>
  </div>
</template>
<script>
  import particles from 'particles.js'
  import * as THREE from 'three'
  /* eslint-disable */
  export default {
    name: 'Home',
    data(){
      return {
        scene: null,
        camera: null,
        renderer: null,
        clock: null,
        control: null
      }
    },
    mounted(){
      this.init()
    },
    methods:{
      init(){
        const CITY_RADIUS = 100,
          CITY_MARGIN = 1,
          BLINT_SPEED = 0.05,
          HEXAGON_RADIUS = 5,
          radius = 100
        let scene, camera, renderer, clock, control
        let earthImg, earthData, earthParticles = new THREE.Object3D(),
          cloud = new THREE.Object3D(),
          hexagon = new THREE.Object3D(),
          dotTexture = new THREE.TextureLoader().load('./dot.png'),
          coneImg = ['./lightray.jpg', './lightray_yellow.jpg'],
          hexagonColor = [0xffffff, 0xffff00]
        let options = {
          CITY_RADIUS: 100,
          CITY_MARGIN: 1,
          BLINT_SPEED: 0.05,
          HEXAGON_RADIUS: 5,
          radius: 100
        }
        this.main(options)
      },


      main(opts) {
        const {CITY_RADIUS,CITY_MARGIN,BLINT_SPEED,HEXAGON_RADIUS,radius } = opts
        let earthImg = document.createElement('img')
        earthImg.src = './earth.jpg'
        earthImg.onload = () => {
          // basic scene
          this.createBasicScene()
          // 光锥
          // createObjects()
          // 球面打点
          this.createEarthParticles()
          // 云层
          this.createCloudGrid()
          this.animate()
        }
      },

      createBasicScene() {
        let width = window.innerWidth,
          height = window.innerHeight
        scene = new THREE.Scene()
        camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000)
        camera.position.z = 500
        renderer = new THREE.WebGLRenderer()
        renderer.setSize(width, height)
        renderer.autoClearColor = new THREE.Color(1, 0, 0, 0)
        document.querySelector('#three').appendChild(renderer.domElement)
        clock = new THREE.Clock()
        control = new THREE.TrackballControls(camera)
        control.rotateSpeed = 1.0
        control.zoomSpeed = 1.0
        control.panSpeed = 1.0
        axes = new THREE.AxesHelper(CITY_RADIUS + 10)
        //scene.add(axes)

        window.addEventListener('resize', resize)
      },

      createObjects() {
        // 球面
        let sphereGeom = new THREE.SphereGeometry(CITY_RADIUS, 20, 20),
          sphereMat = new THREE.MeshBasicMaterial({
            color: 0x03d98e,
            wireframe: true
          })
        sphere = new THREE.Mesh(sphereGeom, sphereMat)
        //scene.add(sphere)
        // 地标及光锥
        for (let i = 0, length = countries.length; i < length; i++) {
          const position = createPosition(countries[i].position)
          const index = Math.floor(Math.random() * 2)
          createHexagon(position, index) // 地标
          createCone(position, index) // 光锥
        }
      },

      createHexagon(position, index) {
        const color = hexagonColor[index]
        let hexagonLine = new THREE.CircleGeometry(HEXAGON_RADIUS, 6)
        let hexagonPlane = new THREE.CircleGeometry(HEXAGON_RADIUS - CITY_MARGIN, 6)
        let vertices = hexagonLine.vertices
        vertices.shift() // 第一个节点是中心点
        let circleLineGeom = new THREE.Geometry()
        circleLineGeom.vertices = vertices
        let materialLine = new THREE.MeshBasicMaterial({
          color: color,
          side: THREE.DoubleSide
        })
        let materialPlane = new THREE.MeshBasicMaterial({
          color: color,
          side: THREE.DoubleSide,
          opacity: 0.5
        })
        let circleLine = new THREE.LineLoop(circleLineGeom, materialLine)
        let circlePlane = new THREE.Mesh(hexagonPlane, materialPlane)
        circleLine.position.copy(position)
        circlePlane.position.copy(position)
        circlePlane.lookAt(new THREE.Vector3(0, 0, 0))
        circleLine.lookAt(new THREE.Vector3(0, 0, 0))

        hexagon.add(circleLine)
        hexagon.add(circlePlane)
        scene.add(hexagon)
      },

      createCone(position, index) {
        let texture = new THREE.TextureLoader().load(coneImg[index]),
          material = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            depthTest: false,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending
          }),
          height = Math.random() * 50,
          geometry = new THREE.PlaneGeometry(HEXAGON_RADIUS * 2, height),
          matrix1 = new THREE.Matrix4,
          plane1 = new THREE.Mesh(geometry, material)
        matrix1.makeRotationX(Math.PI / 2)
        matrix1.setPosition(new THREE.Vector3(0, 0, height / -2))
        geometry.applyMatrix(matrix1)
        let plane2 = plane1.clone()
        plane2.rotation.z = Math.PI / 2
        plane1.add(plane2)
        plane1.position.copy(position)
        plane1.lookAt(0, 0, 0)
        scene.add(plane1)
      },

      createEarthParticles(options) {
        const {img} = options
        let positions = []
        let materials = []
        let sizes = []
        for (var i = 0; i < 2; i++) {
          positions[i] = {
            positions: []
          }
          sizes[i] = {
            sizes: []
          }
          mat = new THREE.PointsMaterial()
          mat.size = 5
          mat.color = new THREE.Color('#079cd1')
          mat.map = dotTexture
          mat.depthWrite = false
          mat.transparent = true
          mat.opacity = 0
          mat.side = THREE.FrontSide
          mat.blending = THREE.AdditiveBlending
          let n = i / 2
          mat.t_ = n * Math.PI * 2
          mat.speed_ = BLINT_SPEED
          mat.min_ = .2 * Math.random() + .5
          mat.delta_ = .1 * Math.random() + .1
          mat.opacity_coef_ = 1
          materials.push(mat)
        }
        var spherical = new THREE.Spherical
        spherical.radius = radius
        const step = 250
        for (let i = 0; i < step; i++) {
          let vec = new THREE.Vector3
          let radians = step * (1 - Math.sin(i / step * Math.PI)) / step + .5 // 每个纬线圈内的角度均分
          for (let j = 0; j < step; j += radians) {
            let c = j / step, // 底图上的横向百分比
              f = i / step, // 底图上的纵向百分比
              index = Math.floor(2 * Math.random())
            pos = positions[index]
            size = sizes[index]
            if (isLandByUV(img, c, f)) { // 根据横纵百分比判断在底图中的像素值
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
          let pos = positions[i],
            size = sizes[i],
            bufferGeom = new THREE.BufferGeometry,
            typedArr1 = new Float32Array(pos.positions.length),
            typedArr2 = new Float32Array(size.sizes.length)
          for (let j = 0; j < pos.positions.length; j++) {
            typedArr1[j] = pos.positions[j]
          }
          for (let j = 0; j < size.sizes.length; j++) {
            typedArr2[j] = size.sizes[j]
          }
          bufferGeom.addAttribute("position", new THREE.BufferAttribute(typedArr1, 3))
          bufferGeom.addAttribute('size', new THREE.BufferAttribute(typedArr2, 1))
          bufferGeom.computeBoundingSphere()
          let particle = new THREE.Points(bufferGeom, materials[i])
          earthParticles.add(particle)
        }
        scene.add(earthParticles)
      },

      createCloudGrid() {
        THREE.XRayMaterial = function(options) {
          let uniforms = {
            uTex: {
              type: "t",
              value: options.map || new THREE.Texture
            },
            offsetRepeat: {
              value: new THREE.Vector4(0, 0, 1, 1)
            },
            alphaProportion: {
              type: "1f",
              value: options.alphaProportion || .5
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
        let geometry = new THREE.SphereGeometry(1.2 * radius, 66, 44),
          map = new THREE.TextureLoader().load('./clouds.jpg')
        map.wrapT = THREE.ClampToEdgeWrapping
        map.wrapS = THREE.ClampToEdgeWrapping
        let material = new THREE.XRayMaterial({
            map: map,
            alphaProportion: .25,
            color: new THREE.Color('#079cd1'),
            opacity: 0,
            gridOffsetSpeed: .6
          }),
          mesh = new THREE.Mesh(geometry, material)
        mesh.matrixAutoUpdate = !1
        cloud.add(mesh)
        scene.add(cloud)
      },

      resize() {
        renderer.setSize(window.innerWidth, window.innerHeight)
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
      },

      render() {
        let delta = clock.getDelta()
        control.update(delta)
        renderer.render(scene, camera)
      },

      animate() {
        requestAnimationFrame(animate)
        // 球面粒子闪烁
        let objects = earthParticles.children
        objects.forEach(obj => {
          let material = obj.material
          material.t_ += material.speed_
          material.opacity = (Math.sin(material.t_) * material.delta_ + material.min_) * material.opacity_coef_
          material.needsUpdate = true
        })
        render()
      },

      createPosition(lnglat) {
        let spherical = new THREE.Spherical
        spherical.radius = radius
        const lng = lnglat[0]
        const lat = lnglat[1]
        // const phi = (180 - lng) * (Math.PI / 180)
        // const theta = (90 + lat) * (Math.PI / 180)
        const theta = (lng + 90) * (Math.PI / 180)
        const phi = (90 - lat) * (Math.PI / 180)
        spherical.phi = phi
        spherical.theta = theta
        let position = new THREE.Vector3()
        position.setFromSpherical(spherical)
        return position
      },

      isLandByUV(img,c, f) {
        let earthCanvas = document.createElement('canvas')
        let earthCtx = earthCanvas.getContext('2d')
        earthCanvas.width = img.width
        earthCanvas.height = img.height
        earthCtx.drawImage(img, 0, 0, img.width, img.height)
        let earthImgData = earthCtx.getImageData(0, 0, img.width, img.height)
        if (!earthImgData) { // 底图数据
          console.error('data error!')
        }
        let n = parseInt(img.width * c) // 根据横纵百分比计算图象坐标系中的坐标
        o = parseInt(img.height * f) // 根据横纵百分比计算图象坐标系中的坐标
        return 0 === earthImgData.data[4 * (o * earthImgData.width + n)] // 查找底图中对应像素点的rgba值并判断
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
