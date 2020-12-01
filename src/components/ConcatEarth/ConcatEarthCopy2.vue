<template>
  <!-- 渲染方法存在问题 -->
  <div>
    <canvas class="cvs" ref="cvs" width="400" height="400"></canvas>
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
        const near = 0.1
        const far = 10
        const canvas = this.$refs.cvs
        this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
        this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
        this.scene = new THREE.Scene()
        this.camera.position.z = 2.5
        this.camera.position.y = 2.5
        const geometry = new THREE.BoxGeometry()
        // const material = new THREE.MeshBasicMaterial( { color: 0xaaee88, wireframe: true } )

        const material = new THREE.MeshNormalMaterial({ })
        /* material.onBeforeCompile = function ( shader ) {
          shader.uniforms.time = { value: 0 };
          shader.vertexShader = 'uniform float time;\n' + shader.vertexShader;
          shader.vertexShader = shader.vertexShader.replace(
            '#include <begin_vertex>',
            [
              'float theta = sin( time + position.y ) / 2.0;',
              'float c = cos( theta );',
              'float s = sin( theta );',
              'mat3 m = mat3( c, 0, s, 0, 1, 0, -s, 0, c );',
              'vec3 transformed = vec3( position ) * m;',
              'vNormal = vNormal * m;'
            ].join( '\n' )
          );
          const materialShader = shader;
          materialShader.uniforms.time.value = performance.now() / 1000;
        }; */
        const cube = new THREE.Mesh(geometry, material)
        this.group = new THREE.Group()
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.enableDamping = true
        this.controls.enableKeys = true
        this.group.add(cube)
        this.scene.add(this.group)
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
