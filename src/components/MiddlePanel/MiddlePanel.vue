<template>
  <div class="middle-panel">
    <slot name="outer"></slot>
    <slot name="inner"></slot>
  </div>
</template>

<script>
    export default {
        name: 'MiddlePanel'
    }
</script>

<style lang="stylus" scoped>
.middle-panel
  flex: 1
  height: 100%
  position relative
</style>
