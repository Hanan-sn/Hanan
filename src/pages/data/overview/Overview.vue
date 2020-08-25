<template>
  <div class="overview" flex>
    <div ref="earth" id="earth" class="earth"></div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import * as THREE from 'three'
  import a from '~@/assets/images/dark.svg'
  export default {
    name: 'Overview',
    data() {
      return {
      }
    },
    components: {
      // Panel
    },
    created() {
    },
    mounted(){
      this.renderBall(this.$refs.earth)
    },
    computed: {
      ...mapState({
        a: state => state.overview.a
      })
    },
    watch: {
    },
    methods: {
      renderBall(dom){
        var w = 1200, h =600;//场景高宽
        var camera_deg = 45, aspect = w / h, near = .1, far = 10000;//相机参数
        var container = document.getElementById('earth');
        var renderer = new THREE.WebGLRenderer({ alpha: true });
        var camera = new THREE.PerspectiveCamera(
          camera_deg, aspect, near, far
        );
        var scene = new THREE.Scene();
        scene.add(camera)
        camera.position.z = 200;

        renderer.setSize(w, h);

        //附加DOM元素
        container.append(renderer.domElement);
        //设置球体的值
        var radius = 60, segemnt = 60, rings = 60;
        // var img = require '~@/assets/images/dark.svg'
        var png = new THREE.TextureLoader().load(a);
        var texture = new THREE.CanvasTexture(png)
        // 使用echarts作为canvas贴图
        var sphereMaterial = new THREE.MeshBasicMaterial({map: texture, fog:true});

        var sphere = new THREE.Mesh(
          new THREE.SphereGeometry(radius, segemnt, rings),
          sphereMaterial
        );
        //let sphereGeometry = new THREE.SphereGeometry(1000, 50, 50);//球几何体创建
        //sphereGeometry.scale(-1, 1, 1);//球形几何网格进行x轴反转，使所有的面点向内

        sphere.geometry.verticesNeedUpdate = true;
        sphere.geometry.normalsNeedUpdate = true;

        scene.add(sphere);

        var pointLight = new THREE.PointLight(0Xffffff);

        pointLight.position.x = 10;
        pointLight.position.y = 50;
        pointLight.position.z = 150;

        //scene.add(pointLight);
        function animate(){
          requestAnimationFrame(animate);
          //画图
          //sphere.rotation.x+=.1;
          sphere.rotation.y+=.005;//延Y轴旋转
          renderer.render(scene, camera);
        }
        animate()
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
