<template>
  <div class="middle-panel">
      <slot name="inner"></slot>
      <slot name="outer"></slot>
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
</style>
