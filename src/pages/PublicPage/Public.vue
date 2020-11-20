<template>
  <div class="public" flex="dir:col">
    <div class="top-wrapper" flex>
      <div class="border-box" flex="dir:col" flex-box="1">
        <i>法人行政许可</i>
        <span class="num-box">
            <i class="num">1</i>
            <i class="num">2</i>
            <i class="num">3</i>
            <i class="num">4</i>
            <i class="num">5</i>
            <i class="num">6</i>
            <i>条</i>
          </span>
      </div>
      <div class="border-box" flex="dir:col" flex-box="1">
        <i>法人行政处罚</i>
        <span class="num-box">
            <i class="num">1</i>
            <i class="num">2</i>
            <i class="num">3</i>
            <i class="num">4</i>
            <i class="num">5</i>
            <i class="num">6</i>
            <i>条</i>
          </span>
      </div>
      <div class="border-box" flex="dir:col" flex-box="1">
        <i>自然人行政许可</i>
        <span class="num-box">
            <i class="num">1</i>
            <i class="num">2</i>
            <i class="num">3</i>
            <i class="num">4</i>
            <i class="num">5</i>
            <i class="num">6</i>
            <i>条</i>
          </span>
      </div>
      <div class="border-box" flex="dir:col" flex-box="1">
        <i>自然人行政处罚</i>
        <span class="num-box">
            <i class="num">1</i>
            <i class="num">2</i>
            <i class="num">3</i>
            <i class="num">4</i>
            <i class="num">5</i>
            <i class="num">6</i>
            <i>条</i>
          </span>
      </div>
    </div>
    <div class="main-wrapper" flex flex-box="1">
      <div  style="width: 400px;" flex="dir:col">
        <div class="border-box" flex-box="1">
          <i class="bb-title">部门双公示数据统计情况</i>
          <div class="table-container" flex="dir:col" flex-box="1">
            <div class="table" flex-box="1">
              <div class="table-header" flex="justify:between">
                <span>部门名称</span>
                <span>数量（条）</span>
                <span>入库率</span>
              </div>
              <swiper style="height: 100%; position: relative" :options="swiperOptions">
                <swiper-slide class="slide-item" v-for="(item, index) in list" :key="index">
                  <div class="row">{{item.label+ index}}</div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
        <div class="border-box" flex-box="1">
          <i class="bb-title">双公示数据7天提报率</i>
        </div>
      </div>
      <div flex-box="1" flex="dir:col">
        <div class="border-box" flex-box="1">
          <i class="bb-title">数据归集情况</i>
        </div>
        <div class="border-box" flex-box="1">
          <i class="bb-title">数据提报部门</i>
          <div class="table-container" flex="dir:col" flex-box="1">
            <div class="table" flex-box="1">
              <div class="table-header" flex="justify:between">
                <span>部门名称</span>
                <span>数量（条）</span>
                <span>入库率</span>
              </div>
              <swiper style="height: 100%; position: relative" :options="swiperOptions">
                <swiper-slide class="slide-item" v-for="(item, index) in list" :key="index">
                  <div class="row">{{item.label+ index}}</div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
      <div style="width: 400px;" flex="dir:col">
        <div class="border-box" flex-box="1">
          <i class="bb-title">自然人资源数据分类统计</i>
        </div>
        <div class="border-box" flex-box="1">
          <i class="bb-title">最新填报部门</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'Public',
      data () {
          return {
            swiperOptions: {
              direction: 'vertical',
              slidesPerView: 8,
              loop: true,
              autoplay: true
            },
            list: [
              {
                label: '模拟内容'
              },
              {
                label: '模拟内容'
              },
              {
                label: '模拟内容'
              },
              {
                label: '模拟内容'
              },
              {
                label: '模拟内容'
              },
              {
                label: '模拟内容'
              },
              {
                label: '模拟内容'
              },
              {
                label: '模拟内容'
              }
            ]
          }
      }
    }
</script>

<style scoped>

</style>
