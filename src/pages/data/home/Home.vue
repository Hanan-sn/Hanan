<template>
  <div class="home">
    <div class="bg">
      <Earth3D />
    </div>
    Home<br>
    <router-link to="/overview">to overview</router-link><br>
    <router-link to="/summary">to summary</router-link><br>
    <router-link to="/public">to public</router-link><br>
    <router-link to="/union">to union</router-link><br>
    <router-link to="/map">to map</router-link><br>
  </div>
</template>
<script>
  import * as Three from 'three'
  import Earth3D from '../../../components/Animation3D/Earth3D'
  /* eslint-disable */
  export default {
    name: 'Home',
    components: {
      Earth3D
    }
  }
</script>

<style lang="stylus" scoped>
.bg
  position absolute
  top: 50%
  left: 50%
  transform translate(-50%, -50%)
</style>
