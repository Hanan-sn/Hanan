<template>
  <div class="overview" flex>
    <div class="base-wrapper" flex>
      <div class="panel" flex-box="1" flex="dir:col">
        <div class="top" flex flex-box="1">
          <div class="square" style="width: 500px">
            <div class="title"><i>联合奖惩</i></div>
            <div class="card-wrapper" flex="justify:around">
              <div class="item">
                <div class="line">
                  <i class="num">3256</i>
                  <i>（单位）</i>
                </div>
                <div style="margin-bottom: 20px;">
                  <i>备忘录数量</i>
                </div>
                <img src="~@/assets/images/large-width/memo.png" alt="">
              </div>
              <div class="item">
                <div class="line">
                  <i class="num">3256</i>
                  <i>（单位）</i>
                </div>
                <div style="margin-bottom: 20px;">
                  <i>措施数量</i>
                </div>
                <img src="~@/assets/images/large-width/tresure.png" alt="">
              </div>
              <div class="item">
                <div class="line">
                  <i class="num">3256</i>
                  <i>（单位）</i>
                </div>
                <div style="margin-bottom: 20px;">
                  <i>实施部门数量</i>
                </div>
                <img src="~@/assets/images/large-width/implement_dept.png" alt="">
              </div>
            </div>
            <div class="chart-container">
              <chart :options="pieOption" style="width: 100%; height: 300px;"></chart>
            </div>
          </div>
          <div class="square" flex-box="1">
            <div class="title"><i>信用报告查询分析趋势</i></div>
            <div class="divide-wrapper" flex>
              <div class="half" flex-box="1" flex="dir:col align:center">
                <img src="~@/assets/images/large-width/data_exchange.png" alt="">
                <span style="display: flex; flex-direction: column">
                  <span>
                    <i>交换数据总量</i>
                  </span>
                  <span>
                    <i class="num">8984</i>
                    <i>（条）</i>
                  </span>
                </span>
              </div>
              <div class="half" flex-box="1" flex="dir:col align:center">
                <img src="~@/assets/images/large-width/data_exchange.png" alt="">
                <span style="display: flex; flex-direction: column">
                  <span>
                    <i>交换数据总量</i>
                  </span>
                  <span>
                    <i class="num">8984</i>
                    <i>（条）</i>
                  </span>
                </span>
              </div>
            </div>
            <div class="divide-wrapper" flex>
              <div class="half outer-shader" flex-box="1" flex="dir:col">
                <span><i class="num">1234</i><i>（个）</i></span>
                <span><i>归集数据量</i></span>
                <span><i>正确率</i><i class="percent">80%</i></span>
              </div>
              <div class="half outer-shader" flex-box="1" flex="dir:col">
                <span><i class="num">1234</i><i>（个）</i></span>
                <span><i>归集数据量</i></span>
                <span><i>正确率</i><i class="percent">80%</i></span>
              </div>
            </div>
            <div class="chart-container">
              <chart :options="barOption" style="width: 100%; height: 300px;"></chart>
            </div>
          </div>
        </div>
        <div class="bot">
          <div class="square" style="height: 400px;">
            <div class="title"><i>数据提报部门</i></div>
            <div class="slide-table-container"
                 @mouseenter="tableFlag = false"
                 @mouseleave="tableFlag = true">
              <div class="slide-table-header">
                <div class="row" flex>
                  <div class="cell">部门名称</div>
                  <div class="cell">数量（条）</div>
                  <div class="cell">入库率</div>
                </div>
              </div>
              <div class="hidden-outer">
                <div class="slide-table-body" ref="slideTableBody">
                  <div class="slide-virtual">
                    <div class="row" v-for="(item, index) in tableList1" :key="index" flex>
                      <div class="cell">{{item.dept}}</div>
                      <div class="cell">{{item.count}}</div>
                      <div class="cell">{{item.percent}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel" flex-box="1">
        <div class="data-total-count">
          <p>数据归集总量</p>
          <div>
            <span v-for="(num, index) in totalList" :key="index">{{ num }}</span>
          </div>
        </div>
        <div class="nav">
          <div class="top-title">
            数据概览
          </div>
          <div class="bot">
            <div class="item" v-for="(nav, index) in navslist " :key="index">
              <div>{{nav.name}}</div>
              <div>{{nav.count}}</div>
            </div>
          </div>
        </div>
        <Map style="height: 100%"></Map>
        <!--<ShaderStore class="shader-bg"></ShaderStore>-->
      </div>
      <div class="panel" flex-box="1" flex="dir:col">
        <div class="top square" flex-box="1">
          <div class="title"><i>红黑名单统计</i></div>
          <div flex>
            <div flex="align:center" flex-box="1">
              <img src="~@/assets/images/large-width/red_list.png" alt="">
              <span><i>红名单</i><i class="num">12456</i><i>（个）</i></span>
            </div>
            <div flex=" align:center" flex-box="1">
              <img src="~@/assets/images/large-width/data.png" alt="">
              <span><i>黑名单</i><i class="num">12456</i><i>（个）</i></span>
            </div>
          </div>
          <div class="red-black-list" flex>
            <div class="list red hidden-outer" flex-box="1"
                 @mouseenter="tableFlag2 = false"
                 @mouseleave="tableFlag2 = true">
              <div class="slide-table-body" ref="slideTableBody2">
                <div class="slide-virtual">
                  <div class="row" v-for="(item, index) in tableList1" :key="index" flex>
                    <div class="cell">{{item.dept}}</div>
                    <div class="cell">{{item.count}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="list black hidden-outer" flex-box="1"
                 @mouseenter="tableFlag3 = false"
                 @mouseleave="tableFlag3 = true">
              <div class="slide-table-body" ref="slideTableBody3">
                <div class="slide-virtual">
                  <div class="row" v-for="(item, index) in tableList1" :key="index" flex>
                    <div class="cell">{{item.dept}}</div>
                    <div class="cell">{{item.count}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bot" flex>
          <div class="square" style="height: 600px;" flex-box="1" flex="dir:col">
            <div class="title"><i>资源信息分类统计</i></div>
            <div class="chart-container" flex-box="1">
              <chart :options="barClassicOption" style="width: 100%; height: 100%;"></chart>
            </div>
          </div>
          <div class="square" style="height: 600px;" flex-box="1" flex="dir:col">
            <div class="title"><i>联合奖惩</i></div>
            <div class="chart-container" flex-box="1">
              <chart :options="areaOption" style="width: 100%; height: 100%;"></chart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import ShaderStore from '../../components/Shader/ShaderStore'
  import Map from '../../components/Map/Map'
  import Echarts from 'vue-echarts'
  export default {
    name: 'Overview',
    data() {
      return {
        totalList: ['1', '2', '3', '4', '5', '6', '7', '8'],
        navslist: [
          { name: '自然人基础信息', count: 152345 },
          { name: '法人基础信息', count: 152345 },
          { name: '自然人基础信息', count: 152345 },
          { name: '自然人人均数量', count: 152345 },
          { name: '法人人均数量', count: 152345 }
        ],
        pieOption: {
          color: ['#4066f3', '#10cff1', '#ef8e2e', '#ef3a3a'],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          series: [
            {
              name: '法人自然人',
              type: 'pie',
              radius: ['55%', '70%'],
              avoidLabelOverlap: false,
              label: {
                color: '#ffffff'
              },
              data: [
                { value: 335, name: '自然人惩戒' },
                { value: 310, name: '法人惩戒' },
                { value: 234, name: '法人激励' },
                { value: 135, name: '自然人激励' }
              ]
            },
            {
              name: '惩戒激励',
              type: 'pie',
              radius: '45%',
              avoidLabelOverlap: false,
              label: {
                show: true,
                position: 'inside'
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 645, name: '惩戒' },
                { value: 369, name: '激励' }
              ]
            }
          ]
        },
        tableList1: [
          { dept: '部门1', count: 100000, percent: '10%' },
          { dept: '部门2', count: 100000, percent: '10%' },
          { dept: '部门3', count: 100000, percent: '10%' },
          { dept: '部门4', count: 100000, percent: '10%' },
          { dept: '部门5', count: 100000, percent: '10%' },
          { dept: '部门6', count: 100000, percent: '10%' },
          { dept: '部门7', count: 100000, percent: '10%' },
          { dept: '部门8', count: 100000, percent: '10%' }
        ],
        tableList2: [
          { dept: '部门名称1', count: 1000 },
          { dept: '部门名称2', count: 1000 },
          { dept: '部门名称3', count: 1000 },
          { dept: '部门名称4', count: 1000 },
          { dept: '部门名称5', count: 1000 },
          { dept: '部门名称6', count: 1000 },
          { dept: '部门名称7', count: 1000 },
          { dept: '部门名称8', count: 1000 }
        ],
        tableFlag: true,
        tableFlag2: true,
        tableFlag3: true,
        barOption: {
          color: [
            new Echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [{ offset: 0, color: '#00baf7' },
                { offset: 0.5, color: '#00baf7' },
                { offset: 1, color: '#041235' }]
            ),
            new Echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [{ offset: 0, color: '#2748cd' },
                { offset: 0.5, color: '#2748cd' },
                { offset: 1, color: '#041235' }]
            )
          ],
          tooltip: {},
          grid: {
            top: 20
          },
          dataset: {
            dimensions: ['product', '2015', '2016'],
            source: [
              { product: '1月', '2015': 43.3, '2016': 85.8 },
              { product: '2月', '2015': 83.1, '2016': 73.4 },
              { product: '3月', '2015': 81.4, '2016': 65.2 },
              { product: '4月', '2015': 86.4, '2016': 65.2 },
              { product: '5月', '2015': 84.4, '2016': 65.2 },
              { product: '6月', '2015': 82.4, '2016': 65.2 },
              { product: '7月', '2015': 85.4, '2016': 65.2 },
              { product: '8月', '2015': 82.4, '2016': 65.2 },
              { product: '9月', '2015': 82.4, '2016': 65.2 },
              { product: '10月', '2015': 81.4, '2016': 65.2 },
              { product: '11月', '2015': 88.4, '2016': 65.2 },
              { product: '12月', '2015': 82.4, '2016': 65.2 }
            ]
          },
          legend: {
            bottom: 10,
            textStyle: {
              color: '#fff'
            }
          },
          xAxis: {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: '#2c3858'
              }
            }
          },
          yAxis: {
            axisLine: {
              lineStyle: {
                color: '#2c3858'
              }
            },
            splitLine: {
              lineStyle: {
                color: '#2c3858'
              }
            }

          },
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [
            {
              type: 'bar'
            },
            { type: 'bar' }
          ]
        },
        barClassicOption: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'
              // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value'
          },
          yAxis: {
            type: 'category',
            data: ['基础信息', '业务信息', '司法信息', '行政执法信息', '公共事业信息', '信用评级信息', '其他信息']
          },
          series: [
            {
              name: '一级分类',
              type: 'bar',
              stack: '总量',
              label: {
                show: true,
                position: 'insideRight'
              },
              data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
              name: '二级分类',
              type: 'bar',
              stack: '总量',
              label: {
                show: true,
                position: 'insideRight'
              },
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '三级分类',
              type: 'bar',
              stack: '总量',
              label: {
                show: true,
                position: 'insideRight'
              },
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '四级分类',
              type: 'bar',
              stack: '总量',
              label: {
                show: true,
                position: 'insideRight'
              },
              data: [150, 212, 201, 154, 190, 330, 410]
            }
          ]
        },
        areaOption: {
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
          }]
        }
      }
    },
    components: {
      // ShaderStore,
      Map
    },
    mounted () {
      /* window.onresize = () => {
        this.winResizeListener()
      } */
      this.autoSlide()
      this.autoSlide(2)
      this.autoSlide(3)
    },
    methods: {
      /* winResizeListener () {
        let t = null
        clearTimeout(t)
        t = setTimeout(() => {
          // this.$refs.unionPie.resize()
          // this.$refs.classicBar.resize()
          // this.$refs.exchangeBar.resize()
          // this.$refs.exchangeLine.resize()
        }, 300)
      } */
      autoSlide(index, m) {
        // console.dir(this.$refs.slideTableBody)
        const flag = index || ''
        const dom = this.$refs['slideTableBody' + flag]
        const parent = dom.parentNode
        const slideItem = dom.childNodes[0]
        const copy = slideItem.cloneNode(true)
        let max = m || slideItem.children.length * 36
        parent.style.height = max + 'px'
        parent.style.overflow = 'hidden'
        dom.appendChild(copy)
        let top = 0
        const self = this
        function animate() {
          if (self['tableFlag' + flag]) {
            if (top < max) {
              top += 0.3
            } else {
              top = 0
            }
          }
          dom.style.transform = `translateY(-${top}px)`
          requestAnimationFrame(animate)
        }
        animate()
      }
    }
  }
