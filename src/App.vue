<template>
  <div id="app" v-cloak>
    <div v-if="this.$route.path !== '/home' && this.$route.path !== '/home2'" class="page-title-wrapper">
      <span class="page-title">
        {{ returnRouteName() }}
      </span>
      <span class="to-home">
          <router-link to="/home">返回</router-link>
      </span>
    </div>
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'app',
    methods: {
      returnRouteName() {
        let route = this.$route.path
        switch (route) {
          case '/overview':
            return '系统概况专题'
          case '/summary':
            return '数据归集专题'
          case '/public':
            return '双公示专题'
          case '/union':
            return '联合奖惩专题'
          case '/map':
            return '区域数据归集'
        }
      }
    }
  }
</script>
<style lang="stylus">
  [v-cloak] {
    display: none;
  }
  body, html
    display block
    min-height: 100%
    height: 100%
    margin: 0
    padding: 0
  canvas
    display block
    padding: 0
    margin: 0
  #app
    width: 100%
    height: 100%
    display flex
    flex-direction column
    div:not(.page-title-wrapper)
      flex: 1
</style>
