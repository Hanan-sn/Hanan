<template>
<div class="center-panel" flex="dir:col">
  <slot name="content"></slot>
</div>
</template>

<script>
export default {
name: 'CenterPanel'
}
</script>

<style lang="stylus" scoped>
.center-panel
  flex: 1
  height: 100%
</style>
