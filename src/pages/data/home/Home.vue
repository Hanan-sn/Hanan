<template>
  <div class="home">
    <div class="nav-wrapper">
      <router-link to="/overview" class="router-link" @mouseenter.native="renderMenuItemText">系统概况专题</router-link><br>
      <router-link to="/summary" class="router-link" @mouseenter.native="renderMenuItemText">数据归集专题</router-link><br>
      <router-link to="/public" class="router-link" @mouseenter.native="renderMenuItemText">双公示专题</router-link><br>
      <router-link to="/union" class="router-link" @mouseenter.native="renderMenuItemText">联合奖惩专题</router-link><br>
      <router-link to="/map" class="router-link" @mouseenter.native="renderMenuItemText">区域数据归集</router-link><br>
    </div>
    <canvas id="bg"></canvas>
    <div id="round"></div>
  </div>
</template>
<script>
  // import particles from 'particles.js'
  // import * as Three from 'three'
  /* eslint-disable */
  export default {
    name: 'Home',
    data(){
      return {
        mouse:{x: 0, y: 0 },
        navText: ['信用大数据分析', 'Big-Data']
      }
    },
    mounted(){
      this.createCvsBg(this.navText)
      this.createCvsRoundBg()
      /* const domList = document.getElementsByClassName('router-link')
      console.log(domList)
      Array.from(domList).forEach(item=>{
        // console.dir(item)
        console.log(item)
        item.addEventListener('onmouseenter',event=>{console.log(event)})
        item.addEventListener('onmouseleave',event=>{console.log(event)})
      }) */
    },
    watch: {
      navText(n){
        this.createCvsBg([n])
      }
    },
    methods: {
      renderMenuItemText(event){
        clearTimeout()
        clearInterval()
        cancelAnimationFrame(null)
        this.navText = [event.target.innerText]
      },
      createCvsBg(words){
        var _self = this
        _self.animationFlag = false
        var __extends = this && this.__extends || function () {
          var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
              { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||
              function (d, b) {for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];};
            return extendStatics(d, b);
          };
          return function (d, b) {
            extendStatics(d, b);
            function __() {this.constructor = d;}
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        var BACKGROUND_COLORS = ['transparent', 'transparent'];
        var _a = [Math.PI * 2, Math.PI / 2, Math.PI / 4],PI_DOUBLE = _a[0],PI_HALF = _a[1],PI_QUARTER = _a[2];
        var COLOR_MAX = 255;
        var BASE_COLOR = [.2, .9, .8];
        var WORDS = words;
        var getRGB = function (_a) {
          var red = _a[0],green = _a[1],blue = _a[2];
          return "rgb(" + Math.floor(red * COLOR_MAX) + ", " + Math.floor(green * COLOR_MAX) + ", " + Math.floor(blue * COLOR_MAX) + ")";
        };
        var Vector = /** @class */function () {
          function Vector(x, y) {
            if (x === void 0) {x = 0;}
            if (y === void 0) {y = 0;}
            this.x = x;
            this.y = y;
          }
          Vector.getLength = function (x, y) {
            return Math.sqrt(x * x + y * y);
          };
          Vector.getDistance = function (pointA, pointB) {
            return Vector.getLength(pointA.x - pointB.x, pointA.y - pointB.y);
          };
          Vector.getDifference = function (pointA, pointB) {
            return new Vector(pointA.x - pointB.x, pointA.y - pointB.y);
          };
          Object.defineProperty(Vector.prototype, "length", {
            get: function () {
              return Math.sqrt(this.x * this.x + this.y * this.y);
            },
            enumerable: true,
            configurable: true });

          Vector.prototype.add = function (_a) {
            var x = _a.x,y = _a.y;
            this.x += x;
            this.y += y;
          };
          Vector.prototype.multiply = function (value) {
            this.x *= value;
            this.y *= value;
          };
          Vector.prototype.angleTo = function (vector) {
            return Math.atan2(vector.y - this.y, vector.x - this.x);
          };
          Vector.prototype.distanceTo = function (vector) {
            return Vector.getDistance(this, vector);
          };
          return Vector;
        }();
        var Particle = /** @class */function () {
          function Particle(_a) {
            var _b = _a.position,x = _b.x,y = _b.y,radius = _a.radius,damping = _a.damping;
            this.radius = 1;
            this.mass = 1;
            this.acceleration = new Vector();
            this.velocity = new Vector();
            this.damping = 0;
            this.gravityObjects = [];
            this.position = new Vector(x, y);
            this.radius = radius;
            this.damping = damping;
          }
          Object.defineProperty(Particle.prototype, "x", {
            get: function () {
              return this.position.x;
            },
            enumerable: true,
            configurable: true });

          Object.defineProperty(Particle.prototype, "y", {
            get: function () {
              return this.position.y;
            },
            enumerable: true,
            configurable: true });

          Particle.prototype.applyPhysic = function () {
            var _this = this;
            this.gravityObjects.forEach(function (gravityObject) {
              var distance = Vector.getDistance(gravityObject, _this);
              var angle = _this.position.angleTo(gravityObject);
              var force = (gravityObject.mass + _this.mass) / (distance * distance) || 0;
              var gravity = new Vector(Math.cos(angle) * force, Math.sin(angle) * force);
              _this.velocity.add(gravity);
            });
            this.velocity.add(this.acceleration);
            this.velocity.multiply(1 - this.damping);
            this.position.add(this.velocity);
          };
          return Particle;
        }();
        var Spring = /** @class */function (_super) {
          __extends(Spring, _super);
          function Spring(_a) {
            var position = _a.position,center = _a.center,radius = _a.radius,stiffness = _a.stiffness,damping = _a.damping;
            var _this = _super.call(this, { position: position, radius: radius, damping: damping }) || this;
            _this.stiffness = 1;
            _this.center = new Vector(center.x, center.y);
            _this.stiffness = stiffness;
            return _this;
          }
          Spring.prototype.applyPhysic = function () {
            this.force = Vector.getDifference(this.center, this.position);
            this.force.multiply(this.stiffness);
            this.velocity.add(this.force);
            _super.prototype.applyPhysic.call(this);
          };
          return Spring;
        }(Particle);
        function main() {
          var canvasEl = document.getElementById('bg');
          var context = canvasEl.getContext('2d');
          var width = canvasEl.width,height = canvasEl.height;
          var resize = function () {
            var innerHeight = window.innerHeight,innerWidth = window.innerWidth;
            canvasEl.width = innerWidth;
            canvasEl.height = innerHeight;
            width = innerWidth;
            height = innerHeight;
          };
          window.addEventListener('resize', resize);
          resize();
          var MAX_DISTANCE = 1000;
          var BLOCK_SIZE = 10;
          var BYTE_OFFSET = 4;
          // var MAX_OFFSET_X = 40;
          // var MAX_OFFSET_Y = 10;
          var FONT_SIZE = 140;
          var textures = WORDS.map(function (word) {return getTextTexture(word, FONT_SIZE);});
          var textureA = textures[0],textureB = textures[1];
          var center = {
            x: width / 2,
            y: height / 2 };

          var radius = textureA.width / 4;
          var particles = [];
          var positions = textures.map(function (texture) {
            var result = [];
            for (var i = 0; i < texture.width / BLOCK_SIZE; i++) {
              for (var j = 0; j < texture.height / BLOCK_SIZE; j++) {
                var offset = Math.floor(j * BLOCK_SIZE * texture.width + i * BLOCK_SIZE + BLOCK_SIZE / 2) * BYTE_OFFSET;
                if (texture.data[offset]) {
                  result.push({
                    x: i * BLOCK_SIZE + (width - texture.width) / 2,
                    y: j * BLOCK_SIZE + (height - texture.height) / 2 });
                }
              }
            };
            return result;
          });
          var currentPositionsIndex = 0;
          var MAX_PARTICLES = 1400;
          var particles = Array.from({ length: MAX_PARTICLES }, function (_value, index) {
            var currentPositions = positions[currentPositionsIndex];
            var position = currentPositions[index % currentPositions.length];
            return new Spring({
              position: position,
              radius: 1,
              center: position,
              stiffness: 0.03, // 刚度
              damping: 0.25 // 阻尼
            });
          });
          var switchWord = function () {
            currentPositionsIndex = (currentPositionsIndex + 1) % textures.length;
            var currentTexture = textures[currentPositionsIndex];
            mutateParticles(particles, positions[currentPositionsIndex], { x: width / 2, y: height / 2 });
          };
          var maxRadius = Math.sqrt(textureA.width / 2 * textureA.width / 2);
          var backgroundColor = getBackgroundColor(context, width, height);
          var PIXEL_SIZE = 8; // 像素尺寸
          var STROKE_OPACITY = 0.3; // 虚化
          var ANIMATION_STEP = 0.04; // 动画步长
          var COLOR_OFFSET = -0.3;
          var animationProgress = 0;
          var prevPhase = -1;
          var step = function () {
            var width = canvasEl.width,height = canvasEl.height;
            animationProgress += ANIMATION_STEP;
            var phase = Math.sign(Math.sin(animationProgress));
            if (phase !== prevPhase) {
              prevPhase = phase;
              switchWord();
            }
            context.clearRect(0,0,width,width)
            var fillScale = Math.abs(Math.sin(animationProgress + COLOR_OFFSET));
            var strokeScale = 1 - fillScale;
            context.fillStyle = backgroundColor;
            context.fillRect(0, 0, width, height);
            context.save();
            context.fillStyle = getRGB(BASE_COLOR.map(function (color) {return color * fillScale;}));
            context.strokeStyle = getRGB(BASE_COLOR.map(function (color) {return color * strokeScale;}));
            particles.forEach(function (particle) {
              particle.applyPhysic();
              context.save();
              context.translate(particle.x, particle.y);
              context.beginPath();
              context.rect(0, 0, PIXEL_SIZE, PIXEL_SIZE);
              context.fill();
              context.stroke();
              context.restore();
            });
            context.restore();
            requestAnimationFrame(step);
          };
          step(context);
        }
        function getTextTexture(text, fontSize) {
          var canvasEl = new OffscreenCanvas(1024, 768);
          var context = canvasEl.getContext('2d');
          context.fillStyle = '#FFFFFF';
          context.textAlign = 'left';
          context.textBaseline = 'top';
          context.font = "bold " + fontSize + "px Arial";
          context.fillText(text, 0, 0);
          var width = context.measureText(text).width;
          return context.getImageData(0, 0, width, fontSize);
        }
        function getBackgroundColor(context, width, height) {
          var gradient = context.createRadialGradient(width / 2, height / 2, width / 2, width / 2, height / 2, width);
          BACKGROUND_COLORS.forEach(function (color, index) {
            gradient.addColorStop(index, color);
          });
          return gradient;
        }
        // 粒子变化动画
        function mutateParticles(particles, positions, defaultPosition) {
          if (defaultPosition === void 0) {defaultPosition = { x: 0, y: 0 };}
          // 重组
          shuffleArray(particles).forEach(function (particle, i) {
            var _a = positions[i % positions.length] || defaultPosition,x = _a.x,y = _a.y;
            var angle = particle.position.angleTo(defaultPosition);
            var distance = particle.position.distanceTo(defaultPosition);
            particle.center = { x: x, y: y };
          });
        }

        function shuffleArray(array) {
          var _a;
          if (array.length <= 1) {
            return array;
          }
          for (var index = 0; index < array.length - 1; index++) {
            var cursor = array.length - index - 1;
            var randomIndex = Math.floor((array.length - index) * Math.random());
            _a = [array[randomIndex], array[cursor]], array[cursor] = _a[0], array[randomIndex] = _a[1];
          }
          return array;
        }
        main()
      },
      createCvsRoundBg(){
        var _self = this
        var ctx, w, h, cx, cy, PI, PI_HALF, cos, sin, random, lineWidth, C,
          rings, ringsLength, data;
        var dom = document.getElementById('round')
        var cvs = document.createElement('canvas')
        // cvs.height = window.innerHeight
        // cvs.width = window.innerHeight
        ctx = cvs.getContext('2d');
        w = window.innerHeight-100;
        h = window.innerHeight-100;
        cx = (w/2);
        cy = (h/2);
        rings = [];
        ringsLength = 0;

        PI = Math.PI;
        PI_HALF = PI / 2;
        cos = Math.cos;
        sin = Math.sin;
        random = Math.random;

        lineWidth = 0.2;
        C = ["#ABF8FF", "#E76B76", "#1D2439", "#4F3762", "#67F9FF", "#0C0F18"];

        data = [
          /* ring {t:total_particles, r:radius, d:distance, s:speed, c:color} */
          [
            {t:80, r:(cx-10), d:40, s:30, c:C[1]},
            {t:60, r:(cx-20), d:40, s:80, c:C[2]},
            {t:20, r:(cx-30), d:20, s:80, c:C[2]},
          ],
          [
            {t:80, r:(cx-80),  d:40, s:40, c:C[4]},
            {t:80, r:(cx-90),  d:20, s:40, c:C[4]},
            {t:20, r:(cx-100), d:20, s:40, c:C[2]},
            {t:40, r:(cx-110), d:20, s:40, c:C[2]},
          ],
          [
            {t:60, r:(cx-160), d:40, s:20, c:C[2]},
            {t:20, r:(cx-170), d:30, s:60, c:C[2]},
            {t:40, r:(cx-180), d:40, s:60, c:C[2]},
          ],
          [
            {t:40, r:(cx-230), d:40, s:20, c:C[5]},
            {t:20, r:(cx-240), d:20, s:10, c:C[5]},
          ]
          // [
          //   {t:10, r:(cx-290), d:10, s:10, c:C[4]}
          // ]
        ];

        /* */
        ctx.canvas.width = w;
        ctx.canvas.height = h;
        dom.appendChild(ctx.canvas);

        data.forEach(function(group) {
          var ring = [];

          group.forEach(function(orbit, i) {
            var total_particles, index;

            total_particles = orbit.t;
            index = 0;

            for (; index < total_particles; index++) {
              var radius, distance, speed, color, opacity;

              radius = orbit.r;
              distance = orbit.d;
              speed = random() / orbit.s;
              speed = i % 2 ? speed : speed * -1;
              color = orbit.c;
              opacity = orbit.o;

              ring.push(new P(radius, distance, speed, color, opacity));

              radius = distance = speed = color = opacity = null;
            }
          });

          rings.push(ring);
        });

        ringsLength = rings.length;

        /* */
        function P(radius, distance, speed, color) {
          this.a = PI / 180;
          this.d = distance;
          this.d2 = (this.d * this.d);
          this.x = cx + radius * cos(this.a);
          this.y = cy + radius * sin(this.a);
          this.c = color;
          this.r = (random() * 8);
          this.R = random() > 0.5 ? radius : radius - 5;
          this.s = speed;
          this.pos = random() * 360;
        }

        function draw() {
          var i, j, k, xd, yd, d, ring, ringLength, ringLength2, particle, p2;

          ctx.beginPath();
          ctx.globalCompositeOperation = "source-over";
          ctx.rect(0, 0 , w, h);
          ctx.fillStyle = "#0f1e3d";
          ctx.fill();
          ctx.closePath();

          for (i = 0; i < ringsLength; i++) {
            ring = rings[i];
            ringLength = ring.length;
            ringLength2 = ringLength - 100;

            for (j = 0; j < ringLength; j++) {
              particle = ring[j];

              particle.x = cx + particle.R * sin(PI_HALF + particle.pos);
              particle.y = cy + particle.R * cos(PI_HALF + particle.pos);
              particle.pos += particle.s;

              ctx.beginPath();
              ctx.globalAlpha = 0.12;
              ctx.globalCompositeOperation = "lighter";
              ctx.fillStyle = particle.c;
              ctx.arc(particle.x, particle.y, particle.r, PI * 2, false);
              ctx.fill();
              ctx.closePath();

              for (k = 0; k < ringLength2; k++) {
                p2 = ring[k];

                yd = p2.y - particle.y;
                xd = p2.x - particle.x;
                d = ((xd * xd) + (yd * yd));

                if (d < particle.d2) {
                  ctx.beginPath();
                  ctx.globalAlpha = 1;
                  ctx.lineWidth = lineWidth;
                  ctx.moveTo(particle.x, particle.y);
                  ctx.lineTo(p2.x, p2.y);
                  ctx.strokeStyle = p2.c;
                  ctx.stroke();
                  ctx.closePath();
                }
              }
            }
          }
        }

        function loop() {
          draw();
          requestAnimationFrame(loop);
        }

        loop();

      }
    }
  }
</script>

<style lang="stylus" scoped>
.home
  #bg
    position absolute
    top: 0
    left: 0
    z-index 10
  .nav-wrapper
    position absolute
    top: 0
    left: 0
    z-index 11
    padding-top: 100px
    a
      padding-left: 40px
      color #fff
      font-size: 24px
      line-height: 50px
      text-decoration none
      position relative
      &::after
        content '》》'
        letter-spacing -10px
        position absolute
        right: -30px
        opacity 0
        transition ease-in-out 0.4s
      &:hover
        &::after
          right: -40px
          opacity 1


  #round
    position absolute
    top: 50%
    left: 50%
    transform translate(-50%,-50%)
    z-index 9
</style>
