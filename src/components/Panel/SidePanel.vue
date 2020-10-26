<template>
<div class="side-panel">
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
  margin: 0 20px
</style>
