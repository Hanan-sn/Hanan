<template>
  <div class="shader-test" ref="con"></div>
</template>

<script>
  import * as THREE from 'three'
  import Stats from 'three/examples/jsm/libs/stats.module'

  export default {
    name: 'ShaderAnnulus',
    data() {
      return {
        camera: null,
        scene: null,
        renderer: null,
        uniforms: {
          resolution: {
            value: new THREE.Vector2(window.innerWidth, window.innerHeight)
          },
          iTime: {
            type: 'f',
            value: 1.0
          },
          iResolution: {
            type: 'v2',
            value: new THREE.Vector2()
          },
          iMouse: {
            type: 'v2',
            value: new THREE.Vector2()
          }
        }
      }
    },
    mounted() {
      this.initBg()
      this.animate()
    },
    methods: {
      initBg() {
        var container = this.$refs.con
        var self = this
        init()
        function init() {
          self.camera = new THREE.Camera()
          self.camera.position.z = 1
          self.scene = new THREE.Scene()
          var geometry = new THREE.PlaneBufferGeometry(4, 4)
          var material = new THREE.ShaderMaterial({
            uniforms: self.uniforms,
            vertexShader: 'void main() { gl_Position = vec4( position, 1.0 ); }',
            fragmentShader: `
mat2 Rot(float a) {
float s=sin(a), c=cos(a);
return mat2(c, -s, s, c);
}
uniform vec2 iResolution;
uniform float iTime;
void main()
{
vec2 uv = (gl_FragCoord.xy - 0.5*iResolution.xy)/iResolution.y;
float aa = 1.5 / iResolution.y;
// deformation
uv *= 2.0;
uv = uv * Rot(iTime*0.1);
uv.x += atan(0.07, uv.y*uv.y*(sin(iTime*0.5)*0.2+0.2))*0.4;
uv /= atan(4.0, 4.0*iTime) + 2.0;
uv *= Rot(iTime*0.2);
uv.x *= uv.x;
float d = length(uv+0.14);
vec3 col = vec3(0.2, 0, 0.4);
//circles
float c1 = smoothstep(0.2, 0.2+aa, d);
float c2 = smoothstep(0.1, 0.1+aa, d);
float circle = mix(c1, c2, 0.87);
col.rb += circle*0.9;
c1 = smoothstep(0.3, 0.3+aa, d);
c2 = smoothstep(0.4, 0.4+aa, d);
circle = mix(c1, c2, 0.5);
col.r += circle*0.1;
c1 = smoothstep(0.5, 0.5+aa, d);
c2 = smoothstep(0.6, 0.6+aa, d);
circle = mix(c1, c2, 0.5);
col.rg -= circle;
c1 = smoothstep(0.8, 0.8+aa, d);
c2 = smoothstep(1.0, 1.0+aa, d);
circle = mix(c1, c2, 0.5);
col.r += circle;
c1 = smoothstep(1.2, 1.2+aa, d);
c2 = smoothstep(1.4, 1.4+aa, d);
circle = mix(c1, c2, 0.5);
col.g -= circle;
c1 = smoothstep(1.8, 1.8+aa, d);
c2 = smoothstep(2.5, 2.5+aa, d);
circle = mix(c1, c2, 0.5);
col.r += circle;
// color adjustment
col.b = col.b - col.r *0.8;
col.g = col.b * 0.13;
col.r = col.g * 1.2;
col+=0.04;
gl_FragColor=vec4(col,1.0);
}`
          })

          var mesh = new THREE.Mesh(geometry, material)
          self.scene.add(mesh)
          self.renderer = new THREE.WebGLRenderer()
          self.renderer.setPixelRatio(window.devicePixelRatio)
          container.appendChild(self.renderer.domElement)
          onWindowResize()
          window.addEventListener('resize', onWindowResize, false)
        }

        function onWindowResize(event) {
          self.renderer.setSize(window.innerWidth, window.innerHeight)
          self.uniforms.iResolution.value.x = self.renderer.domElement.width
          self.uniforms.iResolution.value.y = self.renderer.domElement.height
        }
      },

      animate() {
        requestAnimationFrame(this.animate)
        this.render()
      },

      render() {
        this.uniforms.iTime.value += 0.01
        this.renderer.render(this.scene, this.camera)
      }
    }
  }
</script>

<style lang="stylus" scoped>
.shader-test
  width: 100%
  height: 100%
</style>
