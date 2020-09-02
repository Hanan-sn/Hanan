<template>
  <div class="overview" flex>
    <div ref="earth" id="earth" class="earth"></div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Overview',
    data() {
      return {
      }
    },
    components: {
      // Panel
    },
    created() {},
    mounted() {},
    computed: {
      ...mapState({
        a: state => state.overview.a
      })
    },
    watch: {},
    methods: {}
  }
</script>

<style lang="stylus" scoped>
.earth
  width: 100%
  height: 100%
</style>
