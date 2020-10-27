<template>
<div class="side-panel" flex="dir:col">
  <slot name="content"></slot>
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
  margin: 0 20px
</style>
