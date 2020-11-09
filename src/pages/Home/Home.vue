<template>
  <div class="home">
    <div class="links">
      <router-link to="/overview">系统概况专题</router-link>
      <router-link to="/summary">数据归集专题</router-link>
      <router-link to="/public">双公示专题</router-link>
      <router-link to="/union">联合奖惩专题</router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style lang="stylus" scoped>
.home
  .links
    display flex
    flex-direction column

</style>