</script>

<style lang="stylus" scoped>
.overview
  width: 100%
  height: 100%
.base-wrapper
  height: 100%
  .bot
    .square
      .title
        margin-bottom: 20px
.panel
  height: 100%
  position relative
.data-total-count
  position absolute
  right: 0
  top: 20px
  > div
    > span
      margin 0 4px
      padding 6px 10px
      font-size: 32px
      font-weight: 700
      border: 1px solid #0184dd
      -webkit-border-radius: 4px
      -moz-border-radius: 4px
      border-radius: 4px
.nav
  width 160px
  position absolute
  left: 0
  top: 20px
  z-index 20
  .top-title
    background-image: url("~@/assets/images/large-width/title_bg.png")
    background-repeat: no-repeat
    height: 78px
    width: 160px
    line-height: 54px
    padding-left: 34px
    font-size: 18px
  .bot
    .item
      width: 140px
      text-align center
      background-color: #031e43
      border: 1px solid #032852
      margin-bottom: 10px
      line-height: 30px
      padding 4px 0
      box-shadow 0 0 6px #032f71 inset
.square
  background-color: #041235
  margin 10px
  line-height: 30px
  .title
    background-image: url('~@/assets/images/large-width/title2_bg.png')
    background-repeat: no-repeat
    background-position: center 0;
    text-align center
    line-height: 40px
  .card-wrapper
    padding-top: 30px
    .item
      display flex
      flex-direction column
      align-items center

  .chart-container
    position relative
    height: 300px
  .outer-shader
    box-shadow 0 0 6px #194c86 inset
    margin 10px
    padding 10px
.slide-table-container
  width 100%
  box-sizing border-box
  padding 0 10px
  .row
    display flex
    height: 36px
    .cell
      flex: 1
      padding-left: 60px
  .slide-table-header
    .row
      background-color: #02285c
  .slide-table-body
    .row:nth-child(even)
      background-color: #02285c

.num
  font-weight: 700
  font-size: 26px
  color #64e8fe
.red-black-list
  .list
    padding 10px
    .slide-table-body
      .slide-virtual
        .row
          line-height: 36px
          display flex
          justify-content space-around
          &:nth-child(odd)
            background-color: #03285c
    // &.red
</style>
