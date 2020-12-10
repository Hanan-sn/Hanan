<template>
  <div class="shader-test" ref="con"></div>
</template>

<script>
  import * as THREE from 'three'
  import Stats from 'three/examples/jsm/libs/stats.module'
  export default {
    name: 'ShaderInThree',
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
          } }
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
        // var camera = this.camera, scene = this.scene, renderer = this.renderer;
        // var uniforms = this.uniforms;
        init()
        // animate();
        function init() {
          self.camera = new THREE.Camera()
          self.camera.position.z = 1
          self.scene = new THREE.Scene()
          var geometry = new THREE.PlaneBufferGeometry(2, 2)
          // var imouse =
          // window.addEventListener("touchmove", function(evt) {
          //   imouse.x = evt["touches"][0].clientX;
          //   imouse.y = evt["touches"][0].clientY;
          // })
          // self.uniforms =

          var material = new THREE.ShaderMaterial({
            uniforms: self.uniforms,
            vertexShader: 'void main() { gl_Position = vec4( position, 1.0 ); }',
            fragmentShader: 'uniform float iTime;\n' +
              '    uniform vec2 iResolution;\n' +
              '    float t=iTime;\n' +
              '    vec2 r=iResolution.xy;\n' +
              '    void main() {\n' +
              '       vec3 c;\n' +
              '        float l,z=t;\n' +
              '        for(int i=0;i<3;i++) {\n' +
              '           vec2 uv,p=gl_FragCoord.xy/r;\n' +
              '          uv=p; p-=.5; p.x*=r.x/r.y;\n' +
              '          z+=.07;\n' +
              '          l=length(p);\n' +
              '          uv+=p/l*(sin(z)+1.)*abs(sin(l*9.-z*2.));\n' +
              '          c[i]=.01/length(abs(mod(uv,1.)-.5));\n' +
              '        }\n' +
              '        gl_FragColor=vec4(c/l,t); } '
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
        this.uniforms.iTime.value += 0.05
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
