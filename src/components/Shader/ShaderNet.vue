<template>
  <div class="shader-test" ref="con"></div>
</template>

<script>
  import * as THREE from 'three'
  import Stats from 'three/examples/jsm/libs/stats.module'

  export default {
    name: 'ShaderNet',
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
uniform vec2 iResolution;
uniform float iTime;
uniform float iMouse;

#define formuparam 0.53

#define stepsize 0.1

#define zoom   0.800
#define tile   0.850
#define speed  0.010

#define brightness 0.0015
#define darkmatter 0.300
#define distfading 0.730
#define saturation 0.850

void main()
{
vec2 uv=gl_FragCoord.xy/iResolution.xy-.5;
uv.y*=iResolution.y/iResolution.x;
vec3 dir=vec3(uv*zoom,1.);
float time=iTime*speed+.25;
vec3 from=vec3(1.,.5,0.5);
from+=vec3(time*2.,time,-2.);
float s=0.1,fade=1.;
vec3 v=vec3(0.);
for (int r=0; r<20; r++) {
vec3 p=from+s*dir*.5;
p = abs(vec3(tile)-mod(p,vec3(tile*2.)));
float pa,a=pa=0.;
for (int i=0; i<17; i++) {
p=abs(p)/dot(p,p)-formuparam;
a+=abs(length(p)-pa);
pa=length(p);
}
float dm=max(0.,darkmatter-a*a*.001);
a*=a*a;
if (r>6) fade*=1.-dm;
//v+=vec3(dm,dm*.5,0.);
v+=fade;
v+=vec3(s,s*s,s*s*s*s)*a*brightness*fade;
fade*=distfading;
s+=stepsize;
}
  v=mix(vec3(length(v)),v,saturation);
  gl_FragColor = vec4(v*.01,1.);
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
