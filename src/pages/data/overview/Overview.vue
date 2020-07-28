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
            <template slot="title">数据交换流向分析</template>
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
    <Panel flex-box="1">
      <template slot="outer">
        <div>
          <chart :options="returnMapChart(mapData, mapGeoCoordMap)"></chart>
        </div>
      </template>
      <template slot="inner">1</template>
    </Panel>
    <Panel style="width: 550px">
      <template slot="inner">1</template>
      <template slot="outer">1</template>
    </Panel>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Panel from '../../../components/Panel/Panel'
  import Card from '../../../components/Card/Card'
  import 'echarts/map/js/china'
  export default {
    name: 'Overview',
    data() {
      return {

      }
    },
    components: {
      Panel,
      Card
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
        mapData: state => state.overview.mapData
      })
    },
    watch: {
    },
    methods: {
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
              name: '中国',
              type: 'map',
              mapType: 'china', // 自定义扩展图表类型
              label: {
                show: true
              },
              itemStyle: {
                color: '#fff',
                backgroundColor: '#eee'
              },
              data: data
            }
          ]
        }
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
    line-height: 40px
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
    line-height: 50px
    background-color: #141e38
</style>
