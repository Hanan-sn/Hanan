<template>
    <div class="side-panel">
      <slot name="inner"></slot>
    </div>
</template>

<script>
    export default {
        name: 'SidePanel'
    }
</script>

<style lang="stylus" scoped>
  .side-panel
    width: 450px
    height: 100%
    color: #000
</style>
