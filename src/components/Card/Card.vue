<template>
  <div class="card" flex="column">
    <div class="card-title">
      <span class="font"><slot name="title"></slot></span>
      <span class="rect-1"></span>
      <span class="rect-2"></span>
    </div>
    <div class="count-wrapper" flex-box="1">
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
  $lightBgc = #1f2e4f
  $cardBgc = #122849
  $darkShadowColor = rgba(0,0,0,0.4)
  $fontColor = #0b6afe
  $bdrs = 4px
  $bdw = 2px
  $bdh = 2px
  .card
    box-shadow 1px 1px 10px $darkShadowColor
    background-color: $cardBgc
    margin-bottom: 20px
    -webkit-border-radius: $bdrs
    -moz-border-radius: $bdrs
    border-radius: $bdrs
    padding 10px
    &:last-child
      margin-bottom: 0
  .card-title
    background-repeat: no-repeat
    background-position: left bottom
    height 50px
    line-height: 50px
    margin-bottom: 6px
    width 100%
    position relative
    padding-left: 80px
    box-sizing border-box
    .font
      position relative
      z-index 10
      display inline-block
      font-weight: 700
      font-size: 20px
      background: linear-gradient(to bottom, #fff 50%, #6290ff 100%);
      -webkit-background-clip: text;
      color: transparent;
    .rect-1
      display block
      position absolute
      top: 10px
      left: 10px
      width: 36px
      height: 24px
      background-color: #31d1e9
      transform skew(30deg)
    .rect-2
      display block
      position absolute
      top: 14px
      left: 20px
      width: 44px
      height: 30px
      background-color: #0679d4
      transform skew(30deg) scale(0.8)
  .light-bg
    flex 1
    background-color: $lightBgc
    box-shadow 2px 2px 10px $darkShadowColor
    position relative
    padding 10px 20px
    .light-corner
      content: ''
      display block
      position absolute
      width 8px
      height: 8px
      &:nth-of-type(1)
        top: 0
        left: 0
        border-top: $bdh solid $fontColor
        border-left: $bdw solid $fontColor
        -webkit-border-radius: $bdrs 0 0 0
        -moz-border-radius: $bdrs 0 0 0
        border-radius: $bdrs 0 0 0
        transform translate(-1px, -1px)
      &:nth-of-type(2)
        top: 0
        right: 0
        border-top: $bdh solid $fontColor
        border-right: $bdw solid $fontColor
        -webkit-border-radius: 0 $bdrs 0 0
        -moz-border-radius: 0 $bdrs 0 0
        border-radius: 0 $bdrs 0 0
        transform translate(1px, -1px)

      &:nth-of-type(3)
        bottom: 0
        left: 0
        border-bottom: $bdh solid $fontColor
        border-left: $bdw solid $fontColor
        -webkit-border-radius: 0 0 0 $bdrs
        -moz-border-radius: 0 0 0 $bdrs
        border-radius: 0 0 0 $bdrs
        transform translate(-1px, 1px)

      &:nth-of-type(4)
        bottom: 0
        right: 0
        border-bottom: $bdh solid $fontColor
        border-right: $bdw solid $fontColor
        -webkit-border-radius: 0 0 $bdrs 0
        -moz-border-radius: 0 0 $bdrs 0
        border-radius: 0 0 $bdrs 0
        transform translate(1px, 1px)

</style>
