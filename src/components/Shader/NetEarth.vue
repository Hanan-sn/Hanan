<template>
  <div class="net-earth" ref="container"></div>
</template>

<script>
  import * as THREE from 'three'

  export default {
    name: 'NetEarth',
    data() {
      return {
        renderer: null,
        camera: null,
        scene: null,
        animation: null,
        time: 0,
        stats: null,
        mesh: null,
        group: null,
        sys: null,
        uniforms: {
          color: { value: new THREE.Color(0xffffff) },
          pointTexture: { value: new THREE.TextureLoader().load(require('./spark1.png')) },
          // resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
          iTime: { type: 'f', value: 4 }
          // iResolution: { type: 'v2', value: new THREE.Vector3(100, 100, 1) }
          // iMouse: { type: 'v2', value: new THREE.Vector2() }
        }
      }
    },
    mounted() {
      // this.stats = new Stats()
      // this.stats.domElement.style.position = 'absolute'
      // this.stats.domElement.style.top = '0px'
      // this.stats.domElement.style.zIndex = 100
      // this.$refs.container.appendChild(this.stats.domElement)
      this.render()
    },
    beforeDestroy() {
      cancelAnimationFrame(this.animation)
      this.animation = null
    },
    methods: {
      animate() {
        const animate = () => {
          // this.stats.update()
          this.animation = requestAnimationFrame(animate)
          this.sys.rotation.x += 0.001
          this.sys.rotation.y += 0.001
          this.renderer.render(this.scene, this.camera)
        }
        animate()
      },
      render() {
        const vertexShader = `
          attribute float size;
          attribute vec3 customColor;
          varying vec3 vColor;
          uniform float iTime;
          void main() {
            vColor = customColor;
            vec4 mvPosition = modelViewMatrix * vec4( position, 1 );
            gl_PointSize = size * ( 500.0 / -mvPosition.z );
            gl_Position = projectionMatrix * mvPosition;
          }
        `
        const fragmentShader = `
          uniform vec3 color;
          uniform sampler2D pointTexture;
          varying vec3 vColor;
          void main() {
          gl_FragColor = vec4( color * vColor, 4 );
          gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );
          }
        `
        /* const shaderToy = new THREE.ShaderMaterial({
          uniforms: {
            color: { value: new THREE.Color( 0xffffff ) },
            pointTexture: { value: new THREE.TextureLoader().load( "textures/sprites/disc.png" ) }
          },
          vertexShader,
          fragmentShader,
          alphaTest: 0.9
        }) */
        const material = new THREE.ShaderMaterial({
          uniforms: this.uniforms,
          vertexShader,
          fragmentShader,
          alphaTest: 0.9,
          blending: THREE.AdditiveBlending,
          depthTest: false,
          transparent: true
        })
        const amount = 1000
        const radius = 200
        const vertices = new THREE.BoxGeometry(200, 200, 200, 16, 16, 16).vertices
        const positions = new Float32Array(vertices.length * 3)
        const colors = new Float32Array(vertices.length * 3)
        const sizes = new Float32Array(vertices.length)
        const color = new THREE.Color()
        const vertex = new THREE.Vector3()
        for (let i = 0; i < amount; i++) {
          vertex.x = (Math.random() * 2 - 1) * radius
          vertex.y = (Math.random() * 2 - 1) * radius
          vertex.z = (Math.random() * 2 - 1) * radius
          vertex.toArray(positions, i * 3)
          color.setHSL(0.5 + 0.1 * (i / amount), 0.7 * this.uniforms.iTime.value, 0.5)
          color.toArray(colors, i * 3)
          sizes[ i ] = 10
        }
        const geo = new THREE.BufferGeometry()
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geo.setAttribute('customColor', new THREE.BufferAttribute(colors, 3))
        geo.setAttribute('size', new THREE.BufferAttribute(sizes, 4))
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000)
        this.camera.position.z = 250
        this.renderer = new THREE.WebGLRenderer({ alpha: true })
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.$refs.container.appendChild(this.renderer.domElement)
        this.sys = new THREE.Points(geo, material)
        this.scene.add(this.sys)

        const light = new THREE.AmbientLight(0x404040) // soft white light
        this.scene.add(light)
        this.scene.add(this.sys)
        this.animate()
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .shader-test
    width: 100%
    height: 100%
</style>
