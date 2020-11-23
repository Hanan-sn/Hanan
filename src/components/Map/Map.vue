<template>
  <div class="summary" flex>
    <div id="map"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import 'echarts/map/js/china'
  // 统一变量
  const xyLineColor = '#535e83'
  const splitLineColor = '#283353'
  export default {
    name: 'SummaryMap',
    data() {
      return {
        open: false,
        date: '',
        dateTab: 0,
        chartTab: 0
      }
    },
    mounted() {
      this.renderMap({ id: 'map', mapData: this.mapData })
    },
    methods: {
      renderMap(paramObj) {
        var effect = '#06eaed'
        var flyLine = '#ffffff'
        var border = '#105689'
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
        var chinaDatas = paramObj.mapData
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
        [['北京市', chinaDatas]].forEach(function (item, i) {
          series.push(
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
                    if(params.data.name !== '北京市'){
                      return params.data.name
                    } else {
                      return ''
                    }
                  },
                  fontSize: 13
                },
                emphasis: {
                  show: false
                }
              },
              symbol: 'circle',
              symbolSize: function (val) {
                return 8 + val[2] * 2 // 圆环大小
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
              symbolSize: 30,
              data: [{
                name: item[0],
                value: chinaGeoCoordMap[item[0]].concat([10])
              }]
            }
          )
        })
        var option = {
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
              if (name !== '北京市'){
                var value = params.value[params.seriesIndex + 1]
                res = '<span style=\'color:#fff;\'>' + name + '</span><br/>数据：' + value
                return res
              } else {
                return '<span style=\'color:#fff;\'>' + name + '</span><br/>数据：' + params.value
              }
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
                color: 'rgba(51, 69, 89, 0.2)', // 地图背景色
                // color:'#0f1d37',
                borderColor: border, // 省市边界线00fcff 516a89
                borderWidth: 1,
                shadowColor: bg,
                shadowBlur: 4
              },
              emphasis: {
                color: 'rgba(37, 43, 61, .5)' // 悬浮背景
              }
            }
          },
          series: series
        }
        var chart = echarts.init(document.getElementById(paramObj.id))
        chart.setOption(option)
      }
    }
  }
</script>

<style lang="stylus" scoped>
#map
  width: 100%
  height: 100%
  position relative
  z-index 5
</style>
