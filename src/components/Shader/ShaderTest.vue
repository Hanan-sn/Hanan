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
float circle(vec2 st,float radius){
    float d=length(st-.5);
    return smoothstep(radius,radius-.01,d);

}

// change pattern variable to get different patterns
float generator (vec2 cell,float mult) {
    float pattern;
    pattern=mult*(sin(cell.x*iTime/7.)+sin(cell.y*iTime/7.));
    return fract(pattern);
}

void main() {
    varying vec2 vUv;
    uniform vec3 iResolution;
    uniform float iTime;
    vec2 uv = gl_FragCoord.xy/iResolution.xy;
    uv.x*=iResolution.x/iResolution.y;
    float multiplier=0.8754;
    float Ncircles=12.;
    uv *= Ncircles;
    vec2 posInt = floor(uv)+1.;  //(i,j) integerr coordinates
    vec2 posFloat = fract(uv); //(u,v) decimal cell coordinates
    vec3 color =generator(posInt,multiplier) *vec3(1.,.5+.5*cos(iTime),.5+.5*sin(iTime));
    color*=circle(posFloat,.5);
    gl_FragColor = vec4(color,1.0);
}
`
        var uniforms = {
          iTime: { value: 0 },
          iResolution: { value: new THREE.Vector3(100, 100, 1) }
        }
        var shadertoy = new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader,
          uniforms,
          side: 2
        })
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.z = 5
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        this.$refs.container.appendChild(renderer.domElement)
        const box = new THREE.Mesh(
          new THREE.PlaneBufferGeometry(2, 2),
          shadertoy
        )
        scene.add(box)
        renderer.render(scene, camera)
        const animate = () => {
          requestAnimationFrame(animate)
          // box.rotation.x += 0.01
          // box.rotation.y += 0.01
          uniforms.iTime.value += 0.01
          renderer.render(scene, camera)
        }
        // animate()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .shader-test
    width: 100%
    height: 100%
</style>
