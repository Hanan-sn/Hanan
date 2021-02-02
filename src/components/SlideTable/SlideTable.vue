<template>
  <div class="slide-table">
    <div class="th-wrapper">
      <span v-for="(item, index) in header" :key="index">{{item.title}}</span>
    </div>
    <div class="slide-container" :style="`overflow-y: hidden; height: ${bodyHeight}px;`"
         @mouseenter="flag = true" @mouseleave="flag = false">
      <div class="slide-inner" ref="slideList">
        <div class="td-container">
          <div class="td-wrapper" v-for="(item, index) in body" :key="index">
            <span>{{item.name}}</span>
            <span v-if="item.count">{{item.count}}</span>
            <span v-if="item.info">{{item.info}}</span>
            <span v-if="item.percent">{{item.percent}}</span>
            <span v-if="href"><a :href="item.href">{{item.text}}</a></span>
            <span v-if="item.event">{{item.event}}</span>
            <span v-if="item.dept">{{item.dept}}</span>
            <span v-if="item.time">{{item.time}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlideTable',
  data() {
    return {
      flag: false
    }
  },
  props: {
    header: Array,
    body: Array,
    bodyHeight: Number,
    href: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  mounted() {
    this.initSlideTable()
  },
  methods: {
    initSlideTable() {
      let dom = this.$refs.slideList
      let { firstChild } = dom.cloneNode(true)
      dom.appendChild(firstChild)
      let i = 0
      let _self = this
      function animate() {
        if (!_self.flag) {
          if (i < firstChild.clientHeight) {
            i += 0.3
          } else {
            i = 0
          }
          dom.style['transform'] = `translateY(${-i}px)`
        }
        requestAnimationFrame(animate)
      }
      animate()
    }
  }
}
</script>

<style lang="stylus" scoped>
.slide-table
  line-height: 32px
  .th-wrapper
    display flex
    background-color: #042f40
    span
      flex 1
      text-align center
  .slide-container
    .slide-inner
      .td-container
        .td-wrapper
          display flex
          &:nth-child(even)
            background-color: #042f40
          span
            flex: 1
            padding 0 8px
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
            &:not(:first-child)
              text-align center
  a
    color: #57dacc;
    text-decoration none;
</style>
