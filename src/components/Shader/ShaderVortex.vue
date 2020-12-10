<template>
  <div class="shader-test" ref="con"></div>
</template>

<script>
  import * as THREE from 'three'
  import Stats from 'three/examples/jsm/libs/stats.module'

  export default {
    name: 'ShaderVortex',
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
float s = sin(a), c = cos(a);
    return mat2(c, -s, s, c);
}

float Square(vec2 uv, float size) {
vec2 s = abs(uv) - vec2(size);
    float square = length(max(s, 0.0));
    square = smoothstep(0.001, 0.0, square);
    return square;
}

uniform vec2 iResolution;
uniform float iTime;
void main()
{
    vec2 uv = (gl_FragCoord.xy - 0.5*iResolution.xy)/iResolution.y;
    vec3 col = vec3(1.06);
    float t = sin(4.0 + (sin(iTime) * 0.2 + 0.2));
    uv *= 0.35;
    uv *= Rot(sin(iTime*0.5));

    for(float i=0.0; i<20.5; i+=0.1) {
    uv *= Rot(0.049);
        float size = 0.01 * i;
        col.bg -= i * 0.0001;
        float strength = 0.0037;
        col -= Square(uv, size) * strength;
    }
    col *= col*2.0;
    float d = length(uv);
    vec2 fs = vec2(0.0, 0.47);
    float focus = smoothstep(fs.x, fs.y, d);
    col += focus;
    col += smoothstep(0.05, 0.00, d)*0.05;
    col.g += smoothstep(0.06, 0.3, d);
    col.r -= smoothstep(0.06, 0.3, d);
    col = clamp(col, 0.0, 1.0);
    col -= vec3(.22, 1.0, 1.0);
    col.b = col.r*0.3;
    gl_FragColor = vec4(col,1.0);
}
`
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
