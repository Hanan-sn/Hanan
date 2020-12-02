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
const int n = 800;
const float rate = 7.;
const float lineThickness = 2.2;
const float colours = 0.05; // proportion of cells to colour in
const bool zoom = true;
const float phi = 1.6180339887498948;
const float tau = 6.2831853071795865;
varying vec2 vUv;
uniform vec3 iResolution;
uniform float iTime;
void main(){
   vec2 uv = vUv-0.5;
   float penOut = lineThickness/iResolution.y;
   float penIn = (lineThickness-2.8)/iResolution.y;
   float t = iTime*rate;
   gl_FragColor = vec4(0,0,0,1);
   float scale = sqrt(float(n));
   if ( zoom ) scale = min( scale, pow((iTime+7.)*rate*.5,.6) ); // keep the edgemost points in shot as we zoom
   float closest = 1e38;
   float closest2 = 1e38;
   for ( int i=0; i < n; i++ ){
       float f = float(i);
       f += fract(t);
       float r = sqrt(f/128.);
       r *= 13./scale;
       float a = fract((f-t)*phi)*tau;
       vec2 pos = r*vec2(sin(a),cos(a));
       vec3 col = sin(vec3(3,1,6)*(float(i)-floor(t)))*.5+.5;
       if ( fract(col.y*64.) > colours ) col = vec3(1);
       float l = length(pos-uv);
       // add a ring to help me track size (so it doesn't look like we're zooming out)
       // col *= smoothstep(penIn,penOut,abs(l/scale-.001)*scale);
       if ( i == 0 ) l += smoothstep(1.,0.,fract(t))*1.2/scale; // grow the new point
       if ( l < closest ){
           if ( closest < closest2 ) closest2 = closest;
           closest = l;
           gl_FragColor.rgb = col; // *(1.-l*sqrt(float(n)));
       }
       else if ( l < closest2 ){
           closest2 = l;
       }
       gl_FragColor.rgb = mix(gl_FragColor.rgb,vec3(0),smoothstep(penOut,penIn,length(pos-uv)));
   }
   // cell borders
   gl_FragColor.rgb *= smoothstep(penIn,penOut,(closest2-closest));//*scale);
}
`
        var fragmentShader2 = `
          float circle(in vec2 st, in float radius){
            float d=length(st-.5);
            return smoothstep(radius,radius-.01,d);
          }
          // change pattern variable to get different patterns
          float generator (in vec2 cell,in float mult) {
              float pattern;
              pattern=mult*(sin(cell.x*iTime/7.)+sin(cell.y*iTime/7.));
              return fract(pattern);
          }
          void mainImage(out vec4 fragColor, in vec2 fragCoord) {
            vec2 uv = fragCoord.xy/iResolution.xy;
            uv.x*=iResolution.x/iResolution.y;
            float multiplier=0.8754;
            float Ncircles=12.;
            uv *= Ncircles;
            vec2 posInt = floor(uv)+1.;  //(i,j) integerr coordinates
            vec2 posFloat = fract(uv); //(u,v) decimal cell coordinates
            vec3 color =generator(posInt,multiplier) *vec3(1.,.5+.5*cos(iTime),.5+.5*sin(iTime));
            color*=circle(posFloat,.5);
            fragColor = vec4(color,1.0);
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
        camera.position.z = 20
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        this.$refs.container.appendChild(renderer.domElement)
        const box = new THREE.Mesh(
          new THREE.BoxGeometry(10, 10, 10),
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
