<template>
  <div class="card">
    <div class="card-title">
      <slot name="title"></slot>
    </div>
    <div class="count-wrapper">
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
  padding 10px 20px 0
  display flex
  flex-direction column
  .card-title
    line-height: 40px
    color #fff
    font-size: 16px
    background-image: url('~@/assets/images/common/title_top.png')
    background-repeat: no-repeat
    background-size: 100% 40px;
    padding: 0 20px
    margin-bottom: 20px
  .count-wrapper
    flex: 1
</style>
