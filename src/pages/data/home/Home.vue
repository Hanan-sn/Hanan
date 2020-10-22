<template>
  <div class="home">
    <div class="header"><i>信用大数据可视化分析</i></div>
    <div class="bg">
      <Earth3D />
    </div>
<!--    Home<br>-->
<!--    <router-link to="/overview">to overview</router-link><br>-->
<!--    <router-link to="/summary">to summary</router-link><br>-->
<!--    <router-link to="/public">to public</router-link><br>-->
<!--    <router-link to="/union">to union</router-link><br>-->
<!--    <router-link to="/map">to map</router-link><br>-->
    <div class="swiper-menu">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <router-link to="/overview"><div class="item" flex="dir:col align:center">
            <img src="~@/assets/images/home/icon_xtgk.png" alt="">
            <i>系统概况</i>
          </div></router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/summary"><div class="item" flex="dir:col align:center">
            <img src="~@/assets/images/home/icon_sjcj.png" alt="">
            <i>数据归集</i>
          </div></router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/public"><div class="item" flex="dir:col align:center">
            <img src="~@/assets/images/home/icon_sgs.png" alt="">
            <i>双公示</i>
          </div></router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/union"><div class="item" flex="dir:col align:center">
            <img src="~@/assets/images/home/icon_lhjc.png" alt="">
            <i>联合奖惩</i>
          </div></router-link>
        </swiper-slide>
        <!--<SwiperSlide>
          <img src="~@/assets/images/home/icon_sgs.png" alt="">
          <router-link to="/map">to map</router-link>
        </SwiperSlide>-->
      </swiper>
    </div>
  </div>
</template>
<script>
  import * as Three from 'three'
  import Earth3D from '../../../components/Animation3D/Earth3D'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  /* eslint-disable */
  export default {
    name: 'Home',
    data(){
      return {
        swiperOptions:{
          direction : 'horizontal',
          loop: true, // 循环模式选项
          effect : 'coverflow',
          slidesPerView: 3,
          autoPlay: {}
        }
      }
    },
    computed:{
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    components: {
      Earth3D,
      Swiper,
      SwiperSlide
    }
  }
</script>

<style lang="stylus" scoped>
.bg
  position absolute
  top: 50%
  left: 50%
  transform translate(-50%, -50%)
  z-index 1
.swiper-menu
  position absolute
  top: 50%
  left: 50%
  transform translate(-50%, -50%)
  z-index 2
  overflow hidden
  width 1000px
  height 340px
a
  text-decoration none
i
  font-style normal
.item
  width 100%
  height: 300px
  overflow hidden
  background-image: url('~@/assets/images/home/kuang.png')
  -webkit-background-size: 100% 100%
  background-size: 100% 100%
  background-repeat: no-repeat;
  img
    width: 200px
    margin: 40px auto 0
    height: auto
  i
    color: #00fff7
    line-height: 36px
.home
  background-image: url('~@/assets/images/home/bg.jpg')
  -webkit-background-size: cover
  background-size: cover
  height: 100%
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
