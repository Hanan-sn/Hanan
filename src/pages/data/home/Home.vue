<template>
  <div class="home">
    Home<br>
    <Map3D class="bg"></Map3D>
    <router-link class="nav-item" to="/overview">to overview</router-link><br>
    <router-link class="nav-item" to="/summary">to summary</router-link><br>
    <router-link class="nav-item" to="/public">to public</router-link><br>
    <router-link class="nav-item" to="/union">to union</router-link><br>
    <router-link class="nav-item" to="/map">to map</router-link><br>
  </div>
</template>
<script>
  import Map3D from '../../../components/Map3D/Map3D'
  /* eslint-disable */
  export default {
    name: 'Home',
    data(){
      return {
      }
    },
    components: {
      Map3D
    },
    mounted(){},
    methods:{}
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
</style>
