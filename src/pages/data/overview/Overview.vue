<template>
  <div class="overview" flex>
    <!--<SpritModel />-->
    <SidePanel>
      <template #content>
        <Card style="margin-bottom: 10px; flex: 2;">
          <template #title>
            联合奖惩
          </template>
          <template #content>
            <div flex="justify:around">
              <div v-for="(item, i) in 3" :key="i" class="count-card" style="width: 32%">
                <div><i class="sub">备忘录数量</i><i class="unit">(个)</i></div>
                <div><i class="num">380000</i></div>
              </div>
            </div>
            <div style="width: 100%; flex: 1;" flex="dir:col">
              <chart style="width: 100%; flex: 1;"
                     theme="westeros"
                     :options="pieOption">
              </chart>
            </div>
          </template>
        </Card>
        <Card style="margin-bottom: 10px; flex: 3;">
          <template #title>
            数据交换流向分析
          </template>
          <template #content>
            <div class="exchange-wrapper" flex="wrap justify:around">
              <div class="left-card" style="margin-bottom: 10px;">
                <div><i class="iconfont icon-shujuku"></i></div>
                <div><i class="sub">交换数据总量</i></div>
                <div><i class="num">8846</i><i>(条)</i></div>
              </div>
              <div class="right-card" style="margin-bottom: 10px;" flex>
                <div class="divide" flex="dir:col justify:around">
                  <div><i class="num">5555</i><i class="unit">(个)</i></div>
                  <div><i class="sub">归集数据量</i></div>
                  <div><i class="sub">正确率</i><i class="percent">90%</i></div>
                </div>
                <div class="divide" flex="dir:col justify:around">
                  <div><i class="num">5555</i><i class="unit">(个)</i></div>
                  <div><i class="sub">输出数据量</i></div>
                  <div><i class="sub">正确率</i><i class="percent">90%</i></div>
                </div>
              </div>
              <div class="left-card">
                <div><i class="sub">交换数据总量</i></div>
                <div><i class="num">8846</i><i>(条)</i></div>
              </div>
              <div class="right-card" flex>
                <div class="divide">
                  <div><i class="sub">交换数据总量</i></div>
                  <div><i class="num">8846</i><i>(条)</i></div>
                </div>
                <div class="divide">
                  <div><i class="sub">&nbsp;</i></div>
                  <div><i class="num">8846</i><i>(条)</i></div>
                </div>
              </div>
            </div>
            <chart style="width: 100%; flex: 1;"
                   theme="westeros"
                   :options="exchangeBarOption"></chart>
          </template>
        </Card>
      </template>
    </SidePanel>
    <CenterPanel flex="dir:col align:center">
      <template #content>
        <chart :options="mapOptions" style="width: 100%; flex: 1;"></chart>
        <Card style="margin-bottom: 10px;">
          <template #title>
            红黑名单统计
          </template>
          <template #content>
            <div class="inner-table" flex>
              <div flex="wrap justify:around" v-for="(itemW, iW) in 2" :key="iW">
                <div class="count-card" style="padding: 8px 8px 7px" v-for="(item, i) in 4" :key="i" flex="align:center">
                  <i class="iconfont icon-renzheng"></i>
                  <div flex="dir:col">
                    <span><i class="sub">海关认证企业</i></span>
                    <span><i class="num">15689</i><i class="unit">(个)</i></span>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </template>
    </CenterPanel>
    <SidePanel>
      <template #content>
        <Card style="margin-bottom: 10px; flex: 1;">
          <template #title>
            资源信息分类统计
          </template>
          <template #content>
            <div flex>
              <div class="count-card" style="margin-right: 8px;" flex="dir:col align:center">
                <span><i class="sub">一级分类</i><i class="unit">(个)</i></span>
                <span><i class="num">7</i></span>
              </div>
              <div class="count-card" style="margin-right: 8px;" flex="dir:col align:center">
                <span><i class="sub">二级分类</i><i class="unit">(个)</i></span>
                <span><i class="num">7</i></span>
              </div>
              <div class="count-card" style="margin-right: 8px;" flex="dir:col align:center">
                <span><i class="sub">资源数</i><i class="unit">(个)</i></span>
                <span><i class="num">7</i></span>
              </div>
              <div class="count-card" flex="dir:col align:center">
                <span><i class="sub">部门数</i><i class="unit">(个)</i></span>
                <span><i class="num">7</i></span>
              </div>
            </div>
            <chart :options="resBarOptions" theme="westeros" style="flex: 1; width: 100%;"></chart>
          </template>
        </Card>
        <Card style="margin-bottom: 10px;">
          <template #title>
            数据提报部门
          </template>
          <template #content>
            <div class="table-wrapper" flex="wrap justify:between">
              <span>部门名称</span>
              <span>数量（条）</span>
              <span>入库率</span>
            </div>
            <swiper :options="swiperOptions"
                    style="height: 260px; width: 100%; overflow: hidden">
              <swiper-slide class="swiper-item"
                            v-for="(item, index) in subList"
                            :key="index"
                            flex="wrap justify:between">
                <span>{{item.name}}</span>
                <span>{{item.count}}</span>
                <span class="percent">{{item.percent}}</span>
              </swiper-slide>
            </swiper>
          </template>
        </Card>
      </template>
    </SidePanel>
  </div>
