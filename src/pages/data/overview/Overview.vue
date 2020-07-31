<template>
  <div class="overview" flex>
    <Panel style="width: 550px">
      <template slot="inner">
        <div class="card-container" flex="column">
          <Card>
            <template slot="title">联合奖惩</template>
            <template slot="content">
              <div class="ring-wrapper" flex>
                <chart :options="returnRingChart(memoCount, '备忘录数量')" theme="walden"></chart>
                <chart :options="returnRingChart(memoCount, '措施数量')" theme="walden"></chart>
                <chart :options="returnRingChart(memoCount, '实施部门数量')" theme="walden"></chart>
              </div>
            </template>
          </Card>
          <Card flex-box="1">
            <template slot="title">信用报告查询趋势分析</template>
            <template slot="content">
              <div class="bar-chart-container">
                <chart :options="returnBarChart(queryTrend)" theme="walden"></chart>
              </div>
            </template>
          </Card>
          <Card>
            <template slot="title">数据提报部门</template>
            <template slot="content">
              <div class="sub-list">
                <div class="submission-title" flex>
                  <span>部门名称</span>
                  <span>数量（条）</span>
                  <span>入库率</span>
                </div>
                <div class="submission-dept" v-for="(item, index) in submission" :key="index" flex>
                  <span>{{item.name}}</span>
                  <span>{{item.count}}&nbsp;&nbsp;&nbsp;</span>
                  <span>{{item.percent}}</span>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </template>
    </Panel>
    <Panel flex-box="1" style="margin-left: 0; margin-right: 0;padding: 0;">
      <template slot="inner">
        <div style="height: 100%;" flex="column">
          <div flex-box="1" flex="column cross-center">
            <Card style="width: 100%;">
              <template slot="title">数据归集总量</template>
              <template slot="content">
                <div style="background-color: #141e38;">
                  <TimeBar style="margin: 0 auto;display: block"></TimeBar>
                </div>
              </template>
            </Card>
            <chart flex-box="1" class="map-wrapper" :options="returnMapChart(mapData, mapGeoCoordMap)" @click="mapClick"></chart>
          </div>
          <Card style="width: 100%;box-sizing: border-box; height: 377px; margin-top: 20px;">
            <template slot="title">资源信息分类统计</template>
            <template slot="content">
              <div class="" style="background-color: #141e38; height: 100%;" flex>
                <div class="classify-box" flex="wrap">
                  <div class="count-item square-bg">
                    <i class="white-font" style="line-height: 40px;">一级分类</i><br>
                    <i class="num">{{ collection.lv1 }}</i><i>（条）</i>
                  </div>
                  <div class="count-item square-bg">
                    <i class="white-font" style="line-height: 40px;">二级分类</i><br>
                    <i class="num">{{ collection.lv2 }}</i><i>（条）</i>
                  </div>
                  <div class="count-item square-bg">
                    <i class="white-font" style="line-height: 40px;">资源数</i><br>
                    <i class="num">{{ collection.resourceCount }}</i><i>（条）</i>
                  </div>
                  <div class="count-item square-bg">
                    <i class="white-font" style="line-height: 40px;">部门数</i><br>
                    <i class="num">{{ collection.deptCount }}</i><i>（个）</i>
                  </div>
                </div>
                <chart flex-box="1" class="classify-bar-chart" theme="walden" :options="returnClassifyBarChart(collection.chartData)"></chart>
              </div>
            </template>
          </Card>
        </div>
      </template>
    </Panel>
    <Panel style="width: 550px">
      <template slot="inner">
        <div style="height: 100%;" flex="column space:between">
          <Card>
            <template slot="title">数据交换流向分析</template>
            <template slot="content">
              <div class="exchange-data-container">
                <div class="exchange-data-square" flex="wrap center">
                <span class="square-bg data-change">
                  <i>交换数据总量</i><br>
                  <i class="num">{{ dataExchange.getIn + dataExchange.getOut }}</i><i>（条）</i>
                </span>
                  <span class="square-bg data-change" flex="space:between">
                  <span>
                    <i class="num">{{ dataExchange.getIn }}</i><i>（条）</i><br>
                    <i>归集数据量</i><br>
                    <i style="line-height: 40px;">正确率</i><i style="color: #00ccff; line-height: 40px;">&nbsp;{{ dataExchange.getInCorrect }}</i><br>
                  </span>
                  <span>
                    <i class="num">{{ dataExchange.getOut }}</i><i>（条）</i><br>
                    <i>输出数据量</i><br>
                    <i style="line-height: 40px;">正确率</i><i style="color: #00ccff; line-height: 40px;">&nbsp;{{ dataExchange.getOutCorrect }}</i><br>
                  </span>
                </span>
                  <span class="square-bg data-change mt-5" style="padding-top: 12px;">
                  <i>已对接部门数</i><br>
                  <i class="num">{{ dataExchange.dockedNormal + dataExchange.dockedAbnormal }}</i><i>（个）</i>
                </span>
                  <span class="square-bg data-change mt-5">
                  <span style="padding-bottom: 0; padding-top: 0;">
                    <i>任务监控</i><br>
                    <i style="line-height: 40px;">正常任务</i>&nbsp;<i class="num">{{ dataExchange.dockedNormal }}</i>&nbsp;<i
                    style="line-height: 40px;">异常</i>&nbsp;<i class="num">{{ dataExchange.dockedAbnormal }}</i>
                  </span>
                </span>
                </div>
              </div>
              <chart style="width: 100%;" theme="walden" :options="returnExchangeBarChart(dataExchange.chartData)"></chart>
            </template>
          </Card>
          <Card flex-box="1">
            <template slot="title">红黑名单统计</template>
            <template slot="content">
              <div class="red-black-wrapper" flex="column">
                <div class="container" flex="center" flex-box="1">
                  <div class="red-list">
                    <span>
                      <i class="white-font">红名单</i><br>
                      <i class="num">{{ getKeysTotal(redBlackList.redList) }}</i>
                      <i class="white-font">（个）</i>
                    </span>
                  </div>
                  <div class="msg-list" flex="wrap">
                    <div class="msg-list-item" flex="main:center">
                    <span>
                      <p class="white-font">海关认证企业</p>
                      <p><i class="num">{{ redBlackList.redList.signCom }}</i><i class="white-font">（个）</i></p>
                    </span>
                    </div>
                    <div class="msg-list-item" flex="main:center">
                    <span>
                      <p class="white-font">A级纳税人</p>
                      <p><i class="num">{{ redBlackList.redList.taxpayer  }}</i><i class="white-font">（个）</i></p>
                    </span>
                    </div>
                    <div class="msg-list-item" flex="main:center">
                    <span>
                      <p class="white-font">社会法人诚实守信</p>
                      <p><i class="num">{{ redBlackList.redList.corp }}</i><i class="white-font">（个）</i></p>
                    </span>
                    </div>
                    <div class="msg-list-item" flex="main:center">
                    <span>
                      <p class="white-font">优秀青年志愿者</p>
                      <p><i class="num">{{ redBlackList.redList.volunteer }}</i><i class="white-font">（个）</i></p>
                    </span>
                    </div>
                  </div>
                </div>
                <div class="container" flex="center" flex-box="1">
                  <div class="red-list">
                    <span>
                      <i class="white-font">黑名单</i><br>
                      <i class="num">{{ getKeysTotal(redBlackList.blackList) }}</i>
                      <i class="white-font">（个）</i>
                    </span>
                  </div>
                  <div class="msg-list" flex="wrap">
                    <div class="msg-list-item" flex="main:center">
                    <span>
                      <p class="white-font">失信被执行人</p>
                      <p><i class="num">{{ redBlackList.blackList.performed }}</i><i class="white-font">（个）</i></p>
                    </span>
                    </div>
                    <div class="msg-list-item" flex="main:center">
                    <span>
                      <p class="white-font">重大税收违法案件</p>
                      <p><i class="num">{{ redBlackList.blackList.case }}</i><i class="white-font">（个）</i></p>
                    </span>
                    </div>
                    <div class="msg-list-item" flex="main:center">
                    <span>
                      <p class="white-font">拖欠农民工工资</p>
                      <p><i class="num">{{ redBlackList.blackList.unpaid }}</i><i class="white-font">（个）</i></p>
                    </span>
                    </div>
                    <div class="msg-list-item" flex="main:center">
                    <span>
                      <p class="white-font">严重失信债务人</p>
                      <p><i class="num">{{ redBlackList.blackList.lose }}</i><i class="white-font">（个）</i></p>
                    </span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </template>
    </Panel>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Panel from '../../../components/Panel/Panel'
  import Card from '../../../components/Card/Card'
  import TimeBar from '../../../components/TimeBar/TimeBar'
  import 'echarts/map/js/china'
  import 'echarts/map/js/province/anhui'
  export default {
    name: 'Overview',
    data() {
      return {

      }
    },
    components: {
      Panel,
      Card,
      TimeBar
    },
    created() {
      // 初始化页面数据
      // this.$store.dispatch('getOverview').then(()=>{
      //   this.numChange(this.$store.state.overview.total)
      // })
    },
    mounted(){
      // this.numChange(this.$store.state.overview.total)
    },
    computed: {
      ...mapState({
        memoCount: state => state.overview.memoCount,
        queryTrend: state => state.overview.queryTrend,
        submission: state => state.overview.submission,
        mapGeoCoordMap: state => state.overview.mapGeoCoordMap,
        mapData: state => state.overview.mapData,
        collection: state => state.overview.collection,
        redBlackList: state => state.overview.redBlackList,
        dataExchange: state => state.overview.dataExchange
      })
    },
    watch: {
    },
    methods: {
      mapClick(params){
        console.log(params.name)
      },
      returnRingChart(data, title){
        return {
          title: {
            subtext: title,
            subtextStyle: {
              fontSize: 16
            },
            textAlign: 'center',
            bottom: 10,
            left: '50%'
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              center: ['50%', '45%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: data
            }
          ]
        }
      },
      returnBarChart(data){
        return {
          xAxis: {
            type: 'category',
            boundaryGap: false
          },
          yAxis: {
            type: 'value'
          },
          dataset: {
            source: data
          },
          series: {
            type: 'line',
            areaStyle: {}
          }
        }
      },
      returnMapChart(data){
        return {
          /*title: {
            text: '中国',
          },*/
          grid: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          },
          tooltip: {
            trigger: 'item',
            formatter: params => {
              return params.name + '：' + params.value + '条'
            }
          },
          visualMap: {
            left: 'right',
            inRange: {
              color: ['#313695', '#4575b4', '#74add1', '#87b3c3']
            },
            show: false,
            text: ['High', 'Low']
          },
          series: [
            {
              type: 'map',
              zoom: 1.2,
              mapType: 'china', // 自定义扩展图表类型
              label: {
                show: true,
                color: '#fff',
                textShadowColor: '#333',
                textShadowBlur: 4
              },
              emphasis: {
                itemStyle: {
                  color: '#333',
                  areaColor: '#d5ddff'
                }
              },
              data: data
            }
          ]
        }
      },
      returnClassifyBarChart(data){
        return{
          color: '#00abfb',
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '2%',
            right: '10%',
            bottom: '10%',
            top: '12%',
            containLabel: true
          },
          dataset: {
            source: data
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            name: '（条）',
            nameGap: 8
          },
          yAxis: {
            type: 'category'
          },
          series: [
            {
              type: 'bar',
              barWidth: 10,
              itemStyle: {
                barBorderRadius: 8
              }
            }
          ]
        }
      },
      returnExchangeBarChart(data){
        return {
          grid: {
            bottom: '20%',
            right: '6%'
          },
          legend: {
            bottom: '6%',
            textStyle: { color: '#fff' }
          },
          tooltip: {},
          dataset: {
            // dimensions: ['product', 'collection', 'output'],
            source: data
          },
          xAxis: {
            type: 'category',
            boundaryGap: ['20%', '20%']
          },
          yAxis: {
            boundaryGap: ['20%', '20%'],
            name: '（条）',
            nameGap: 10
          },
          series: [
            {
              type: 'bar',
              barWidth: 8,
              barGap: 0
            },
            {
              type: 'bar',
              barWidth: 8
            }
          ]
        }
      },
      getKeysTotal(data) {
        const keyList = Object.keys(data)
        let sum = keyList.reduce((total, item) => {
          return total + data[item]
        }, 0)
        return sum
      }
    }
  }
