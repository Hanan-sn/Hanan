<template>
  <div class="shader-test" ref="container"></div>
</template>

<script>
  import * as THREE from 'three'
  import Stats from 'three/examples/jsm/libs/stats.module'
  export default {
    name: 'ShaderUnion',
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
        uniforms: {
          resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
          time: { type: 'f', value: 0 },
          iResolution: { type: 'v2', value: new THREE.Vector3(100, 100, 1) },
          iMouse: { type: 'v2', value: new THREE.Vector2() }
        }
      }
    },
    mounted() {
      this.stats = new Stats()
      this.stats.domElement.style.position = 'absolute'
      this.stats.domElement.style.top = '0px'
      this.stats.domElement.style.zIndex = 100
      this.$refs.container.appendChild(this.stats.domElement)
      this.render()
    },
    beforeDestroy() {
      cancelAnimationFrame(this.animation)
      this.animation = null
    },
    methods: {
      animate() {
        const animate = () => {
          this.stats.update()
          this.animation = requestAnimationFrame(animate)
          // this.mesh.rotation.x += 0.01
          // this.mesh.rotation.y += 0.01
          this.uniforms.time.value += 0.005
          this.renderer.render(this.scene, this.camera)
        }
         animate()
      },
      render() {
        const vertexShader = `
          varying vec3 vVertexWorldPosition;
          varying vec3 vVertexNormal;
          varying vec4 vFragColor;
          void main(){
            // vVertexNormal= normalize(normalMatrix * normal);//将法线转换到视图坐标系中
            // vVertexWorldPosition= (modelMatrix * vec4(position, 1.0)).xyz;//将顶点转换到世界坐标系中
            // set gl_Position
            gl_Position= projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `
        const shaderString11 = `
          precision mediump float;
          uniform float time; // time
          uniform vec2 resolution; // resolution
          void main(void){
            vec3 destColor = vec3(1, 1, 0.5);
            vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y); // 正規化
            // float l = 0.3 / abs(length(p) - 0.5);
            float l = 0.01 / abs(length(p*tan(time)) - 0.74);
            //l += 0.3 / abs(length(p) - 0.1);
            gl_FragColor = vec4(l/destColor, 4.1);
          }
        `
        const shaderToy = new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader: shaderString11,
          transparent: true,
          uniforms: this.uniforms,
          side: THREE.DoubleSide
        })
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.camera.position.z = 2
        this.renderer = new THREE.WebGLRenderer({ alpha: true })
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.$refs.container.appendChild(this.renderer.domElement)
        this.mesh = new THREE.Mesh(
          new THREE.PlaneGeometry(6, 4),
          // new THREE.BoxBufferGeometry(2, 2, 2),
          shaderToy
        )
        const light = new THREE.AmbientLight(0x404040) // soft white light
        this.scene.add(light)
        this.scene.add(this.mesh)
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
