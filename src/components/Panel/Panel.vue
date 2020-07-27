<template>
  <div class="panel" flex="column">
    <slot name="outer"></slot>
    <div class="light-bg">
      <slot name="inner"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Panel'
  }
</script>

<style lang="stylus">
  $lightBgc = #1f2e4f
  $lightBdc = rgba(2, 203, 255, .1)
  $darkShadowColor = rgba(0,0,0,0.4)
  $fontColor = #0b6afe
  $bdrs = 4px
  $bdw = 2px
  $bdh = 2px
  .panel
    box-sizing border-box
    padding 0 20px
    margin: 15px
    width: 100%
    .light-bg
      width: 100%
      height: 100%
</style>
