<template>
  <div class="shader-test" ref="container"></div>
</template>

<script>
  import * as THREE from 'three'

  export default {
    name: 'ShaderTest',
    mounted() {
      this.render()
    },
    methods: {
      render() {
        var vertexShader = `
          varying vec2 vUv;
          void main(){
             vUv = uv;
             gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `
        var fragmentShader = `
          varying vec2 vUv;
          uniform float iTime;
          uniform vec3 iResolution;
          uniform float ratio;
          void main(){
            vec3 col = 0.5 + 0.5*cos(iTime+vUv.xyx+vec3(0,2,4));
            gl_FragColor = vec4(col,0.4);
          }
        `
        var uniforms = {
          iTime: { value: 0 },
          iResolution: { value: new THREE.Vector3(100, 100, 1) }
        }
        var shadertoy = new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader: fragmentShader,
          transparent: true,
          uniforms,
          side: 2
        })
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.z = 5
        const renderer = new THREE.WebGLRenderer({ alpha: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        this.$refs.container.appendChild(renderer.domElement)
        const box = new THREE.Mesh(
          // new THREE.PlaneBufferGeometry(2, 2),
          new THREE.BoxBufferGeometry(2, 2, 2),
          shadertoy
        )
        scene.add(box)
        renderer.render(scene, camera)
        const animate = () => {
          requestAnimationFrame(animate)
          box.rotation.x += 0.01
          box.rotation.y += 0.01
          uniforms.iTime.value += 0.01
          renderer.render(scene, camera)
        }
        animate()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .shader-test
    width: 100%
    height: 100%
</style>
