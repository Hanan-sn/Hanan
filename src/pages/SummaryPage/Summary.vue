<template>
  <div class="summary" flex="dir:col">
    <div class="top-wrapper" flex>
      <div class="border-box" flex="dir:col" flex-box="1">
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
      <div class="border-box" flex="dir:col" flex-box="1">
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
      <div class="border-box" flex="dir:col" flex-box="1">
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
    </div>
    <div class="main-wrapper" flex flex-box="1">
      <div  style="width: 400px;" flex="dir:col">
        <div class="border-box" flex-box="1" flex="dir:col">
          <i class="bb-title">联合奖惩</i>
          <chart ref="classicBar" theme="my" :options="classicBarOptions" flex-box="1" style="width: 100%;"></chart>
        </div>
        <div class="border-box" flex-box="1" flex="dir:col">
          <i class="bb-title">部门数据归集统计分析</i>
          <div class="table-container" style="padding: 50px 10px 10px" flex="dir:col" flex-box="1">
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
      <div flex-box="1" flex="dir:col">
        <div class="border-box" flex-box="1" flex="dir:col">
          <i class="bb-title">数据归集情况</i>
          <div class="show-board" flex="justify:between">
            <div v-for="(item, index) in [1,2,3,4]" :key="index" class="show-item" flex-box="1" flex="dir:col justify:around align:center">
              <span><i>自然人数据总量</i></span>
              <span><i class="num">565854</i><i>（条）</i></span>
            </div>
          </div>
          <Map style="width: 100%" flex-box="1" />
        </div>
      </div>
      <div style="width: 400px;" flex="dir:col">
        <div class="border-box" flex-box="1" flex="dir:col">
          <i class="bb-title">自然人资源数据分类统计</i>
          <chart ref="unionPie" theme="my" :options="unionPieOptions" flex-box="1" style="width: 100%;"></chart>
        </div>
        <div class="border-box" flex-box="1" flex="dir:col">
          <i class="bb-title">最新填报部门</i>
          <div class="table-container" style="padding: 50px 10px 10px" flex="dir:col" flex-box="1">
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
  import Map from '../../components/Map/Map'
  import 'echarts/map/js/china'
  export default {
    name: 'Summary',
    data () {
      return {
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
              radius: '40%',
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
              radius: ['50%', '60%'],
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
    components: {
      Map
    }
  }
</script>

<style lang="stylus" scoped>
.show-board
  height: 100px
  padding-top: 50px
  .show-item
    height: 100px
    box-sizing border-box
    padding 10px 0
    -webkit-border-radius: 8px
    -moz-border-radius: 8px
    border-radius: 8px
    background-color: #20242d
    margin 0 10px
    .num
      font-size: 28px
      color #c96858
</style>
