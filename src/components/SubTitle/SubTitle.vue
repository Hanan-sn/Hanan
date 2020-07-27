<template>
    <div class="sub-title">
      <template></template>
    </div>
</template>

<script>
    export default {
        name: 'SubTitle'
    }
</script>

<style lang="stylus" scoped>
.sub-title
  position relative
  &::before
    background-color: #165cb2
    content: ''
    display block
    position absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    transform skew(-30deg)
  &::after
    background-color: #0db7eb
    content: ''
    display block
    position absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    transform skew(-30deg)
</style>
