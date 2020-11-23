<template>
  <div class="union" flex="dir:col">
    <div class="top-wrapper" flex>
      <div class="border-box" flex="dir:col" flex-box="1">
        <i>总计奖惩</i>
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
        <i>备忘录总数</i>
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
        <i>实施部门数量</i>
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
      <div flex-box="1" flex="dir:col">
        <div class="border-box" flex-box="1" flex="dir:col">
          <i class="bb-title">联合奖惩基本情况</i>
          <div class="show-board" flex flex-box="1" style="padding-top: 40px;">
            <div flex="dir:col" flex-box="1" style="margin-right: 10px;">
              <div class="show-item" flex="dir:col align:center justify:around">
                <span style="margin-bottom: 20px;"><i>自然人</i></span>
                <span><i class="num-style-1">15565</i><i>(个)</i></span>
              </div>
              <div class="show-item" flex-box="1" flex="dir:col justify:around align:center">
                <span><i>激励</i><i class="num-style-2">24561</i><i>（次）</i></span>
                <span><i>惩戒</i><i class="num-style-2">24561</i><i>（次）</i></span>
              </div>
            </div>
            <div flex="dir:col" flex-box="1">
              <div class="show-item" flex="dir:col align:center">
                <span style="margin-bottom: 20px;"><i>法人</i></span>
                <span><i class="num-style-1">15565</i><i>(个)</i></span>
              </div>
              <div class="show-item" flex-box="1" flex="dir:col justify:around align:center">
                <span><i>激励</i><i class="num-style-2">24561</i><i>（次）</i></span>
                <span><i>惩戒</i><i class="num-style-2">24561</i><i>（次）</i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div flex-box="1" flex="dir:col">
        <div class="border-box" flex-box="1" flex="dir:col">
          <i class="bb-title">联合奖惩趋势分析</i>
          <div class="chart-container" flex-box="1">
            <chart ref="unionLine" theme="my" :options="unionLineOptions" style="height: 100%; width: 100%;"></chart>
          </div>
        </div>
      </div>
      <div style="width: 500px;" flex="dir:col">
        <div class="border-box" flex-box="1" flex="dir:col">
          <i class="bb-title">黑名单退出趋势</i>
          <chart ref="quitLine" theme="my" :options="quitLineOptions" style="width: 100%; overflow: hidden" flex-box="1"></chart>
        </div>
      </div>
    </div>
    <div class="main-wrapper" flex style="height: 380px">
      <div flex-box="1" flex="dir:col">
        <div class="border-box" flex-box="1" flex>
          <i class="bb-title">备忘录执行趋势分析</i>
          <div class="special-divide-horizontal" flex>
            <chart ref="memoLine" theme="my" :options="memoLineOptions" flex-box="1"></chart>
          </div>
          <div class="special-divide-horizontal" flex>
            <div class="table-container" flex="dir:col">
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
      </div>
      <div style="width: 500px;" flex="dir:col">
        <div class="border-box" flex-box="1">
          <i class="bb-title">奖惩执行情况</i>
          <div class="table-container" style="padding: 40px 10px 10px" flex="dir:col">
            <div class="table" flex-box="1">
              <div class="table-header" flex="justify:between" style="top: 10px;">
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
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Union',
      data () {
          return {
            unionLineOptions: {
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                  label: {
                    backgroundColor: '#6a7985'
                  }
                }
              },
              legend: {
                data: ['惩戒', '激励']
              },
              grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis: [
                {
                  type: 'category',
                  boundaryGap: false,
                  data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                }
              ],
              yAxis: [
                {
                  type: 'value'
                }
              ],
              series: [
                {
                  name: '惩戒',
                  type: 'line',
                  smooth: false,
                  areaStyle: {},
                  data: [120, 132, 101, 134, 90, 230, 132, 101, 134, 90, 230, 210]
                },
                {
                  name: '激励',
                  type: 'line',
                  smooth: false,
                  areaStyle: {},
                  data: [60, 102, 91, 84, 90, 130, 200, 221, 94, 100, 130, 110]
                }
              ]
            },
            quitLineOptions: {
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                  label: {
                    backgroundColor: '#6a7985'
                  }
                }
              },
              grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis: [
                {
                  type: 'category',
                  boundaryGap: false,
                  data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                }
              ],
              yAxis: [
                {
                  type: 'value'
                }
              ],
              series: [
                {
                  type: 'line',
                  smooth: false,
                  stack: '总量',
                  areaStyle: {},
                  data: [120, 132, 101, 134, 90, 230, 132, 101, 134, 90, 230, 210]
                }
              ]
            },
            memoLineOptions: {
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                  label: {
                    backgroundColor: '#6a7985'
                  }
                }
              },
              legend: {
                data: ['反馈数']
              },
              grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis: [
                {
                  type: 'category',
                  boundaryGap: false,
                  data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                }
              ],
              yAxis: [
                {
                  type: 'value'
                }
              ],
              series: [
                {
                  name: '反馈数',
                  type: 'line',
                  smooth: false,
                  stack: '总量',
                  data: [120, 132, 101, 134, 90, 230, 132, 101, 134, 90, 230, 210]
                }
              ]
            },
            swiperOptions: {
              direction: 'vertical',
              slidesPerView: 7,
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
      },
      mounted () {
          window.onresize = this.winResizeListener
      },
      methods: {
        winResizeListener () {
          let t = null
          clearTimeout(t)
          t = setTimeout(() => {
            this.$refs.unionLine.resize()
            this.$refs.quitLine.resize()
            this.$refs.memoLine.resize()
          }, 300)
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .special-divide-horizontal
    box-sizing border-box
    position: relative;
    padding 20px
    width: 50%;
    overflow: hidden
  .show-board
    .show-item
      padding 10px 0
      background-color: #20242d
      -webkit-border-radius: 8px
      -moz-border-radius: 8px
      border-radius: 8px
      box-sizing border-box
      &:last-child
        margin-top: 10px
  .num-style-1
    color #c96857
    font-size: 28px
    padding 0 10px
    font-weight: 700
  .num-style-2
    padding 0 10px
    font-size: 28px
</style>
