<template>
  <div class="home">
    Home<br>
    <Map3DCloud class="bg"></Map3DCloud>
<!--    <Map3D class="bg"></Map3D>-->
<!--    <CityModel></CityModel>-->
    <div class="site-title">
      <i>信用大数据可视化分析</i>
    </div>
    <div class="links">
      <router-link class="nav-item" to="/overview">系统概况</router-link><br>
      <router-link class="nav-item" to="/summary">归集分析</router-link><br>
      <router-link class="nav-item" to="/public">双公示</router-link><br>
      <router-link class="nav-item" to="/union">联合奖惩</router-link><br>
<!--      <router-link class="nav-item" to="/map">to map</router-link><br>-->
    </div>
  </div>
</template>
<script>
  import Map3DCloud from '../../../components/Map3D/Map3DCloud'
  import CityModel from '../../../components/CityModel/CityModel'
  /* eslint-disable */
  export default {
    name: 'Home',
    data(){
      return {
      }
    },
    components: {
      Map3DCloud,
      CityModel
    },
    mounted(){},
    methods:{

    }
  }
</script>

<style lang="stylus" scoped>
.bg
  position absolute
  top: 50%
  left: 50%
  transform translate(-50%, -50%)
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
</style>
