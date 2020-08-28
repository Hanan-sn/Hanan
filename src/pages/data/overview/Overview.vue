<template>
  <div class="overview" flex>
    <div ref="earth" id="earth" class="earth"></div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import * as THREE from 'three'
  import * as TWEEN from 'tween'
  export default {
    name: 'Overview',
    data() {
      return {
        scene: null,
        camera: null,
        renderer: null,
        group: null
      }
    },
    components: {
      // Panel
    },
    created() {
    },
    mounted(){
      this.init();
      this.animate()
      this.tween()
    },
    computed: {
      ...mapState({
        a: state => state.overview.a
      })
    },
    watch: {
    },
    methods: {
      tween(){
        let _self = this
        let pos = {val: 1 };
        let tween = new TWEEN.Tween(pos).to({val: 0}, 100).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(callback);
        tween.onComplete(function () {
          console.log('过渡完成complete')
        })
        tween.start(1000);
        tween.update()
        function callback() {
          let val = this.val;
          let particles = _self.group.children;
          for (let i = 0; i < particles.length; i++) {
            let _attributes = particles[i].geometry.attributes;
            let name = particles[i].name
            if(name.indexOf('_') === -1) {
              console.log(name)
              // let positionEnd = _attributes.positionEnd.array;
              // let position1 = _attributes.position1.array;
              // let count = _attributes.position.count;
              // for (let j = 0; j < count * 3; j++) {
              //   _attributes.position.array[j] = position1[j] * val + positionEnd[j] * (1 - val)
              // }
            }
            _attributes.position.needsUpdate = true // 设置更新
          }
        }
      },
      init(){
        let container = document.getElementById('earth');

        this.camera = new THREE.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 10);
        this.camera.position.z = 1;
        this.camera.position.y = 1;
        this.camera.position.x = 0;
        this.camera.lookAt( 0, 0, 0 );

        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x05050c,10,60);
        let light = new THREE.AmbientLight(0x000000, 0.4)
        this.scene.add(light)

        this.group = new THREE.Group()
        this.group.name = 'group'
        let geometry = new THREE.SphereGeometry( 0.5, 16, 16 );
        // let material = new THREE.MeshBasicMaterial( {color: '#ffffff',wireframe: true} );

        if(this.group){
          this.deleteGroup('group')
        }
        let arr = geometry.vertices.flat(1)
        arr.forEach(item=>{
          this.addPoint({x:item.x,y:item.y,z:item.z})
        })
        // this.addMesh(geometry, material)
        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha:true});
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);
      },
      addMesh(geometry, material){
        let mesh = new THREE.Mesh(geometry, material);
        this.group.add(mesh)
        this.scene.add(this.group);
      },
      addPoint({x,y,z}){
        let geometry = new THREE.SphereBufferGeometry( 0.002, 4, 4 );
        let material = new THREE.MeshBasicMaterial( {color: '#333fff',transparent: true, blending: THREE.AdditiveBlending} );
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = x
        mesh.position.y = y
        mesh.position.z = z
        this.group.add(mesh)
        this.scene.add(this.group)
      },
      animate() {
        requestAnimationFrame(this.animate);
        // this.group.rotation.x += 0.01;
        this.group.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);
        // this.deleteGroup()
      },
      /* 创建点云 */
      createPointsCloud(geometry) {
        /* 精灵材质 */
        let spriteMaterial = new THREE.PointsMaterial({
          color: 0xffffff,
          size:0.23,
          transparent: true,
          map: this.generateSprite()
        });
        let points = new THREE.Points(geometry, spriteMaterial);
        return points;
      },
      /* 创建canvas纹理 */
      generateSprite() {
        /* 常见画布并设置宽高 */
        let canvas = document.createElement('canvas');
        canvas.width = 8;
        canvas.height = 8;
        /* 创建图形 */
        let ctx = canvas.getContext("2d");
        let gradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 0,
          canvas.width / 2, canvas.height / 2, canvas.width / 2
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(0, 255, 255, 1)');
        gradient.addColorStop(0.6, 'rgba(0, 0, 64, 1)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        let texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        return texture;
      },
      clearCache(mesh) {
        mesh.geometry.dispose();
        mesh.material.dispose();
      },
      deleteGroup(name){
        let group = this.scene.getObjectByName(name);
        if (!group) return;
        //删除掉所有的模型组内的mesh
        group.traverse(function (item) {
          if (item instanceof THREE.Mesh) {
            item.geometry.dispose(); //删除几何体
            item.material.dispose(); //删除材质
          }
        });
        scene.remove(group);
      },
      renderBall(dom){
        const container = this.$refs.earth
        console.dir(container)
        // 场景高宽
        const w = 600, h = 600
        // 相机参数
        const camera_deg = 45, aspect = w / h, near = 0.1, far = 10000
        // var container = document.getElementById('earth')
        const renderer = new THREE.WebGLRenderer({ alpha: true })
        const camera = new THREE.PerspectiveCamera(
          camera_deg, aspect, near, far
        )
        const scene = new THREE.Scene()
        scene.add(camera)
        camera.position.z = 200

        renderer.setSize(w, h)

        // 附加DOM元素
        dom.append(renderer.domElement)

        // 设置球体的值
        const radius = 50, segemnt = 60, rings = 60
        const earth_png = new THREE.TextureLoader().load('~@/assets/images/earth.png')
        const sphereMaterial = new THREE.MeshBasicMaterial({ map: earth_png })

        const sphere = new THREE.Mesh(
          new THREE.SphereGeometry(radius, segemnt, rings),
          sphereMaterial
        )

        sphere.geometry.verticesNeedUpdate = true
        sphere.geometry.normalsNeedUpdate = true

        scene.add(sphere)

        const pointLight = new THREE.PointLight(0X000000)

        pointLight.position.x = 10
        pointLight.position.y = 50
        pointLight.position.z = 150

        // scene.add(pointLight)
        function animate() {
          requestAnimationFrame(animate)
          // 画图
          // sphere.rotation.x += 0.1
          // 延Y轴旋转
          sphere.rotation.y += 0.1
          renderer.render(scene, camera)
        }
        animate()
      }
    }
  }
</script>

<style lang="stylus" scoped>
.earth
  width: 100%
  height: 100%
</style>
