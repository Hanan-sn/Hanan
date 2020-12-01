<template>
  <div class="home">
    <ConcatEarth />
    <Demo />
  </div>
</template>

<script>
  import ConcatEarth from '../../components/ConcatEarth/ConcatEarth'
  import Demo from '../../components/Particle/Demo'
  export default {
    name: 'Home',
    components: {
      ConcatEarth,
      Demo
    }
  }
</script>

<style lang="stylus" scoped>
  .home
    position absolute
    width: 100%
    height: 100%
    background-image linear-gradient(to right bottom ,#0bc7f8, #fb0461)
</style>
