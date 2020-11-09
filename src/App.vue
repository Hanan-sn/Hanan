<template>
  <div id="app" v-cloak>
    <div v-if="this.$route.path !== '/home'" class="page-title-wrapper">
      <Header />
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
  import Header from './components/Header/Header'

  export default {
    name: 'app',
    data() {
      return {
        router: this.$router
      }
    },
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
    },
    components: {
      Header
    }
  }
</script>
<style lang="stylus">
  [v-cloak] {
    display: none;
  }

  html, body
    width: 100%
    height: 100%
    padding: 0
    margin: 0

  #app
    background-color: #16171c
    width: 100%
    height: 100%
    color #fff

  .border-box
    border: 1px solid #232831
    margin: 8px
</style>
