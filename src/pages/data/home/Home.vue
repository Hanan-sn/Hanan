<template>
  <div class="home">
    <Map3D class="bg"></Map3D>
<!--    <Map3D class="bg"></Map3D>-->
<!--    <CityModel></CityModel>-->
    <div class="site-title">
      <img src="~@/assets/images/home/title.png" alt="">
    </div>

    <ParticleFont class="particle-font" :route-font="routeFont" ref="particleFont"></ParticleFont>
    <div class="links" @mouseover="" flex>
      <router-link class="nav-item" to="/overview">
        <span @mouseover="routeFont = '系统概况'" @mouseleave="routeFont = ''">
          <img src="~@/assets/images/home/title_xtgk.png" alt="">
        </span>
      </router-link><br>
      <router-link class="nav-item" to="/summary">
        <span @mouseover="routeFont = '归集分析'" @mouseleave="routeFont = ''">
          <img src="~@/assets/images/home/title_fxpg.png" alt="">
        </span>
      </router-link><br>
      <router-link class="nav-item" to="/public">
        <span @mouseover="routeFont = '双公示'" @mouseleave="routeFont = ''">
          <img src="~@/assets/images/home/title_sgs.png" alt="">
        </span>
      </router-link><br>
      <router-link class="nav-item" to="/union">
        <span @mouseover="routeFont = '联合奖惩'" @mouseleave="routeFont = ''">
          <img src="~@/assets/images/home/title_lhjc.png" alt="">
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
  position relative
  width: 200px
  height: 200px
  display flex
  justify-content center
  &::before
    content ''
    display block
    width: 199px
    height: 199px
    position absolute
    background-repeat: no-repeat
    background-image: url('~@/assets/images/home/yuanquan.png')
    top: 0
    left: 0
    animation rotate 6s linear infinite
    z-index 10
  span
    position relative
    z-index 100

    width: 200px
    line-height: 200px
    text-align center
    display flex
    justify-content center
    align-items center
.links
  position absolute
  top: 65%
  left: 50%
  width: 1200px
  display flex
  justify-content space-between
  transform translate(-50%,-50%)
.site-title
  position absolute
  top: 200px
  left: 50%
  transform translateX(-50%)
.particle-font
  width: 100%
  height: 100%
  transform translateY(-2%)
@keyframes rotate{
  0% {
    transform-origin 50% 50%
    transform rotate(0deg)
  }
  50% {
    transform-origin 50% 50%
    transform rotate(180deg)
  }
  100% {
    transform-origin 50% 50%
    transform rotate(360deg)
  }
}
</style>
