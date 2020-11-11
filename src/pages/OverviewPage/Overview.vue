<template>
    <div class="overview" flex="dir:col">
      <div class="top-wrapper" flex>
        <div class="border-box" flex="dir:col" style="width: 400px; box-sizing: border-box">
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
          <div class="border-box" style="width: 400px; box-sizing: border-box">
            <chart style="width: 100%; height: 100%;" theme="my" :options="unionPieOptions" />
          </div>
          <div class="border-box" flex-box="1">
          </div>
          <div class="border-box" style="width: 400px; box-sizing: border-box">

          </div>
        </div>
        <div class="inner-wrapper" flex-box="1" flex>
          <div class="border-box" style="width: 400px; box-sizing: border-box">
            <chart style="width: 100%; height: 100%;" theme="my" :options="exchangeBarOptions"></chart>
          </div>
          <div class="border-box" flex-box="1">

          </div>
          <div class="border-box" style="width: 400px;">

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
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          grid: {
            top: 'center',
            left: 'center'
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 1548, name: '搜索引擎' }
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
          legend: {
            data: ['蒸发量', '降水量', '平均温度'],
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
              name: '水量',
              axisLabel: {
                formatter: '{value} ml'
              }
            }
          ],
          series: [
            {
              name: '蒸发量',
              type: 'bar',
              data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
              name: '降水量',
              type: 'bar',
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            }
          ]
        }
      }
    },
    methods: {
      curring () {
        let args = Array.prototype.splice.call(arguments, 1)
      }
    }
  }
</script>

<style lang="stylus" scoped>
.overview
  .top-wrapper
    .border-box
      padding: 10px
      .num-box
        padding 10px 0 2px
        i
          &.num
            display inline-block
            vertical-align bottom
            font-size: 30px
            color #ffffff
            background-color: #c96857
            margin 0 4px
            padding 4px 10px
            -webkit-border-radius: 2px
            -moz-border-radius: 2px
            border-radius: 2px
      .num-large
        font-size: 30px
      .title-font-small
        font-size: 14px
      .unit
        font-size: 12px
</style>
