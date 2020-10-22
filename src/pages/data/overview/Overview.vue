<template>
  <div class="overview" flex>
    <SpritModel />
  </div>
</template>

<script>
  import SpritModel from '../../../components/Animation3D/SpriteModel'
  import { mapState } from 'vuex'
  export default {
    name: 'Overview',
    data() {
      return {
      }
    },
    components: {
      SpritModel
    },
    created() {
      // 初始化页面数据
      // this.$store.dispatch('getOverview').then(()=>{
      //   this.numChange(this.$store.state.overview.total)
      // })
    },
    mounted() {
      // this.numChange(this.$store.state.overview.total)
    },
    computed: {
      ...mapState({
        a: state => state.overview.a
      })
    },
    watch: {
    },
    methods: {
    }
  }
</script>

<style lang="stylus" scoped>

</style>