</script>

<style lang="stylus" scoped>
.card-container
  height: 100%
  width: 100%
.ring-wrapper
  height: 200px
  margin-top: 10px
  overflow hidden
  -webkit-border-radius: 4px
  -moz-border-radius: 4px
  border-radius: 4px
  .echarts
    height: 100%
.bar-chart-container
  height: 100%
  .echarts
    height: 100%
    width: 100%
.sub-list
  color #fff
  >div
    padding 0 10px
    line-height: 30px
    border-bottom: 1px solid #141e38
    background-color: rgba(48,75,137,0.2)
    >span
      &:nth-child(1)
        flex: 1
      &:nth-child(2)
        width: 80px
        text-align right
      &:nth-child(3)
        width: 80px
        text-align right
  .submission-title
    font-weight: 700
    line-height: 40px
    background-color: #141e38
.map-wrapper
  width: 100%
.time-bar-title
  width: 500px
  font-weight: 700
  color #fff
.classify-bar-chart
  height 300px
.count-item
  box-sizing border-box
  padding-top: 30px
  width: 50%
  color #fff
  text-align center
.exchange-data-container
  background-color: #141e38
  padding 10px 20px
  margin-bottom: 10px
.exchange-data-square
  color #fff
  margin 10px auto
  .square-bg
    &:nth-child(odd)
      width: 140px
      border-right: 1px solid #183f6a
      margin-right: 20px
    &:nth-child(even)
      width 240px
    &:nth-child(n+3)
      padding-top: 10px
.red-black-wrapper
  background-color: #141e38
  color #fff
  padding: 4px 0
  height: 100%
  box-sizing border-box
  .container
    p
      margin: 0
      padding: 0
    .red-list,.black-list
      text-align center
      display flex
      align-items center
      width: 120px
      margin-right: 20px
    .msg-list
      width 300px
      .msg-list-item
        width 50%
</style>
