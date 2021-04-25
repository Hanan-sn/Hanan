<template>
<div class="rob-path">
  <img src="./rob_map.svg" alt="">
  <!--<img class="track" src="./rob_track.svg" alt="">-->
  <svg ref="track" class="track" xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny" width="800" height="30" viewBox="0 0 800 30" stroke-linecap="round" stroke-linejoin="round">
    <g id="line2_dwg_Polyline" fill="none" stroke-dasharray="20 1000" :stroke-dashoffset="pathLength"  stroke="red" stroke-width="4">
<!--      <path :stroke-dasharray="`${pathLength} 0`" class="path" d="M 799 1 400 1 378.58 4.95 346.69 25.32 326.11 29.08 1 29.08"/>-->
      <path class="path" d="M 799 1 400 1 378.58 4.95 346.69 25.32 326.11 29.08 1 29.08"/>
    </g>
  </svg>
  <div class="ball"></div>
  <!--<img ref="track" class="track" src="./track_line_2.svg" alt="">-->
</div>
</template>

<script>
export default {
name: "RobPath",
  mounted() {
    console.dir(this.$refs.track);
    console.log(this.pathLength);
  },
  props: {
    pathLength: {
      type: Number
    }
  }
}
</script>

<style lang="stylus" scoped>
.rob-path
  padding-top: 5%
  padding-left: 30px
  padding-right: 30px
  box-sizing border-box
  height: 90%
  display flex
  align-items center
  justify-content center
  position relative
  img, svg
    width: 820px
    height: 100%
    transform scaleY(1.6)
  .track
    position absolute
    width: 670px
    top: 45px
    left: 50%
    z-index 99
    transform translateX(-338px) scaleY(1.6)

</style>
