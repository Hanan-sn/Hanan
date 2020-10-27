<template>
  <div class="card" flex="dir:col">
    <div class="card-title">
      <slot name="title"></slot>
    </div>
    <div class="card-content" flex="dir:col">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card'
  }
</script>

<style lang="stylus" scoped>
.card
  padding 20px
  box-sizing border-box
  border: 1px solid rgba(20,60,140,0.6)
  background-color: #072056
  color: #ffffff
  margin-bottom: 10px
  .card-title
    height 36px
    color #fff
    text-shadow 0 0 3px #ffffff
    font-weight: 700
    text-align center
    span
      font-size: 18px
      font-weight: 700
      color #fff
      line-height: 28px
  .card-content
    flex: 1
    width: 100%
</style>
