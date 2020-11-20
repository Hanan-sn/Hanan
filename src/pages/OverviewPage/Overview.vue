<template>
    <div class="overview" flex="dir:col">
      <div class="top-wrapper" flex>
        <div class="border-box" flex="dir:col">
          <i>数据归集总量</i>
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
        <div flex flex-box="1">
          <div class="border-box" flex-box="1" flex="dir:col justify:around">
            <span>
              <i class="title-font-small">自然人基础信息</i>
              <i class="unit">（条）</i>
            </span>
            <span>
              <i class="num-large" style="color: #c96857">6662</i>
            </span>
          </div>
          <div class="border-box" flex-box="1" flex="dir:col justify:around">
            <span>
              <i class="title-font-small">法人基础信息</i>
              <i class="unit">（条）</i>
            </span>
            <span>
              <i class="num-large">6662</i>
            </span>
          </div>
          <div class="border-box" flex-box="1" flex="dir:col justify:around">
            <span>
              <i class="title-font-small">自然人信用信息</i>
              <i class="unit">（条）</i>
            </span>
            <span>
              <i class="num-large">6662</i>
            </span>
          </div>
          <div class="border-box" flex-box="1" flex="dir:col justify:around">
            <span>
              <i class="title-font-small">法人信用信息</i>
              <i class="unit">（条）</i>
            </span>
            <span>
              <i class="num-large">6662</i>
            </span>
          </div>
          <div class="border-box" flex-box="1" flex="dir:col justify:around">
            <span>
              <i class="title-font-small">自然人人均数量</i>
              <i class="unit">（条）</i>
            </span>
            <span>
              <i class="num-large">6662</i>
            </span>
          </div>
          <div class="border-box" flex-box="1" flex="dir:col justify:around">
            <span>
              <i class="title-font-small">法人人均数量</i>
              <i class="unit">（条）</i>
            </span>
            <span>
              <i class="num-large">6662</i>
            </span>
          </div>
        </div>
      </div>
      <div class="main-wrapper" flex="dir:col" flex-box="1">
        <div class="inner-wrapper" flex-box="1" flex>
          <div class="border-box" style="width: 400px;">
            <i class="bb-title">联合奖惩</i>
            <div class="chart-container">
              <chart ref="unionPie" theme="my" :options="unionPieOptions" />
            </div>
          </div>
          <div class="border-box" flex-box="1">
            <i class="bb-title">资源信息分类统计</i>
            <div class="chart-container">
              <chart ref="classicBar" theme="my" :options="classicBarOptions"></chart>
            </div>
          </div>
          <div class="border-box" style="width: 500px;">
            <i class="bb-title">联合奖惩</i>
            <div class="show-board" flex>
              <div class="l-side">
                <div class="color-square" flex="justify:between align:center">
                  <span><i>红名单</i></span>
                  <span>
                    <i class="num">12000</i>
                    <i>(个)</i>
                  </span>
                </div>
                <div class="msg" flex="justify:between align:center">
                  <span>
                    <i>海关认证企业</i>
                  </span>
                  <span>
                    <i class="color-font">1501</i>
                    <i>(个)</i>
                  </span>
                </div>
                <div class="msg" flex="justify:between align:center">
                  <span>
                    <i>社会法人诚实守信</i>
                  </span>
                  <span>
                    <i class="color-font">1501</i>
                    <i>(个)</i>
                  </span>
                </div>
                <div class="msg" flex="justify:between align:center">
                  <span>
                    <i>A级纳税人</i>
                  </span>
                  <span>
                    <i class="color-font">1501</i>
                    <i>(个)</i>
                  </span>
                </div>
                <div class="msg" flex="justify:between align:center">
                  <span><i>优秀青年志愿者</i></span>
                  <span>
                    <i class="color-font">1501</i>
                    <i>(个)</i>
                  </span>
                </div>
              </div>
              <div class="r-side">
                <div class="color-square" style="background-color: #52c76c;" flex="justify:between align:center">
                  <span><i>黑名单</i></span>
                  <span>
                    <i class="num">12000</i>
                    <i>(个)</i>
                  </span>
                </div>
                <div class="msg" flex="justify:between align:center">
                  <span>
                    <i>失信被执行人</i>
                  </span>
                  <span>
                    <i class="color-font">1501</i>
                    <i>(个)</i>
                  </span>
                </div>
                <div class="msg" flex="justify:between align:center">
                  <span><i>拖欠农民工工资</i></span>
                  <span>
                    <i class="color-font">1501</i>
                    <i>(个)</i>
                  </span>
                </div>
                <div class="msg" flex="justify:between align:center">
                  <span><i>重大税收违法案件</i></span>
                  <span>
                    <i class="color-font">1501</i>
                    <i>(个)</i>
                  </span>
                </div>
                <div class="msg" flex="justify:between">
                  <span><i>严重失信债务人</i></span>
                  <span>
                    <i class="color-font">1501</i>
                    <i>(个)</i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="inner-wrapper" flex-box="1" flex>
          <div class="border-box" style="width: 400px;">
            <i class="bb-title">数据交换流向分析</i>
            <div class="chart-container">
              <chart ref="exchangeBar" theme="my" :options="exchangeBarOptions"></chart>
            </div>
          </div>
          <div class="border-box" flex-box="1">
            <i class="bb-title">数据交换流向分析</i>
            <div class="chart-container">
              <chart ref="exchangeLine" theme="my" :options="exchangeLineOptions"></chart>
            </div>
          </div>
          <div class="border-box" style="width: 500px;" flex="dir:col">
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
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Overview',
    data() {
      return {
        unionPieOptions: {
          tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
          },
          grid: {
            top: '20%',
            left: 'center'
          },
          series: [
            {
              type: 'pie',
              radius: '30%',
              label: {
                position: 'inside'
              },
              center: ['50%', '50%'],
              data: [
                { value: 250, name: '惩戒' },
                { value: 300, name: '激励' }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            },
            {
              type: 'pie',
              radius: ['35%', '60%'],
              center: ['50%', '50%'],
              label: {
                color: '#fff'
              },
              data: [
                { value: 100, name: '法人惩戒' },
                { value: 150, name: '自然人惩戒' },
                { value: 100, name: '法人激励' },
                { value: 200, name: '自然人激励' }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        },
        exchangeBarOptions: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          grid: {
            top: '20%'
          },
          legend: {
            data: ['蒸发量', '降水量'],
            bottom: 10
          },
          xAxis: [
            {
              type: 'category',
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '条',
              nameTextStyle: { color: '#fff' }
            }
          ],
          series: [
            {
              name: '归集',
              type: 'bar',
              data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
              name: '输出',
              type: 'bar',
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            }
          ]
        },
        classicBarOptions: {
          dataset: {
            source: [
              ['score', '条', 'product'],
              [89.3, 58212, '基础信息'],
              [57.1, 78254, '业务信息'],
              [74.4, 41032, '司法信息'],
              [50.1, 12755, '行政执法信息'],
              [89.7, 20145, '公共事业信息'],
              [68.1, 79146, '信用评级信息'],
              [19.6, 91852, '其他信息']
            ]
          },
          grid: {
            top: '20%',
            containLabel: true
          },
          xAxis: { name: '条', nameTextStyle: { color: '#fff' } },
          yAxis: { type: 'category' },
          series: [
            {
              type: 'bar',
              barWidth: 20,
              itemStyle: {
                barBorderRadius: [0, 10, 10, 0]
              },
              encode: {
                // Map the "amount" column to X axis.
                x: 'amount',
                // Map the "product" column to Y axis
                y: 'product'
              }
            }
          ]
        },
        exchangeLineOptions: {
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
    },
    mounted () {
      window.onresize = () => {
        this.winResizeListener()
      }
    },
    methods: {
      winResizeListener () {
        let t = null
        clearTimeout(t)
        t = setTimeout(() => {
          this.$refs.unionPie.resize()
          this.$refs.classicBar.resize()
          this.$refs.exchangeBar.resize()
          this.$refs.exchangeLine.resize()
        }, 300)
      }
    }
  }
</script>

<style lang="stylus" scoped>
.overview
  .border-box
    .show-board
      position absolute
      top: 50%
      left: 50%
      width: 100%
      transform translate(-50%, -50%)
      .color-square, .msg
        padding 10px 10px
      .color-square
        -webkit-border-radius: 4px
        -moz-border-radius: 4px
        border-radius: 4px
        background-color: #c86a5e
        padding 20px 10px
      .l-side, .r-side
        flex: 1
        padding 0 18px
        font-size: 12px
        .num
          font-size: 20px
          padding-right: 4px
        .color-font
          color #c86a5e
          font-size: 16px
          vertical-align center
          padding-right: 4px
    .num-large
      font-size: 30px
    .title-font-small
      font-size: 14px
    .unit
      font-size: 12px
    .chart-container
      position relative
      width: 100%
      height: 100%
    .echarts
      width: 100%;
      height: 100%;
      overflow hidden
      position absolute
      top: 0
      left: 0
</style>
