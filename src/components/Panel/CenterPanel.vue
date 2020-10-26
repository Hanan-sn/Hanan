<template>
<div class="center-panel">
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
</style>
