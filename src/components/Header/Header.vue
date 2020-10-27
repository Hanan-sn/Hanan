<template>
  <div class="header"><i>{{title}}</i></div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: '请传入专题名称'
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  height 70px
  background-image: url('~@/assets/images/home/top_bg.png')
  background-repeat: no-repeat;
  -webkit-background-size: 100% 100%
  background-size: 100% 100%
  text-align center
  padding-top: 16px
  box-sizing border-box
  i
    color: #00fff7;
    font-size 24px
    font-weight: 700
    letter-spacing 10px
</style>
