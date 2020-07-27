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
          <chart :options="returnMapChart(map.data, map.geoCoordMap)"></chart>
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
        map: state => state.overview.map
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
      returnMapChart(data,geoCoordMap){
        var convertData = function (data) {
          var res = [];
          for (let i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
              });
            }
          }
          return res;
        };
        return {
          title: {
            text: '中国',
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} (p / km2)'
          },
          visualMap: {
            show: false,
            min: 800,
            max: 50000,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
              color: ['#31d1e9']
            }
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
              data: [
                {name: '中西区', value: 20057.34},
                {name: '湾仔', value: 15477.48},
                {name: '东区', value: 31686.1},
                {name: '南区', value: 6992.6},
                {name: '油尖旺', value: 44045.49},
                {name: '深水埗', value: 40689.64},
                {name: '九龙城', value: 37659.78},
                {name: '黄大仙', value: 45180.97},
                {name: '观塘', value: 55204.26},
                {name: '葵青', value: 21900.9},
                {name: '荃湾', value: 4918.26},
                {name: '屯门', value: 5881.84},
                {name: '元朗', value: 4178.01},
                {name: '北区', value: 2227.92},
                {name: '大埔', value: 2180.98},
                {name: '沙田', value: 9172.94},
                {name: '西贡', value: 3368},
                {name: '离岛', value: 806.98}
              ],
              // 自定义名称映射
              nameMap: {
                'Central and Western': '中西区',
                'Eastern': '东区',
                'Islands': '离岛',
                'Kowloon City': '九龙城',
                'Kwai Tsing': '葵青',
                'Kwun Tong': '观塘',
                'North': '北区',
                'Sai Kung': '西贡',
                'Sha Tin': '沙田',
                'Sham Shui Po': '深水埗',
                'Southern': '南区',
                'Tai Po': '大埔',
                'Tsuen Wan': '荃湾',
                'Tuen Mun': '屯门',
                'Wan Chai': '湾仔',
                'Wong Tai Sin': '黄大仙',
                'Yau Tsim Mong': '油尖旺',
                'Yuen Long': '元朗'
              }
            },
            {
              name: 'pm2.5',
              type: 'scatter',
              coordinateSystem: 'bmap',
              data: convertData(data),
              symbolSize: function (val) {
                return val[2] / 10;
              },
              encode: {
                value: 2
              },
              label: {
                formatter: '{b}',
                position: 'right',
                show: false
              },
              itemStyle: {
                color: 'purple'
              },
              emphasis: {
                label: {
                  show: true
                }
              }
            },
            {
              name: 'Top 5',
              type: 'effectScatter',
              coordinateSystem: 'bmap',
              data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
              }).slice(0, 6)),
              symbolSize: function (val) {
                return val[2] / 10;
              },
              encode: {
                value: 2
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              label: {
                formatter: '{b}',
                position: 'right',
                show: true
              },
              itemStyle: {
                color: 'purple',
                shadowBlur: 10,
                shadowColor: '#333'
              },
              zlevel: 1
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