</template>

<script>
  // import SpritModel from '../../../components/Animation3D/SpriteModel'
  import Card from '../../../components/Card/Card'
  import SidePanel from '../../../components/Panel/SidePanel'
  import CenterPanel from '../../../components/Panel/CenterPanel'
  // import { mapState } from 'vuex'
  import 'echarts/map/js/china'
  export default {
    name: 'Overview',
    data() {
      return {
        pieOption: {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          series: [
            {
              type: 'pie',
              radius: ['55%', '70%'],
              center: ['50%', '50%'],
              avoidLabelOverlap: false,
              label: {
                show: true
              },
              emphasis: {
                label: {
                  show: true,
                  position: 'center'
                }
              },
              data: [
                { value: 335, name: '自然人惩戒' },
                { value: 310, name: '自然人激励' },
                { value: 234, name: '法人惩戒' },
                { value: 135, name: '法人激励' }
              ]
            },
            {
              type: 'pie',
              radius: ['0', '45%'],
              center: ['50%', '50%'],
              avoidLabelOverlap: false,
              label: {
                show: true
              },
              emphasis: {
                label: {
                  show: true,
                  position: 'center'
                }
              },
              data: [
                { value: 310, name: '激励' },
                { value: 234, name: '惩戒' }
              ]
            }
          ]
        },
        exchangeBarOption: {
          grid: {
            top: '30%',
            left: '18%',
            bottom: '16%'
          },
          legend: {
            top: '10%',
            data: ['归集', '输出']
          },
          xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '归集',
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.8)'
              }
            },
            {
              name: '输出',
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.8)'
              }
            }
          ]
        },
        resBarOptions: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            top: '10%',
            left: '3%',
            right: '4%',
            bottom: '6%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['基础信息', '业务信息', '司法信息', '行政执法信息', '公共事业信息', '信用评级信息', '其他信息']
          },
          series: [
            {
              type: 'bar',
              data: [18203, 23489, 29034, 104970, 131744, 111744, 630230]
            }
          ]
        },
        swiperOptions: {
          direction: 'vertical',
          loop: true,
          slidesPerView: 8
        },
        subList: [
          { name: '模拟部门1', count: 123456, percent: '90%' },
          { name: '模拟部门2', count: 123456, percent: '90%' },
          { name: '模拟部门3', count: 123456, percent: '90%' },
          { name: '模拟部门4', count: 123456, percent: '90%' },
          { name: '模拟部门5', count: 123456, percent: '90%' },
          { name: '模拟部门6', count: 123456, percent: '90%' },
          { name: '模拟部门7', count: 123456, percent: '90%' },
          { name: '模拟部门8', count: 123456, percent: '90%' },
          { name: '模拟部门9', count: 123456, percent: '90%' },
          { name: '模拟部门10', count: 123456, percent: '90%' },
          { name: '模拟部门11', count: 123456, percent: '90%' },
          { name: '模拟部门12', count: 123456, percent: '90%' }
        ]
      }
    },
    components: {
      // SpritModel,
      Card,
      SidePanel,
      CenterPanel
    },
    computed: {
      mapOptions: () => {
        var effect = 'rgb(250,250,12)'
        var flyLine = 'rgb(255,255,255)'
        var border = 'rgba(180,180,255,0.6)'
        var bg = 'rgba(2,10,34,0.8)'
        var bg1 = '#040c22'
        var chinaGeoCoordMap = {
          '黑龙江': [126.642464, 47.756967],
          '内蒙古': [110.3467, 41.4899],
          '吉林': [125.8154, 44.2584],
          '北京市': [116.4551, 40.2539],
          '辽宁': [123.1238, 42.1216],
          '河北': [115.4995, 38.1006],
          '天津': [117.4219, 39.4189],
          '山西': [112.3352, 37.9413],
          '陕西': [109.1162, 34.2004],
          '甘肃': [103.5901, 36.3043],
          '宁夏': [106.3586, 38.1775],
          '青海': [97.4038, 36.8207],
          '新疆': [87.617733, 43.792818],
          '西藏': [91.11, 29.97],
          '四川': [103.9526, 30.7617],
          '重庆': [108.384366, 30.439702],
          '山东': [117.1582, 36.8701],
          '河南': [113.4668, 34.6234],
          '江苏': [119.9062, 33.2208],
          '安徽': [117.29, 32.0581],
          '湖北': [114.3896, 30.6628],
          '浙江': [119.5313, 29.8773],
          '福建': [117.4543, 25.9222],
          '江西': [116.0046, 28.6633],
          '湖南': [113.0823, 28.2568],
          '贵州': [106.6992, 26.7682],
          '广东': [113.12244, 23.009505],
          '广西': [108.479, 23.1152],
          '海南': [110.3893, 19.8516],
          '上海': [121.4648, 31.2891],
          '云南': [102.712251, 25.040609]
        }
        var chinaDatas = [
          [{
            name: '黑龙江',
            value: 1
          }], [{
            name: '北京市',
            value: 3
          }], [{
            name: '内蒙古',
            value: 1
          }], [{
            name: '吉林',
            value: 1
          }], [{
            name: '辽宁',
            value: 1
          }], [{
            name: '河北',
            value: 2
          }], [{
            name: '天津',
            value: 2
          }], [{
            name: '山西',
            value: 1
          }], [{
            name: '陕西',
            value: 1
          }], [{
            name: '甘肃',
            value: 1
          }], [{
            name: '宁夏',
            value: 1
          }], [{
            name: '青海',
            value: 1
          }], [{
            name: '新疆',
            value: 1
          }], [{
            name: '西藏',
            value: 1
          }], [{
            name: '四川',
            value: 2
          }], [{
            name: '重庆',
            value: 2
          }], [{
            name: '山东',
            value: 1
          }], [{
            name: '河南',
            value: 1
          }], [{
            name: '江苏',
            value: 4
          }], [{
            name: '安徽',
            value: 1
          }], [{
            name: '湖北',
            value: 2
          }], [{
            name: '浙江',
            value: 2
          }], [{
            name: '福建',
            value: 2
          }], [{
            name: '江西',
            value: 1
          }], [{
            name: '湖南',
            value: 2
          }], [{
            name: '贵州',
            value: 1
          }], [{
            name: '广西',
            value: 1
          }], [{
            name: '海南',
            value: 2
          }], [{
            name: '上海',
            value: 3
          }], [{
            name: '云南',
            value: 1
          }]
        ]
        var convertData = function (data) {
          var res = []
          for (var i = 0; i < data.length; i++) {
            var dataItem = data[i]
            var fromCoord = chinaGeoCoordMap[dataItem[0].name]
            // 中心点坐标
            var toCoord = [116.4551, 40.2539]
            if (fromCoord && toCoord) {
              res.push([
                {
                  coord: fromCoord,
                  value: dataItem[0].value
                },
                {
                  coord: toCoord
                }
              ])
            }
          }
          return res
        }
        var series = [];

        /*
        {
          type: 'lines',
          tooltip: { show: false },
          zlevel: 1,
          effect: {
            show: true,
            period: 5, // 箭头指向速度，值越小速度越快
            trailLength: 0.1, // 特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'arrow',
            symbolSize: [5, 10] // 图标大小
          },
          lineStyle: {
            color: flyLine,
            width: 1, // 尾迹线条宽度
            opacity: 0.1, // 尾迹线条透明度
            curveness: 0.8 // 尾迹线条曲直度
          },
          data: convertData(item[1])
        },
        */
        [['北京市', chinaDatas]].forEach(function (item, i) {
          series.push(
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              zlevel: 2,
              rippleEffect: { // 涟漪特效
                period: 4, // 动画时间，值越小速度越快
                brushType: 'stroke', // 波纹绘制方式 stroke, fill
                scale: 3 // 波纹圆环最大限制，值越大波纹越大
              },
              label: {
                normal: {
                  show: true,
                  position: 'right', // 显示位置
                  offset: [8, 0], // 偏移设置
                  // 圆环显示文字
                  formatter: function (params) {
                    return params.data.name
                  },
                  fontSize: 13
                },
                emphasis: {
                  show: false
                }
              },
              symbol: 'circle',
              symbolSize: function (val) {
                return 2 + val[2] * 3 // 圆环大小
              },
              itemStyle: {
                normal: {
                  show: false,
                  color: effect
                }
              },
              data: item[1].map(function (dataItem) {
                return {
                  name: dataItem[0].name,
                  value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                }
              })
            },
            // 标的点
            {
              type: 'scatter',
              coordinateSystem: 'geo',
              zlevel: 2,
              rippleEffect: {
                period: 4,
                brushType: 'stroke',
                scale: 2
              },
              label: {
                textBorderColor: '#000',
                show: true,
                position: 'right',
                // offset:[5, 0],
                color: '#00d0ff',
                formatter: '{b}',
                textStyle: {
                  fontSize: 22,
                  color: '#fff'
                },
                // textShadowColor:'#fff',
                // textShadowBlur:2,
                emphasis: {
                  show: true,
                  color: '#f60'
                }
              },
              symbol: 'pin',
              symbolSize: 60,
              itemStyle: {
                color: 'rgb(247,78,121)'
              },
              data: [{
                name: item[0],
                value: chinaGeoCoordMap[item[0]].concat([10])
              }]
            }
          )
        })
        var options = {
          tooltip: {
            trigger: 'item',
            borderColor: '#FFFFCC',
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            extraCssText: 'z-index:100',
            formatter: function (params, ticket, callback) {
              // 根据业务自己拓展要显示的内容
              var res = ''
              var name = params.name
              var value = params.value[params.seriesIndex + 1]
              res = '<span style=\'color:#fff;\'>' + name + '</span><br/>数据：' + value
              return res
            }
          },
          geo: {
            map: 'china',
            zoom: 1.2,
            label: {
              emphasis: {
                show: false
              }
            },
            roam: false, // 是否允许缩放
            itemStyle: {
              normal: {
                color: 'rgba(10,120,200,0.8)', // 地图背景色
                // color:'#0f1d37',
                borderColor: border, // 省市边界线00fcff 516a89
                borderWidth: 1,
                shadowColor: bg,
                shadowBlur: 8
              },
              emphasis: {
                color: 'rgba(50, 60, 70, .8)' // 悬浮背景
              }
            }
          },
          series: series
        }
        return options
      }
    },
    mounted() {
      this.renderMap({ id: 'map' })
      // this.numChange(this.$store.state.overview.total)
    },
    watch: {
    },
    methods: {
      renderMap() {

      }
    }
  }
</script>

<style lang="stylus" scoped>
.overview
  flex: 1
  box-sizing border-box
#map
  margin: 20px auto
.inner-table
  .iconfont
    color: #c8f0ff
    text-shadow 0 0 4px #17C2EA
    font-size 24px
    margin-right: 10px
.count-card
  background-color: #173E8D
  padding: 2px 6px
  box-sizing border-box
  width: 48%
  margin-bottom: 8px
.sub
  color #fff
  font-size 12px
.unit
  color: #17C2EA
  font-size: 12px
.num
  color: #17C2EA
  font-weight: 700
  font-size 18px
.exchange-wrapper
  color: #fff
  height: 176px
  .left-card
    width: 35%
    background-color: rgba(33,82,177,0.6)
    padding 10px 0
    .iconfont
      font-size 28px
      color: #17C2EA
    div
      text-align center
  .right-card
    width 60%
    padding 10px 0
    background-color: rgba(33,82,177,0.6)
    .divide
      padding-left: 20px
      flex: 1

</style>
