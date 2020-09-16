<template>
  <div class="home">
    <Map3D class="bg"></Map3D>
<!--    <Map3D class="bg"></Map3D>-->
<!--    <CityModel></CityModel>-->
    <div class="site-title">
      <img src="~@/assets/images/home/title.png" alt="">
    </div>

    <ParticleFont :route-font="routeFont" ref="particleFont"></ParticleFont>
    <div class="links" @mouseover="">
      <router-link class="nav-item" to="/overview">
        <span @mouseover="routeFont = '系统概况'" @mouseleave="routeFont = ''">
          <img src="title_xtgk.png" alt="">
        </span>
      </router-link><br>
      <router-link class="nav-item" to="/summary">
        <span @mouseover="routeFont = '归集分析'" @mouseleave="routeFont = ''">
          归集分析
        </span>
      </router-link><br>
      <router-link class="nav-item" to="/public">
        <span @mouseover="routeFont = '双公示'" @mouseleave="routeFont = ''">
          双公示
        </span>
      </router-link><br>
      <router-link class="nav-item" to="/union">
        <span @mouseover="routeFont = '联合奖惩'" @mouseleave="routeFont = ''">
          联合奖惩
        </span>
      </router-link><br>
<!--      <router-link class="nav-item" to="/map">to map</router-link><br>-->
    </div>
  </div>
</template>
<script>
  import Map3DCloud from '../../../components/Map3D/Map3DCloud'
  import Map3D from '../../../components/Map3D/Map3D'
  import CityModel from '../../../components/CityModel/CityModel'
  import ParticleFont from '../../../components/ParticleFont/ParticleFont'
  /* eslint-disable */
  export default {
    name: 'Home',
    data(){
      return {
        routeFont: ''
      }
    },
    watch: {
      routeFont(n, o) {
        this.renderView(n)
      }
    },
    components: {
      Map3D,
      CityModel,
      ParticleFont
    },
    mounted(){},
    methods:{
      renderView(text){
        this.$emit('renderView', text)
      }
    }
  }
</script>

<style lang="stylus" scoped>
.home
  height: 100%
  width: 100%
  position absolute
  top: 0
  left: 0
  overflow hidden
.bg
  position absolute
  top: 110%
  left: 50%
  transform translate(-50%, -50%) scale(1.4)
.nav-item
  color #fff
  font-size: 30px
  line-height: 50px
  text-decoration none
.links
  position absolute
  top: 50%
  left: 100px
  transform translateY(-50%)
.site-title
  position absolute
  top: 200px
  left: 50%
  transform translateX(-50%)
</style>
