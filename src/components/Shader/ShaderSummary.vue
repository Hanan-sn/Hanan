<template>
  <div class="shader-test" ref="container"></div>
</template>

<script>
  import * as THREE from 'three'

  export default {
    name: 'ShaderSummary',
    data() {
      return {
        renderer: null,
        camera: null,
        scene: null,
        animation: null,
        time: 0,
        uniforms: {
          resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
          time: { type: 'f', value: 0 },
          iResolution: { type: 'v2', value: new THREE.Vector3(100, 100, 1) },
          iMouse: { type: 'v2', value: new THREE.Vector2() }
        }
      }
    },
    mounted() {
      this.render()
    },
    beforeDestroy() {
      cancelAnimationFrame(this.animation)
      this.animation = null
    },
    methods: {
      animate() {
        const animate = () => {
          this.animation = requestAnimationFrame(animate)
          // box.rotation.x += 0.01
          // box.rotation.y += 0.01
          this.uniforms.time.value += 0.02
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
            vVertexNormal= normalize(normalMatrix * normal);//将法线转换到视图坐标系中
            vVertexWorldPosition= (modelMatrix * vec4(position, 1.0)).xyz;//将顶点转换到世界坐标系中
            // set gl_Position
            gl_Position= projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `
        const shaderString1 = `
          precision mediump float;
          uniform float time; // time
          uniform vec2  resolution; // resolution
          void main(void){
            vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
            vec3 destColor = vec3(0.3, 0.6, 1.0);
            float f = 0.0;

            for(float i = 0.0; i < 20.0; i++){
              float s = sin(0.7 * time + (i * 0.5) * time) * 0.3;
              float c = cos(0.2 * time + (i * 0.5) * time) * 0.3 ;
              f += 0.01 / abs(length(p*0.5 + vec2(c, s)));
            }

            gl_FragColor = vec4(vec3(destColor * f), 1.0);
          }
        `
        const shaderString2 = `
          #ifdef GL_ES
precision mediump float;
#endif
uniform float time;
uniform vec2 resolution;
#define pi 3.14159265359
#define pi2 6.28318530718
#define size 2e-5
#define powerCoefficient 2.
vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float lineDist(vec2 a, vec2 b, vec2 p) {
    vec2 v = a, w = b;
    float l2 = pow(distance(w, v), 2.);
    if(l2 == 0.0) return distance(p, v);
    float t = clamp(dot(p - v, w - v) / l2, 0., 1.);
    vec2 j = v + t * (w - v);
    return distance(p, j);
}
vec3 addVertex(vec4 vertex, vec3 color, mat4 projMat, vec2 camUV) {
vec4 p_proj1 = projMat * vertex;
vec2 p = p_proj1.xy / p_proj1.z;
float dist = length((camUV-vec2(.5))-p);
return color * 1. / pow(dist, powerCoefficient) * size;
}
vec3 addLine(vec4 vertex1, vec4 vertex2, vec3 color, mat4 projMat, vec2 camUV) {
vec4 p_proj1 = projMat * vertex1;
vec2 p1 = p_proj1.xy / p_proj1.z;
vec4 p_proj2 = projMat * vertex2;
vec2 p2 = p_proj2.xy / p_proj2.z;
float dist = lineDist((camUV-vec2(.5))-p1, (camUV-vec2(.5))-p2, vec2(0., 0.0));
return color * 1. / pow(dist, powerCoefficient) * size;
}
void main(void) {
vec2 uv = (gl_FragCoord.xy - vec2(resolution.x * 0.25, .5)) / resolution.y;
float theta = time;
// standard rotation matrix around Y axis.
mat4 projMat = mat4(
vec4(cos(theta), 0.0, sin(theta), 0.0),
vec4(0.0, 1.0, 0.0, 0.0),
vec4(-sin(theta), 0.0, cos(theta), 0.0),
vec4(0.0, 0.0, 3. + 2.5 * sin(time), 0.0)
);
const int numVertices = 18;
float cylinderRadius = .3;
const int numRings = 3;
vec4 vertices[numVertices*numRings];
vec3 vertexColors[numVertices*numRings];
float step = pi2 / float(numVertices);
for (int j=0; j<numRings; j++) {
for (int i=0; i<numVertices; i++) {
vertices[j * numVertices + i] = vec4(cylinderRadius*cos(0. + float(i) * step), -.3 + float(j) * (.8 / float(numRings)), cylinderRadius*sin(0. + float(i) * step), 1.);
vertexColors[j * numVertices + i] = vec3(1.);
}
}
vec3 imageColors = vec3(0.);
for (int j=0; j<numRings; j++) {
for (int i=0; i<numVertices; i++) {
imageColors += addVertex(vertices[j*numVertices+i], vertexColors[j*numVertices+i], projMat, uv);
imageColors += addLine(vertices[j*numVertices+i], vertices[j*numVertices+int(mod(float(i)+1., float(numVertices)))], hsv2rgb(vec3(float(i) / float(numVertices), 1., 1.)), projMat, uv);
if (j<numRings-1){
imageColors += addLine(vertices[j*numVertices+i], vertices[(j+1)*numVertices+int(mod(float(i+1)+1., float(numVertices)))], hsv2rgb(vec3(float(i) / float(numVertices), 1., 1.)), projMat, uv);
}
}
}
gl_FragColor = vec4(imageColors, 1.);
}
        `
        const shaderString3 = `
        #ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

mat2 rot(float r){
return mat2(cos(r),sin(r),-sin(r),cos(r));
}

vec2 pmod(vec2 p, float n){
float np = 3.1415*2./n;
float r = atan(p.y,p.x)-0.5*np;
r = mod(r,np)-0.5*np;
return length(p)*vec2(cos(r),sin(r));
}


float cube(vec3 p,vec3 s){
vec3 q = abs(p);
vec3 m = max(s-q,0.);
return length(max(q-s,0.))-min(min(m.x,m.y),m.z);
}

float crossBox(vec3 p,float s){
float m1 = cube(p,vec3(s,s,99999.));

float m2 = cube(p,vec3(99999.,s,s));

float m3 = cube(p,vec3(s,99999.,s));

return min(min(m1,m2),m3);
}

float dist(vec3 p){
p.xy *= rot(time*0.2);
p.z += time;

p.xy = pmod(p.xy,6.);

for(int i  =0;i<4;i++){
p = abs(p)-1.;
p.xz *= rot(0.3);
}

float k = 0.6;
p = mod(p,k)-0.5*k;
return min(crossBox(p,0.02),cube(p,vec3(0.1)));
}


void main( void ) {

vec2 p = ( gl_FragCoord.xy / resolution.xy );
p = (p-0.5)*2.;
p.x *= resolution.x/resolution.y;

p *= rot(time*0.0);

vec3 ro = vec3(cos(time/2.),0.7,0.7);
vec3 rd = normalize(vec3(p,0.)-ro);

float d,t=2.;

float ac = 0.;

for(int i = 0;i<50;i++){
d = dist(ro+rd*t);
t += d;
ac += exp(-4.0*d);
if(d<0.01) break;
}

float cl = exp(-1.0*t);

vec3 col = vec3(0.7,0.7,0.2)*0.05*vec3(ac);
col += vec3(0,0.3,0.3);
col = pow(col,vec3(0.7));
if(d<0.01) col +=vec3(0.4,0.8,0.9)*0.01/abs(mod((ro+rd*t).z,1.0)-0.5);
gl_FragColor = vec4(col, 1.0 );

}
        `
        const shaderString4 = `
        #ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
varying vec2 surfacePosition;
#define time (cos(dot(surfacePosition,surfacePosition)))

// bonniemathew@gmail.com

vec3 COLOR1 = vec3(0.0, 0.0, 0.30);
vec3 COLOR2 = vec3(0.90, .0, 0.0);

float BLOCK_WIDTH = 0.01;

void main( void ) {


vec2 position = ( gl_FragCoord.xy / resolution.xy );
vec3 final_color = vec3(1.0);

// For creating the BG pattern
float c1 = mod(position.x, 3.0 * BLOCK_WIDTH);
c1 = step(BLOCK_WIDTH, c1);
float c2 = mod(position.y, 5.0 * BLOCK_WIDTH);
c2 = step(BLOCK_WIDTH, c2);

final_color = mix( position.x * COLOR1,  position.y * COLOR2, c1 * c2);



gl_FragColor = vec4(final_color, 1.0);
}`
        const shaderString5 = `
        #ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
varying vec2 surfacePosition;
#define time (cos(dot(surfacePosition,surfacePosition)))

// bonniemathew@gmail.com

vec3 COLOR1 = vec3(0.0, 0.0, 0.30);
vec3 COLOR2 = vec3(0.90, .0, 0.0);

float BLOCK_WIDTH = 0.01;

void main( void ) {


vec2 position = ( gl_FragCoord.xy / resolution.xy );
vec3 final_color = vec3(1.0);

// For creating the BG pattern
float c1 = mod(position.x, 3.0 * BLOCK_WIDTH);
c1 = step(BLOCK_WIDTH, c1);
float c2 = mod(position.y, 5.0 * BLOCK_WIDTH);
c2 = step(BLOCK_WIDTH, c2);

final_color = mix( position.x * COLOR1,  position.y * COLOR2, c1 * c2);



gl_FragColor = vec4(final_color, 1.0);
}
        `
        const shaderString6 = `
        #ifdef GL_ES
precision mediump float;
#endif


//#define HAS_SKY
float SPEED = 0.02;
float DISTANCE = 0.75;

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

vec2 rotate(vec2 p, float a)
{
    return vec2(p.x * cos(a) - p.y * sin(a), p.x * sin(a) + p.y * cos(a));
}
float box(vec2 p, vec2 b, float r)
{
    return length(max(abs(p) - b, 0.0)) - r;
}

vec3 intersect(in vec3 o, in vec3 d, vec3 c, vec3 u, vec3 v)
{
    vec3 q = o - c;
    return vec3(
    dot(cross(u, v), q),
    dot(cross(q, u), d),
    dot(cross(v, q), d)) / dot(cross(v, u), d);
}

// Randomness is overrated. Let's get some orderliness in here.

float rand11(float p)
{
    return .5;
}
float rand12(vec2 p)
{
    return .5;
}
vec2 rand21(float p)
{
    return vec2(.5, .5);
}

vec2 rand22(in vec2 p)
{
    return vec2(.5, .5);
}

float noise11(float p)
{
    float fl = floor(p);
    return mix(rand11(fl), rand11(fl + 1.0), fract(p));//smoothstep(0.0, 1.0, fract(p)));
}
float fbm11(float p)
{
    return noise11(p) * 0.5 + noise11(p * 2.0) * 0.25 + noise11(p * 5.0) * 0.125;
}
vec3 noise31(float p)
{
    return vec3(noise11(p), noise11(p + 18.952), noise11(p - 11.372)) * 2.0 - 1.0;
}

float sky(vec3 p)
{
    float a = atan(p.x, p.z);
    float t = time * 0.1;
    float v = rand11(floor(a * 4.0 + t)) * 0.5 + rand11(floor(a * 8.0 - t)) * 0.25 + rand11(floor(a * 16.0 + t)) * 0.125;
    return v;
}

vec3 voronoi(in vec2 x)
{
    vec2 n = floor(x); // grid cell id
    vec2 f = fract(x); // grid internal position
    vec2 mg; // shortest distance...
    vec2 mr; // ..and second shortest distance
    float md = 8.0, md2 = 8.0;
    for(int j = -1; j <= 1; j ++)
    {
        for(int i = -1; i <= 1; i ++)
        {
            vec2 g = vec2(float(i), float(j)); // cell id
            vec2 o = rand22(n + g); // offset to edge point
            vec2 r = g + o - f;

            float d = max(abs(r.x), abs(r.y)); // distance to the edge
d *= DISTANCE;
            if(d < md)
            {
                md2 = md; md = d; mr = r; mg = g;
            }
            else if(d < md2)
            {
                md2 = d;
            }
        }
    }
    return vec3(n + mg, md2 - md);

}

    #define A2V(a) vec2(sin((a) * 6.28318531 / 100.0), cos((a) * 6.28318531 / 100.0))



void main()
{
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    uv = uv * 2.0 - 1.0;
    uv.x *= resolution.x / resolution.y;


    // using an iq styled camera this time :)
    // ray origin
    vec3 ro = 0.7 * vec3(cos(SPEED *time), 0.0, sin(SPEED * time));
    ro.y = 01.;//cos(0.6 * time) * 0.3 + 0.65;
    // camera look at
    vec3 ta = vec3(0.0, 0.2, 0.0);

    // camera shake intensity
    float shake = clamp(3.0 * (.0 - length(ro.yz)), 0.3, 1.0);
    float st = mod(time*.1, 10.0) * 143.0;

    // build camera matrix
    vec3 ww = normalize(ta - ro + noise31(st) * shake * 0.01);
    vec3 uu = normalize(cross(ww, normalize(vec3(0.0, 1.0, 0.2 * sin(time*SPEED)))));
    vec3 vv = normalize(cross(uu, ww));
    // obtain ray direction
    vec3 rd = normalize(uv.x * uu + uv.y * vv + 1.0 * ww);

    // shaking and movement
    ro += noise31(-st) * shake * 0.015;
    ro.x += time * 2.0;

    float inten = 0.0;

    // background
    float sd = dot(rd, vec3(0.0, 1.0, 0.0));

#ifdef HAS_SKY
    pow(1.0 - abs(sd), 20.0) + pow(sky(rd), 5.0) * step(0.0, rd.y) * 0.2;
#else
inten = 0.;
#endif
    vec3 its;
    float v, g;
    // voronoi floor layers
    for (int i = 0; i < 4; i ++)
    {
        float layer = float(i);
        its = intersect(ro, rd, vec3(0.0, -5.0 - layer * 5.0, 0.0), vec3(1.0, 0.0, 0.0), vec3(0.0, 0.0, 1.0));
        if (its.x > 0.0)
        {
            vec3 vo = voronoi((its.yz) * 0.05 + 8.0 * rand21(float(i)));
            v = exp(-100.0 * (vo.z - 0.02));
            float fx = 0.0;
            // add some special fx to lowest layer
            if (i == 3){
                float crd = 0.0;//fract(time * 0.2) * 50.0 - 25.0;
                float fxi = cos(vo.x * 0.2 + time * 1.5);//abs(crd - vo.x);
                fx = clamp(smoothstep(0.9, 1.0, fxi), 0.0, 0.9) * 1.0 * rand12(vo.xy);
                fx *= exp(-3.0 * vo.z) * 2.0;
            }
            inten += v * 0.1 + fx;
        }
    }
    inten *= 0.4 + (sin(time) * 0.5 + 0.5) * 0.6;
    // find a color for the computed intensity
// #ifdef GREEN_VERSION
//     vec3 col = pow(vec3(inten), vec3(2.0, 0.15, 9.0));
// #else
//     vec3 col = pow(vec3(inten), 1.5 * vec3(0.15, 2.0, 9.0));
// #endif
vec3 col = pow(vec3(inten), 1.5 * vec3(2.0,0.2, 0.15));


gl_FragColor = vec4(col, 1.0);
}
        `
        const shaderString7 = `
        #ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define S(a) sin(a)
#define C(a) cos(a)
#define t time*.3
#define X vu.x
#define Y vu.y

void main( void )
{
vec2 vu = ( 2.* gl_FragCoord.xy - resolution.xy ) / resolution.y;
float c = 0.0;


for(float i = 0.; i < 49.; i++){
  //c += abs( 1. / S( Y + 0.132 + S( i * .0103 + X * 3.3 + t * .30003 -i * .134 ) * C( X + t * .10001 ) * S( X + t * .5000001 + i * .12) * C( i * .041 )  ) );
c+=abs(1./
       ( Y
    +C( i /19.+t + X / 1.30)
    *S( t + X / 2.55)
    *S( X / .9 + t * 2.)
    +C( X / .5 - Y) / 5.
    *C( i * .21 )
));
}
gl_FragColor = vec4( vec3(c) * vec3(0.001, 0.001, .001), 1. );
}
        `
        const shaderString8 = `
        // https://www.dwitter.net/d/20684
// trying to replicate ps3 dashboard ribbon waves, and failing! - but having fun :-)

#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define S(a) sin(a)
#define C(a) cos(a)
#define t time*.3
#define X vu.x
#define Y vu.y

void main( void )
{
vec2 vu = ( 4. * gl_FragCoord.xy - resolution.xy ) / resolution.y;
float c = 0.2;


for(float i = 0.; i < 60.; i++){
  //c += abs( 1. / S( Y + 0.132 + S( i * .0103 + X * 3.3 + t * .30003 -i * .134 ) * C( X + t * .10001 ) * S( X + t * .5000001 + i * .12) * C( i * .041 )  ) );
c+=abs( 2.
       /
       ( Y
    +C( i / 6. - t + X / 4.)
    *S( t + X * 1.3)
    *S( X / 12. + t * 0.00004)
    +C( X / 2.0 - Y) / 1.
    *C( i * 2.6 )
));
}
gl_FragColor = vec4( vec3(c) * vec3(0.0019, .0013, .0015), 2. );
}
        `
        const shaderString9 = `
        #ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define S(a) sin(a)
#define C(a) cos(a)
#define t time*.3
#define X vu.x
#define Y vu.y

uniform sampler2D s;

vec3 rgb2hsv(vec3 c)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}
vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
void main() {
vec2 vu = (2.* gl_FragCoord.xy - resolution.xy) / resolution.y;
vec4 vs = texture2D(s, gl_FragCoord.xy / resolution.xy);
vec3 c;
for(float i = 0.; i < 30.; i++) {
vec3 tc = vec3(Y);
tc += vec3(
C(i / 18.5 + t + X / 1.30) * S(t + X / 2.55) * S(X / .9 + t * 2.03)
+ C(X / .35 - Y) / 5. * C(i * .21),
C(i / 19.5 + t + X / 1.30) * S(t + X / 2.55) * S(X / .9 + t * 2.05)
     + C(X / .65 - Y) / 5. * C(i * .21),
C(i / 19. + t + X / 1.30) * S(t + X / 2.55) * S(X / .9 + t * 2.)
     + C(X / .25 - Y) / 5. * C(i * .21)
);
vec3 hsv = rgb2hsv(tc);
vec4 vt = texture2D(s, gl_FragCoord.xy / resolution.xy + 2.25 * length(tc) * vec2(cos(hsv.x), sin(hsv.y)));
vs += smoothstep(.5, 8.5, vt) * .45;
c += abs(1. / tc);
}
gl_FragColor = vec4(hsv2rgb(rgb2hsv(c * .0015) * .725 + vec3(t, 0., 0.)), 1.) + vs * .315;
}
        `
        const shaderString10 = `
        #ifdef GL_ES
precision highp float;
#endif

// Shader Invaders!!
// Concept & code by Alan Mackey.  Alien graphic by @emackey.
// Original version is http://glsl.heroku.com/424/12


uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
uniform sampler2D backbuffer;

bool IsUninitialized(vec3 color) {
return (color == vec3(0.0, 0.0, 0.0));
}

bool IsEnemy(vec3 color) {
return ((color.b > color.r) && (color.b > 0.5));
}

bool IsShot(vec3 color) {
return ((color.r > color.g) && (color.g == 0.0));
}

bool IsExplosion(vec3 color) {
return ((color.r == color.g) && (color.r > 0.77));
}

bool IsDebris(vec3 color) {
if (IsShot(color)) {return false;}
return (color.r > 0.2);
}

bool alien(float x, float y) {
if (x > 5.9999) {
x = 11.0 - x;
}

if ((x < -0.0001) || (y < -0.0001)) {
return false;
} else if (y <= 1.9999) {
return (x >= (1.9999 - y));
} else if (y <= 3.9999) {
return ((x < 1.9999) || (x >= 3.9999));
} else if (y <= 7.9999) {
return true;
} else if (y <= 10.9999) {
return ((x >= (10.9999 - y)) && (x <= (12.9999 - y)));
}
return false;
}

void main( void ) {
vec2 position = ( gl_FragCoord.xy / resolution.xy );
vec2 pixel = 1./resolution;
vec2 mousepx = mouse * pixel;

vec3 space = vec3(0.02, 0.04, 0.1);
vec3 shot = vec3(1.0, 0.0, 0.3);
vec3 enemy = vec3(0.3, 0.55, 0.65);
vec3 explosion = vec3(0.8, 0.8, 0.2);

vec4 old = texture2D(backbuffer, position);
vec4 me = vec4(space.r, space.g, space.b, 1.0);

// Y < 0.1: ship
if (position.y < 0.02) {
// empty; do nothing
} else if (position.y < 0.1) {
// Player ship
if (abs(position.x - mouse.x) < (0.1 - position.y) * 0.25) {
me.rgb = vec3(0.5, 0.7, 0.6);
}
} else if (position.y < 0.105) {
// Shot generator
if ((abs(position.x - mouse.x) <= pixel.x) && (mod(time * 2.0, 1.0) < 0.1)) {
me.rgb = shot;
}
} else {
// Playing field
float shoty = max(position.y - 0.015, 0.1025);
vec4 below = texture2D(backbuffer, vec2(position.x, shoty));
float offset = 0.0;
float offsetpx = 0.0;

if (mod(time * 1.0, 1.0) > 0.95) {
// Enemy marching
offset = 0.01 * ((old.a > 0.5) ? 1.0 : -1.0);
offsetpx = 0.01 / pixel.x;
old.rgb = texture2D(backbuffer, position + vec2(offset, 0.0)).rgb;

if (old.a < 0.4) {
me.a = old.a + 0.015;
} else if (old.a > 0.6) {
me.a = old.a - 0.015;
} else {
// Change direction!
me.a = (old.a > 0.5) ? 0.0 : 1.0;
}
} else {
me.a = old.a;
}

if (IsUninitialized(old.rgb)) {
// draw enemy ships for first time
float enemyrow = (1.0 - position.y - 0.05) * 12.0;
float enemyrowmod = mod(enemyrow, 1.0);
float enemycol = position.x * 15.0 - 0.2;
float enemycolmod = mod(enemycol, 1.0);
bool oddrow = (floor(mod(enemyrow, 2.0)) == 1.0);

if ((enemyrow >= 0.0) && (enemyrow < 4.0)) {
me.a = (oddrow) ? 1.0 : 0.0;
if ((enemycol >= (oddrow ? 4.0 : 0.0)) && (enemycol < (oddrow ? 15.0 : 11.0))) {
me.rgb = alien(enemycolmod * 25.0, enemyrowmod * 25.0) ? enemy : space;
}
}
} else if (IsShot(below.rgb)) {
// Move shot up; look for collision w/ enemy or debris
if (IsEnemy(old.rgb)) {
me.rgb = explosion;
} else if (IsDebris(old.rgb)) {
me.rgb = old.rgb;
} else {
me.rgb = shot;
}
} else if (IsEnemy(old.rgb)) {
// Grow explosions to consume whole enemy
bool exploding =
(IsExplosion(texture2D(backbuffer, position + vec2(offsetpx + 1.0, 0.0) * pixel).rgb)) ||
(IsExplosion(texture2D(backbuffer, position + vec2(offsetpx - 1.0, 0.0) * pixel).rgb)) ||
(IsExplosion(texture2D(backbuffer, position + vec2(offsetpx, 1.0) * pixel).rgb)) ||
(IsExplosion(texture2D(backbuffer, position + vec2(offsetpx, -1.0) * pixel).rgb));
me.rgb = exploding ? explosion : old.rgb;
} else {
// Fade debris to background color
if (!IsShot(old.rgb) && !IsEnemy(old.rgb)) {
float fade = mod(fract(sin(dot(position + time * 0.001, vec2(14.9898,78.233))) * 43758.5453), 1.0);
fade = pow(fade, 6.0) * 0.4;
me.rgb = old.rgb * (1.0 - fade) + space * fade;
if (length(me.rgb - space) < 0.05) {me.rgb = space;}
}
}
}
gl_FragColor = me;
}
        `
        const shaderToy = new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader: shaderString3,
          transparent: true,
          uniforms: this.uniforms,
          side: THREE.DoubleSide
        })
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.camera.position.z = 1
        this.renderer = new THREE.WebGLRenderer({ alpha: true })
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.$refs.container.appendChild(this.renderer.domElement)
        const box = new THREE.Mesh(
          new THREE.PlaneGeometry(6, 4),
          // new THREE.BoxBufferGeometry(2, 2, 2),
          shaderToy
        )
        const light = new THREE.AmbientLight(0x404040) // soft white light
        this.scene.add(light)
        this.scene.add(box)
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
